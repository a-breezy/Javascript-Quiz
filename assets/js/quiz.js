// querySelectors of HTML
var highscoreButtonEl = document.querySelector("#highscoreBtn");
var questionArea = document.querySelector(".question-area");
var startButtonEl = document.querySelector("#startBtn");
var startDiv = document.querySelector(".start-area");
var timerEl = document.querySelector("#countdownTimer");

// VARS
var currentQuestionIndex = 0;
var lastQuestionIndex = -1;
var randomQuestion = "";
var score = 0;
var timer = 90;

// create a list of questions and set as an array with properties: index, question, correct answer
var questionsArr = [
  {
    question: "What does 'DOM' stand for?",
    answerList: [
      "A. Direct Object Method",
      "B. Direct Occuring Method",
      "C. Document Object Model",
      "D. Document Occuring Measure",
    ],
    correctAnswer: "C. Document Object Model",
  },

  {
    question: "How does Control Flow Work?",
    answerList: [
      "A. Control Flow creates conditional statements to decide how to proceed",
      "B. Control Flow determins how the browser should interpret the code",
      "C. Control Flow accepts users input and terminates the program",
      "D. Control Flow is like a dam slowing down the browser's speed",
    ],
    correctAnswer:
      "A. Control Flow creates conditional statements to decide how to proceed",
  },
  {
    question: "What operator do you use to set equality?",
    answerList: ["A. ||", "B. ===", "C. &&", "D. =="],
    correctAnswer: "B. ===",
  },
  {
    question: "How does Pseudocode enhance code?",
    answerList: [
      "A. Put's computer languge into human language",
      "B. Comments code to make it more readable",
      "C. Describes steps for an application to follow",
      "D. All Of The Above",
    ],
    correctAnswer: "D. All Of The Above",
  },
  {
    question: "How do parameters effect functions",
    answerList: [
      "A. They make functions more efficient",
      "B. When set, parameters confine functions to particular tasks",
      "C. They are placeholders for arguments that will be passed into the function",
      "D. Parameters are not related to functions at all",
    ],
    correctAnswer:
      "C. They are placeholders for arguments that will be passed into the function",
  },
  {
    question: "What is scope",
    answerList: [
      "A. Scope is where functions are accessible from",
      "B. Scope is something that you look through to see things far away",
      "C. Scope is a way to determine a variables functionality",
      "D. Answers A and C",
    ],
    correctAnswer: "D. Answers A and C",
  },
  {
    question: "Fill in the blank: ___(var 1 = 0; i < 5; i++)",
    answerList: ["A. for", "B. if", "C. Switch", "D. var"],
    correctAnswer: "A. for",
  },
  {
    question: "How does 'Math' assist JavaScript Users",
    answerList: [
      "A. 'Math' acts as a calculator",
      "B. 'Math' is a number of built in functions which give the user various functionalities",
      "C. Without 'Math' the user would only be able to use conditional statements",
      "D. 'Math' lets the user conver numbered strings to integer variables",
    ],
    correctAnswer:
      "B. 'Math' is a number of built in functions which give the user various functionalities",
  },
  {
    question: "How does DOM allow greater functionality",
    answerList: [
      "A. DOM increases memory allocation allowing the browser render images faster",
      "B. DOM let's the user iterate through JavaScript functions",
      "C. DOM is a representation of the html making it manipulatable by JavaScript",
      "D. DOM condenses code into a file that's easier than HTML to read",
    ],
    correctAnswer:
      "C. DOM is a representation of the html making it manipulatable by JavaScript",
  },
  {
    question: "How does localStorage differ from sessionStorage",
    answerList: [
      "A. LocalStorage is held on your computer's hard drive, while sessionStorage is held on the browsers memory",
      "B. They act the same but localStorage relates to web applications while sessionStorage relates to your computer's applications",
      "C. They are the same, just different names to reference",
      "D. LocalStorage can persist after an application is closed, while sessionStorage is deleted when application closes",
    ],
    correctAnswer:
      "D. LocalStorage can persist after an application is closed, while sessionStorage is deleted when application closes",
  },
];

// FUNCTS
// timer starts at 30 sec and goes down. each finished round adds 10 seconds
var timeLeft = function () {
  timerEl.textContent = timer;
  timer--;

  // timer doesnt stop at 0 <--
  if (timer === 0) {
    clearTimeout(timer);
    gameOver();
    window.alert("Time Over");
  } else if (currentQuestionIndex === questionsArr.length) {
    clearTimeout(timer);
    document.getElementById("countdownTimer").textContent = 0;
  }
};

var startQuiz = function () {
  var currentQuestionIndex = questionsArr[0];
  setInterval(timeLeft, 1000);
  showQuestion();
};

// var showNextQuestion = function () {
//   showQuestion(randomQuestion[currentQuestionIndex]);
// };

var showQuestion = function () {
  // hide div with start button
  startDiv.classList.add("hide");

  // creates a new div to house questions and answers
  var questionContainer = document.createElement("div");
  questionContainer.className = "questionContainer";
  questionArea.appendChild(questionContainer);

  // creates a div to post question as innerText
  var postQuestion = document.createElement("div");
  postQuestion.textContent = questionsArr[currentQuestionIndex].question;
  postQuestion.className = "question";
  questionContainer.appendChild(postQuestion);

  // creates a div to hold the possible answers
  var createQuestionBox = function () {
    var answerListLength = questionsArr[currentQuestionIndex].answerList.length;

    // creates a div to hold question[i] (index0-3), gives id question-list[i], appends to postAnswerList
    var createAnswerList = function () {
      var postAnswerList = document.createElement("div");
      postAnswerList.textContent =
        questionsArr[currentQuestionIndex].answerList[i];
      postAnswerList.className = "question-list";
      postAnswerList.id = "question-list" + [i];
      questionContainer.appendChild(postAnswerList);

      // when answer is clicked it is compared with correct answer.
      postAnswerList.addEventListener("click", function () {
        // if true (they match) 10 points are added to score and currenQuestionIndex +1
        if (
          questionsArr[currentQuestionIndex].correctAnswer ==
          postAnswerList.textContent
        ) {
          score += 10;
          // go onto next question
          currentQuestionIndex++;
          showNextQuestion();
        }
        // 10 seconds are subtracted from timer, showNextQuestion()
        else {
          timer -= 10;
          currentQuestionIndex++;
          showNextQuestion();
        }
      });

      //   NEXT STEP IS TO MAKE THE showNextQuestion() function that shows another question while getting rid of first question
      var showNextQuestion = function () {
        // remove previous quesiton and run function to add new question at currentQuestionIndex
        if (currentQuestionIndex < questionsArr.length) {
          questionContainer.parentNode.removeChild(questionContainer);
          showQuestion();
        } else {
          questionContainer.parentNode.removeChild(questionContainer);
          gameOver();
        }
      };
    };

    // loops through answerList array, creating each question in the process
    for (var i = 0; i < answerListLength; i++) {
      createAnswerList();
    }
  };
  createQuestionBox();
};

var createCurrentQuestionIndex = function () {
  // check if we didn't pass all questions yet
  if (currentQuestionIndex < questionsArr.length) {
    console.log(questions[currentQuestion]);

    // create var to hold length of answerList array
    var answerListLength = questionsArr[currentQuestionIndex].answerList.length;
  }
};

// function to get and save user initials to localStorage for highscore
var userName = function () {
  var initials = prompt("What are your initials");
  console.log(initials);
  console.log(score);
  userScore = [initials, score];
  console.log(userScore);
  return;
};

var gameOver = function () {
  userName();
  // set score in localStorage
  localStorage.setItem("userScore", JSON.stringify(userScore));

  // create div to post question to with button to retake quiz
  var retakeQuiz = document.createElement("div");
  retakeQuiz.className = "retake-quiz";
  questionArea.appendChild(retakeQuiz);

  // add innerhtml text so that a line break occurs 
  retakeQuiz.textContent = ("User Initials: " + userScore.initials <br/> "Score: " + userScore.score;
};

// START
//function() parameter is placeholder for startQuiz() once complete
startButtonEl.addEventListener("click", function () {
  startQuiz();
});

// function() parameter is placeholder for highscore() once complete
highscoreButtonEl.addEventListener("click", function () {
  console.log(userScore);
  JSON.parse(localStorage.getItem("userScore"));
});
timerEl.addEventListener("click", timeLeft());
