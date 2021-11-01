// querySelectors of HTML
var highscoreButtonEl = document.querySelector("#highscoreBtn");
var questionContainer = document.querySelector(".question-container");
var startButtonEl = document.querySelector("#startBtn");
var startDiv = document.querySelector(".start-area");
var timerEl = document.querySelector("#countdownTimer");

// VARS
var currentQuestionIndex = 0;
var lastQuestionIndex = -1;
var randomQuestion = "";
var score = 0;
var timer = 30;

// create a list of questions and set as an array with properties: index, question, correct answer
var questionsArr = [
  // {
  //   question: "What does 'DOM' stand for?",
  //   answerList: [
  //     "A. Direct Object Method",
  //     "B. Direct Occuring Method",
  //     "C. Document Object Model",
  //     "D. Document Occuring Measure",
  //   ],
  //   correctAnswer: "C. Document Object Model"],
  // },
  // {
  //   question: "How does Control Flow Work?",
  //   answerList: [
  //     "A. Control Flow creates conditional statements to decide how to proceed",
  //     "B. Control Flow determins how the browser should interpret the code",
  //     "C. Control Flow accepts users input and terminates the program",
  //     "D. Control Flow is like a dam slowing down the browser's speed",
  //   ],
  //   correctAnswer: "A. Control Flow creates conditional statements to decide how to proceed",
  // },
  // {
  //   question: "What operator do you use to set equality?",
  //   answerList: ["A. ||", "B. ===", "C. &&", "D. =="],
  //   correctAnswer: "B. ===",
  // },
  // {
  //   question: "How does Pseudocode enhance code?",
  //   answerList: [
  //     "A. Put's computer languge into human language",
  //     "B. Comments code to make it more readable",
  //     "C. Describes steps for an application to follow",
  //     "D. All Of The Above",
  //   ],
  //   correctAnswer: "D. All Of The Above",
  // },
  // {
  //   question: "How do parameters effect functions",
  //   answerList: [
  //     "A. They make functions more efficient",
  //     "B. When set, parameters confine functions to particular tasks",
  //     "C. They are placeholders for arguments that will be passed into the function",
  //     "D. Parameters are not related to functions at all",
  //   ],
  //   correctAnswer: "C. They are placeholders for arguments that will be passed into the function",
  // },
  // {
  //   question: "What is scope",
  //   answerList: [
  //     "A. Scope is where functions are accessible from",
  //     "B. Scope is something that you look through to see things far away",
  //     "C. Scope is a way to determine a variables functionality",
  //     "D. Answers A and C",
  //   ],
  //   correctAnswer: "D. Answers A and C",
  // },
  // {
  //   question: "Fill in the blank: ___(var 1 = 0; i < 5; i++)",
  //   answerList: ["A. for", "B. if", "C. Switch", "D. var"],
  //   correctAnswer: "A. for",
  // },
  // {
  //   question: "How does 'Math' assist JavaScript Users",
  //   answerList: [
  //     "A. 'Math' acts as a calculator",
  //     "B. 'Math' is a number of built in functions which give the user various functionalities",
  //     "C. Without 'Math' the user would only be able to use conditional statements",
  //     "D. 'Math' lets the user conver numbered strings to integer variables",
  //   ],
  //   correctAnswer: "B. 'Math' is a number of built in functions which give the user various functionalities",
  // },
  // {
  //   question: "How does DOM allow greater functionality",
  //   answerList: [
  //     "A. DOM increases memory allocation allowing the browser render images faster",
  //     "B. DOM let's the user iterate through JavaScript functions",
  //     "C. DOM is a representation of the html making it manipulatable by JavaScript",
  //     "D. DOM condenses code into a file that's easier than HTML to read",
  //   ],
  //   correctAnswer: "C. DOM is a representation of the html making it manipulatable by JavaScript",
  // },
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
  document.getElementById("countdownTimer").textContent = timer;
  timer--;
  console.log(timer);

  if (timer === 0) {
    gameOver();
    window.alert("Game Over");
  } else if (currentQuestionIndex === questionsArr.length) {
    clearTimeout(timer);
    document.getElementById("countdownTimer").textContent = 0;
  }
};

var startQuiz = function () {
  var randomQuestion = questionsArr.sort(() => Math.random());
  setInterval(timeLeft, 1000);
  var currentQuestionIndex = 0;
  showQuestion();
};

var showNextQuestion = function () {
  showQuestion(randomQuestion[currentQuestionIndex]);
};

var showQuestion = function () {
  // hide startDiv
  startDiv.classList.add("hide");

  // post question as innerText
  var postQuestion = document.createElement("div");
  postQuestion.className = "question";
  postQuestion.textContent = questionsArr[currentQuestionIndex].question;
  document.currentQuestionIndex.appendChild(postQuestion);

  // post answers as clickable innertext with border
  var postAnswerList = document.createElement("div");
  postAnswerList.className = "question-list";
  postAnswerList.textContent = questionsArr[currentQuestionIndex].answerList[0];
  currentQuestionIndex.appendChild(postAnswerList);

  //   questionContainer.innerText =
  //     questionsArr[currentQuestionIndex].answerList[0];
  //   questionContainer.innerText =
  //     questionsArr[currentQuestionIndex].answerList[1];
  //   questionContainer.innerText =
  //     questionsArr[currentQuestionIndex].answerList[2];
  //   questionContainer.innerText =
  //     questionsArr[currentQuestionIndex].answerList[3];
};

var gameOver = function () {
  clearInterval(timer);
  // }

  //if timer > 0:
  //     if (timer > 10000) {
  //         // loop through iterations of questions
  //         for(var i = 0; i < 10; i++) {
  //             var choiceEl = document.createElement("li")
  //             choiceEl.textConent = questions[0].answerList[i].correctAnswer;
  //         }
  //     }
  //     // else post game over message
  //     else {
  //         console.log("game over");
  //     }

  // function to post question and save answer (looped in quizStart())
  // var questionsLoop = function(question) {
  // go through each questions object
  // for each question, post question with four clickable containers holding each answer
  // once an answer is clicked store answer in localStorage
  // add 15 seconds to the quiz
};

var createCurrentQuestionIndex = function () {
  // check if we didn't pass all questions yet
  if (currentQuestionIndexIndex < questions.length) {
    console.log(questions[currentQuestion]);

    // create a question element
    // append question element
  }
};

var userName = function () {
  var name = prompt("What are your initials");
  console.log(name);
};

// START
//function() parameter is placeholder for startQuiz() once complete
startButtonEl.addEventListener("click", function () {
  console.log("start button");
  startQuiz();
});

// function() parameter is placeholder for highscore() once complete
highscoreButtonEl.addEventListener("click", function () {
  console.log("highscore");
});
timerEl.addEventListener("click", timeLeft());

// click 'start quiz' button
// run startQuiz()
// on click timer begins with 30 secs (30000 ms)
// questions begin
// if timer > 0 sec:
// questionsLoop() loops through 10 questions
// after each question is answered answer is saved to localStorage
// 15 seconds are added to timer
// if quiz is finished with time left over:
// prompt for initials
// save time remaining to local storage as score
// pull from localStorage and set new one to localStorage
// else:
// game over
// save initials to local storage with score 0
