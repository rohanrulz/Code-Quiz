//variables
var quizdisplay = document.querySelector("#quiz-questions");
var timerelatedEl = document.querySelector("#time-related");
var startic = document.querySelector("#starticon");
var submitbutton = document.querySelector("#button-submit");

var indexofcurrentquestion = 0;
var randomtime = codingquestions.length * 15;
var randomtimerId;


function beginQuiz() {

  var quiztitlescreen = document.querySelector("#quiz-title");

  quiztitlescreen.setAttribute("class", "disappear");

  quizdisplay.setAttribute("class", "appear");

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

    var optionsEl = document.querySelector("#options");

    var presentquestion = codingquestions[indexofcurrentquestion];

    var headingEl = document.getElementById("heading-title");
    headingEl.textContent = presentquestion.title;

    optionsEl.innerHTML = "";

    presentquestion.options.forEach(function(option, i) {

      var optionNode = document.createElement("button");
      optionNode.setAttribute("class", "option");
      optionNode.setAttribute("value", option);

      optionNode.textContent = i + 1 + "." + option;

      optionNode.onclick = optionclick;

      optionsEl.appendChild(optionNode);
      });
    }

    function optionclick() {

      var remarkEl = document.querySelector("#remark");

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
        remarkEl.setAttribute("class", "disappear");
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

      var quizscoredisplayEl = document.querySelector("#quizscorearea");
      quizscoredisplayEl.setAttribute("class", "appear");

      var finalscoredisplayEl = document.querySelector("#finalscore-display");
      finalscoredisplayEl.textContent = randomtime;

      quizdisplay.setAttribute("class", "disappear");
      }

      function quizscoresave() {

        var userinitialsEl = document.querySelector("#userinitials");

        var userinitials = userinitialsEl.value.trim();

        if (userinitials !== "") {

            var userscore =
            JSON.parse(window.localStorage.getItem("userscore")) || [];

            var result = {
              quizscore : randomtime,
              userinitials : userinitials
            };

            userscore.push(result);
            window.localStorage.setItem("userscore", JSON.stringify(userscore));

            window.location.href = "highscoresarea.html";
        }
      }

      submitbutton.onclick = quizscoresave;

      startic.onclick = beginQuiz;



      
      
      


