// querySelectors of HTML
var highscoreButtonEl = document.querySelector("#highscoreBtn");
var questionArea = document.querySelector(".question-area");
var startButtonEl = document.querySelector("#startBtn");
var startDiv = document.querySelector(".start-area");
var timerEl = document.querySelector("#countdownTimer");

// VARS
var currentQuestionIndex = 0;
var score = 0;
var timeDisp = 90;
var savedScore = JSON.parse(localStorage.getItem("userScore"));
var userScore = [];

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
    question: "What operator do you use to set strict equality?",
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
      "D. 'Math' lets the user convert numbered strings to integer variables",
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
var startTime = function () {
  var timer = setInterval(timeDecrease, 1000);
  function timeDecrease() {
    timerEl.textContent = timeDisp;
    timeDisp--;

    if (timeDisp < 0 && !(currentQuestionIndex === questionsArr.length)) {
      clearInterval(timer);
      timerEl.textContent = 0;
      timeDisp = 0;
      document.querySelector(".question-container").classList.add("hide");
      gameOver();
    }
  }
};

var startQuiz = function () {
  startTime();
  showQuestion();
};

var showQuestion = function () {
  // hide div with start button
  startDiv.classList.add("hide");

  // creates a new div to house questions and answers
  var questionContainer = document.createElement("div");
  questionContainer.className = "question-container";
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
          console.log(currentQuestionIndex);
          console.log(score);
        }
        // 10 seconds are subtracted from timer, showNextQuestion()
        else {
          timeDisp -= 10;
          currentQuestionIndex++;
          console.log(currentQuestionIndex);
          showNextQuestion();
        }
      });

      // make showNextQuestion() function that shows another question while getting rid of first question
      var showNextQuestion = function (timer) {
        // remove previous quesiton and run function to add new question at currentQuestionIndex
        if (currentQuestionIndex < questionsArr.length) {
          questionContainer.parentNode.removeChild(questionContainer);
          showQuestion();
        } else if (currentQuestionIndex === questionsArr.length) {
          timeDisp = 0;
          questionContainer.classList.add("hide");
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

// function to get and save user initials to localStorage for highscore
var userName = function () {
  var initials = prompt("What are your initials");
  var obj = {
    name: initials,
    postScore: score,
  };
  userScore.push(obj);
};

// post user score to page
var postUserScore = function (name, score) {
  var afterQuiz = document.createElement("div");
  afterQuiz.className = "after-quiz";
  questionArea.appendChild(afterQuiz);
  // add innerhtml text so that a line break occurs
  afterQuiz.textContent = "User Initials: " + name;

  // add text content for userScore
  var afterQuizScore = document.createElement("p");
  afterQuizScore.className = "after-quiz";
  questionArea.appendChild(afterQuizScore);
  afterQuizScore.textContent = "Score: " + score;

  startDiv.classList.remove("hide");
};

// funcition for the end of game
var gameOver = function () {
  userName();
  // set score in localStorage
  localStorage.setItem("userScore", JSON.stringify(userScore));
  postUserScore(userScore[0].name, userScore[0].postScore);
};

// START
//function() parameter is placeholder for startQuiz() once complete
startButtonEl.addEventListener("click", startQuiz);

// function() parameter is placeholder for highscore() once complete
highscoreButtonEl.addEventListener("click", function () {
  // gets user score from localStorage and parses it into  the postScore()
  savedScore;
  postUserScore(savedScore[0].name, savedScore[0].postScore);
});
