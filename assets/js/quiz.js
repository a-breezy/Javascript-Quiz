// VARS
var startButtonEl = document.getElementById("startBtn");
console.log.here
var currentQuestionIndex = 0;

// create a list of questions and set as an array with properties: index, question, correct answer
var questions = [
    question1("A. What does 'DOM' stand for?", ["B. Direct Object Method", "C. Direct Occuring Method", "D. Document Object Model", "Document Occuring Measure"], answer3),
    question2("How does Control Flow Work?", ["A. Control Flow creates conditional statements to decide how to proceed", "B. Control Flow determins how the browser should interpret the code", "C. Control Flow accepts users input and terminates the program", "D. Control Flow is like a dam slowing down the browser's speed"], answer1),
    question3("What operator do you use to set equality?", ["A. ||", "B. ===", "C. &&", "D. =="], answer2),
    question4("How does Pseudocode enhance code?", ["A. Put's computer languge into human language", "B. Comments code to make it more readable", "C. Describes steps for an application to follow", "D. All Of The Above"], answer4),
    question5("How do parameters effect functions", ["A. They make functions more efficient", "B. When set, parameters confine functions to particular tasks", "C. They are placeholders for arguments that will be passed into the function", "D. Parameters are not related to functions at all"], answer3),
    question6("What is scope", ["A. Scope is where functions are accessible from", "B. Scope is something that you look through to see things far away", "C. Scope is a way to determine a variables functionality", "D. Answers A and C"], answer4),
    question7("Fill in the blank: ___(var 1 = 0; i < 5; i++)", ["A. for", "B. if", "C. Switch", "D. var"], answer1),
    question8("How does 'Math' assist JavaScript Users", ["A. 'Math' acts as a calculator", "B. 'Math' is a number of built in functions which give the user various functionalities", "C. Without 'Math' the user would only be able to use conditional statements", "D. 'Math' lets the user conver numbered strings to integer variables"], answer2),
    question9("How does DOM allow greater functionality", ["A. DOM increases memory allocation allowing the browser render images faster", "B. DOM let's the user iterate through JavaScript functions", "C. DOM is a representation of the html making it manipulatable by JavaScript", "D. DOM condenses code into a file that's easier than HTML to read"], answer3),
    question10("How does localStorage differ from sessionStorage", ["A. LocalStorage is held on your computer's hard drive, while sessionStorage is held on the browsers memory", "B. They act the same but localStorage relates to web applications while sessionStorage relates to your computer's applications", "C. They are the same, just different names to reference", "D. LocalStorage can persist after an application is closed, while sessionStorage is deleted when application closes"], answer4)
];
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

    for(var i = 0; i < 10; i++) {
        document.createElement("")
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
