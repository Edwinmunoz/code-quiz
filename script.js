// welcome screen w/ start button 
// start button needs an event listener
// there should be a function within the event listener for timer function
// 1.timer starts a countdown (60 secs)
// 2.prompt for a question with answer choices on it for user to select 
// **easiest way to store info would be an array of objects!
// within one object you will have 3 different keys:
// 1. the question
// 2.an array of answer choices
// 3. a string with the correct answer
// **the reason you want to group all of the above into one object is to show it in the screen at the same time
// when you click the answer button it should spark another function: 
// (Need an event listener to do this)
// Function should:
//  a. show the next question in the array of objects 
//  b. show a message (text) saying if the answer is correct or incorrect 
//  c. compare the text on the button to the correct answer choice to see if it is correct 
//  d. if the text is incorrect, then decrement the timer
// Once you are at the end of the questions or the timer is over then the game is over. Use the below to signal game over.
// You will need a conditional statement: 
// IF the timer is zero, THEN stop giving questions 
// You will need your function to somehow be saved as a variable to stop the function. Similar to calling a function, you can stop.
// Another screen should pop up at the end for high scores. 
// 1.You need to have a way to save your initials and the timer score 
// Put the information into local storage in order to save 

var startRow = document.getElementById("start-page");
var startButton = document.getElementById("start-btn");
var questionsArea = document.getElementById("questions-area");
var options = document.getElementById("options");

startButton.addEventListener("click", function () {
    startRow.style.display = "none";
    var optionsToDisplay = stages[currentStage].options;
    renderOptions(optionsToDisplay);
  });

var currentStage = 0;
var stages = [
 
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parentheses"],
  },
  {
    question:
      "A very useful tool for used during development and debugging printing content to the debugger is:",
    options: ["JavaScript", "terminal / bash", "for loops", "console log"],
  },
];

function renderOptions(array) {
    for (var i = 0; i < array.length; i++) {
      questionsArea.HTML = "";
      var button = document.createElement("button");
      //console.log(array);
      button.setAttribute("class", "btn btn-info");
      button.textContent = array[i];
      button.setAttribute("data-value", array[i]);
      var userQuestion = stages[currentStage].question;
      questionsArea.textContent = userQuestion;
      options.append(button);
    }
  }
  
  options.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
      console.log("you clicked the button");
      var selectedChoice = event.target.getAttribute("data-value");
      console.log(selectedChoice);
  
      setTimeout(function () {
        currentStage++;
        var optionsToDisplay = stages[currentStage].options;
        options.textContent = "";
        renderOptions(optionsToDisplay);
      }, 2000);
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
      const timeLeftDisplay = document.querySelector('#time-left')
      const startbtn =document.querySelector('#start-button')
      let timeLeft = 30

      function countdown(){
          setInterval(function(){
              if(timeLeft <= 0 ) {
                  clearInterval(timeLeft = 0)
              }
              timeLeftDisplay.innerHTML = timeLeft
              timeLeft -=1
          }, 1000)
      }

      startbtn.addEventListener("click", countdown)

  })
 