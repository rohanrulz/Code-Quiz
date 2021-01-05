//variables

var indexofcurrentquestion = 0;
var randomtime = codingquestions.length * 15;
var randomtimerId;

var timerelatedEl = document.querySelector("#time-related");
var startic = document.querySelector("#starticon");
var quiztitlescreen = document.querySelector("#quiz-title");
var quizdisplay = document.querySelector("#quiz-questions");
var remarkEl = document.querySelector("#remark");
var optionsEl = document.querySelector("#options");
var userinitialsEl = document.querySelector("#userinitials");
var submitbutton = document.querySelector("#button-submit");




function beginQuiz() {

  quiztitlescreen.setAttribute("class", "hide");

  quizdisplay.setAttribute("class", "show");

  randomtimerId = setInterval(startticking, 1000);

  timerelatedEl.textcontent = randomtime;

  displayQuestion();  
  }

function startticking() {

randomtime--;
timerelatedEl.textContent = randomtime;

    if (randomtime <=0) {
      endquiz();
    }
  }

  function displayQuestion() {
    var presentquestion = codingquestions[indexofcurrentquestion];

    var headingEl = document.getElementById("heading-title");
    headingEl.textContent = presentquestion.title;

    optionsEl.innerHTML = "";

    presentquestion.options.forEach(function(option, i) {

      var optionNode = document.createElement("button");
      optionNode.setAttribute("class", option);
      optionNode.setAttribute("value", option);

      optionNode.textContent = i + 1 + "." + option;

      optionNode.onclick = optionclick;

      optionsEl.appendChild(optionNode);
      });
    }

    function optionclick() {

      if (this.value !== codingquestions[indexofcurrentquestion].answer) {

        randomtime -= 15;

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

      if (indexofcurrentquestion === codingquestions.length) {
          endquiz();
      } else {
        displayQuestion();
      }
    }
      

    function endquiz() {

      clearInterval(randomtimerId);

      var highscoredisplayEl = document.querySelector("#highscore-area");
      highscoredisplayEl.setAttribute("class", "show");

      var finalscoredisplayEl = document.querySelector("#finalscore-display");
      finalscoredisplayEl.textContent = randomtime;

      quizdisplay.setAttribute("class", "hide");
      }

      function highscoresave() {

        var userinitials = userinitialsEl.value.trim();

        if (userinitials !== "") {

            var userhighscores =
            JSON.parse(window.localStorage.getItem("userhighscores")) || [];

            var userscore = {
              quizscore : randomtime,
              userinitials : userinitials
            };

            userhighscores.push(userscore);
            window.localStorage.setItem("userhighscores", JSON.stringify(userhighscores));
        }
      }

      submitbutton.onclick = highscoresave;

      startic.onclick = beginQuiz;



      
      
      


