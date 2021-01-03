//variables

var indexofcurrentquestion = 0;
var randomtime = codingquestions.length * 15;
var randomtimerId;

var timerelatedEl = document.querySelector("#time-related");
var startic = document.querySelector("#starticon");
var quiztitlescreen = document.querySelector("quiz-title");
var quizdisplay = document.querySelector("#quiz-questions");
var remarkEl = document.querySelector("remark");
var optionsEl = document.querySelector("options");


function beginQuiz() {

  quiztitlescreen.setAttribute("class", "hide");

  quizdisplay.setAttribute("class", "show");

  randomtimerId = setInterval(startticking, 1000);

  timerelatedEl.textcontent = randomtime;

  displayQuestion();  
  }

function startticking() {

randomtime--;

timerelatedEl.textcontent = randomtime;

if (randomtime <=0) {
      endquiz();
    }
  }

  function displayquestion() {
    var presentquestion = codingquestions[indexofcurrentquestion];

    var headingEl = document.getElementById("heading-title");
    headingEl.textContent = presentquestion.title;

    optionsEl.innerHTML = "";

    presentquestion.options.forEach(function(option, i) {

      var optionnode = document.createElement("button");
      optionnode.setAttribute("class", option);
      optionnode.setAttribute("value", option);

      optionnode.textContent = i + 1 + "." + option;

      optionnode.onclick = optionclick;

      optionsEl.appendChild(optionnode);
      });
    }

    function optionclick() {

      if (this.value !== codingquestions[indexofcurrentquestion].answer) {

        randomtime -=15;

        if (randomtime < 0) {
          randomtime = 0;
        }
      
        timerelatedEl.textContent = randomtime;

        remarkEl.textContent = "Incorrect!";
      } else {

        remarkEl.textContent = "Correct!";
      }

      remarkEl.setAttribute("class", "remark");
      setTimeout(function() {
        remarkEl.setAttribute("class", "remark hide");
      }, 1000);

      indexofcurrentquestion++;

      if (indexofcurrentquestion === codingquestionslength) {
          endquiz();
      } else {
        displayquestion();
      }
    }
      

      
      
      


