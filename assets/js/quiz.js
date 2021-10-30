// VARS
var startButtonEl = document.getElementById("startBtn");
console.log.here
var currentQuestionIndex = 0;

// create a list of questions and set as an array with properties: index, question, correct answer
var questions = {
    question1: "A. What does 'DOM' stand for?",
    answerList: ["A. Direct Object Method", "B. Direct Occuring Method", "C. Document Object Model", "D. Document Occuring Measure"],
    correctAnswer: C,
    question2: "How does Control Flow Work?",
    answerList: ["A. Control Flow creates conditional statements to decide how to proceed", "B. Control Flow determins how the browser should interpret the code", "C. Control Flow accepts users input and terminates the program", "D. Control Flow is like a dam slowing down the browser's speed"],
    correctAnswer: A,
    question3: "What operator do you use to set equality?",
    answerList: ["A. ||", "B. ===", "C. &&", "D. =="],
    correctAnswer: BarProp,
    question4: "How does Pseudocode enhance code?",
    answerList: ["A. Put's computer languge into human language", "B. Comments code to make it more readable", "C. Describes steps for an application to follow", "D. All Of The Above"],
    correctAnswer: D,
    question5: "How do parameters effect functions",
    answerList: ["A. They make functions more efficient", "B. When set, parameters confine functions to particular tasks", "C. They are placeholders for arguments that will be passed into the function", "D. Parameters are not related to functions at all"],
    correctAnswer: C,
    question6: "What is scope",
    answerList: ["A. Scope is where functions are accessible from", "B. Scope is something that you look through to see things far away", "C. Scope is a way to determine a variables functionality", "D. Answers A and C"],
    correctAnswer: D,
    question7: "Fill in the blank: ___(var 1 = 0; i < 5; i++)",
    answerList: ["A. for", "B. if", "C. Switch", "D. var"],
    correctAnswer: A,
    question8: "How does 'Math' assist JavaScript Users",
    answerList: ["A. 'Math' acts as a calculator", "B. 'Math' is a number of built in functions which give the user various functionalities", "C. Without 'Math' the user would only be able to use conditional statements", "D. 'Math' lets the user conver numbered strings to integer variables"], 
    correctAnswer: B,
    question9: "How does DOM allow greater functionality",
    answerList: ["A. DOM increases memory allocation allowing the browser render images faster", "B. DOM let's the user iterate through JavaScript functions", "C. DOM is a representation of the html making it manipulatable by JavaScript", "D. DOM condenses code into a file that's easier than HTML to read"],
    correctAnswer: C,
    question10: "How does localStorage differ from sessionStorage",
    answerList: ["A. LocalStorage is held on your computer's hard drive, while sessionStorage is held on the browsers memory", "B. They act the same but localStorage relates to web applications while sessionStorage relates to your computer's applications", "C. They are the same, just different names to reference", "D. LocalStorage can persist after an application is closed, while sessionStorage is deleted when application closes"],
    correctAnswer: D
};
// starts questions at 0
var questionCounter = 0;
// starts timer at 30 seconds
var timer = 30000; 



// FUNCTS
var handleClick = function() {
    console.log("clicked");
}

var quizStart = function() {
    event.preventDefault();

    // loop through iterations of questions
    for(var i = 0; i < 10; i++) {
        document.createElement("")
        // go through each questions object
        // for each question, post question with four clickable containers holding each answer
        // once an answer is clicked store answer in localStorage
        // add 15 seconds to the quiz
    }
}

// function to post question and save answer (looped in quizStart())
var question = function(questionI) {

}

var createcurrentQuestionIndex = function() {

    // check if we didn't pass all questions yet
    if (currentQuestionIndexIndex < questions.length) {
        console.log(questions[currentQuestion])

        // create a question element
        // append question element

    }
}

// timer starts at 30 sec and goes down. each finished round adds 10 seconds
var timeLeft = function() {
    var time = event.target.getAttriubte("timer") 
}


// START


// click

// show first question
// if more questions
    // show question
// else
    // end quiz
    // save score to localStorage

// timer begins
