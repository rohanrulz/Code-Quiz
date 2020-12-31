//variables

var indexofcurrentquestion = 0;
var randomtime = codingquestions.length * 15;
var randomtimerId;

var timerelatedEl = document.querySelector("#time-related");
var startic = document.querySelector("#starticon");
var quiztitlescreen = document.querySelector("quiz-title");
var quizdisplay = document.querySelector("#quiz-questions");
var random2El = document.querySelector("random-2");
var optionsEl = document.querySelector("options");


function beginQuiz() {

  quiztitlescreen.setAttribute("class", "hide");

  quizdisplay.setAttribute("class", "show");

  randomtimerId = setInterval(startticking, 1000);

  timerelatedEl.textcontent = randomtime;

  displayQuestion(); 
  
}


