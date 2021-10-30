// VARS
var highscoreButtonEl = document.querySelector("#highscoreBtn");
var timerEl = document.querySelector("#countdownTimer");
var startButtonEl = document.querySelector("#startBtn");
// starts timer at 30 seconds
var startTime = 30000; 

// create a list of questions and set as an array with properties: index, question, correct answer
var questions = [{
    question: "A. What does 'DOM' stand for?",
    answerList: ["A. Direct Object Method", "B. Direct Occuring Method", "C. Document Object Model", "D. Document Occuring Measure"],
    correctAnswer: answerList[2]},
    {question: "How does Control Flow Work?",
    answerList: ["A. Control Flow creates conditional statements to decide how to proceed", "B. Control Flow determins how the browser should interpret the code", "C. Control Flow accepts users input and terminates the program", "D. Control Flow is like a dam slowing down the browser's speed"],
    correctAnswer: answerList[0]},
    {question: "What operator do you use to set equality?",
    answerList: ["A. ||", "B. ===", "C. &&", "D. =="],
    correctAnswer: answerList[1]},
    {question: "How does Pseudocode enhance code?",
    answerList: ["A. Put's computer languge into human language", "B. Comments code to make it more readable", "C. Describes steps for an application to follow", "D. All Of The Above"],
    correctAnswer: answerList[3]},
    {question: "How do parameters effect functions",
    answerList: ["A. They make functions more efficient", "B. When set, parameters confine functions to particular tasks", "C. They are placeholders for arguments that will be passed into the function", "D. Parameters are not related to functions at all"],
    correctAnswer: answerList[2]},
    {question: "What is scope",
    answerList: ["A. Scope is where functions are accessible from", "B. Scope is something that you look through to see things far away", "C. Scope is a way to determine a variables functionality", "D. Answers A and C"],
    correctAnswer: answerList[3]},
    {question: "Fill in the blank: ___(var 1 = 0; i < 5; i++)",
    answerList: ["A. for", "B. if", "C. Switch", "D. var"],
    correctAnswer: answerList[0]},
    {question: "How does 'Math' assist JavaScript Users",
    answerList: ["A. 'Math' acts as a calculator", "B. 'Math' is a number of built in functions which give the user various functionalities", "C. Without 'Math' the user would only be able to use conditional statements", "D. 'Math' lets the user conver numbered strings to integer variables"], 
    correctAnswer: answerList[1]},
    {question: "How does DOM allow greater functionality",
    answerList: ["A. DOM increases memory allocation allowing the browser render images faster", "B. DOM let's the user iterate through JavaScript functions", "C. DOM is a representation of the html making it manipulatable by JavaScript", "D. DOM condenses code into a file that's easier than HTML to read"],
    correctAnswer: answerList[2]},
    {question: "How does localStorage differ from sessionStorage",
    answerList: ["A. LocalStorage is held on your computer's hard drive, while sessionStorage is held on the browsers memory", "B. They act the same but localStorage relates to web applications while sessionStorage relates to your computer's applications", "C. They are the same, just different names to reference", "D. LocalStorage can persist after an application is closed, while sessionStorage is deleted when application closes"],
    correctAnswer: answerList[3]
}];


// FUNCTS
var startQuiz = function() {
    event.preventDefault();

    //if timer > 0:
    if (timer > 10000) {
        // loop through iterations of questions
        for(var i = 0; i < 10; i++) {
            var choiceEl = document.createElement("li")
            choiceEl.textConent = questions[0].answerList[i].correctAnswer;
        }
    }
    // else post game over message
    else {
        console.log("game over");
    }
}

// function to post question and save answer (looped in quizStart())
var questionsLoop = function(question) {
    // go through each questions object
    // for each question, post question with four clickable containers holding each answer
    // once an answer is clicked store answer in localStorage
    // add 15 seconds to the quiz

};

var createCurrentQuestionIndex = function() {

    // check if we didn't pass all questions yet
    if (currentQuestionIndexIndex < questions.length) {
        console.log(questions[currentQuestion])

        // create a question element
        // append question element

    }
}

// timer starts at 30 sec and goes down. each finished round adds 10 seconds
var timeLeft = function() {
    document.getElementById("#countdownTimer").value = c;
    t = setTimeout(startQuiz(), startTime)
}

var userName = function() {
    var name = prompt("What are your initials");
    console.log(name);
}


// START
//function() parameter is placeholder for startQuiz() once complete
startButtonEl.addEventListener("click", function(){
    console.log("start button");
    // startQuiz();
});

// function() parameter is placeholder for highscore() once complete
highscoreButtonEl.addEventListener("click", function() {
    console.log("highscore");

});



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
        // else:
            // game over
            // save initials to local storage with score 0