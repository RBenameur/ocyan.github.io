(function() {
//start page or coral reef content page
const startPage = document.querySelector(".start-page");
const startBtn = document.querySelector(".start-quiz");

//Constants for buttons, event listeners and functionality
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const radios = document.querySelectorAll("input[type = radio]")

// Constants for the display or visual
const quizImg = document.querySelector(".coral-img");
const progressBar = document.querySelector(".progress-meter");

// const for containers to switch between
const questionContainer = document.getElementById("question");
const quizContainer = document.getElementById("quiz");
const content = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");

//const to access text answers html
const optionA = document.querySelector("input#option-a").nextSibling;
const optionB = document.querySelector("input#option-b").nextSibling;
const optionC = document.querySelector("input#option-c").nextSibling;
const optionD = document.querySelector("input#option-d").nextSibling;
const questions = [
	{
		question: "Q1. What is a coral reef?",
    img: "https://images.unsplash.com/photo-1533713692156-f70938dc0d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    hint: "-Coral reef introduction",
    a: "Carnivorous plants",
		b: "A colony of tiny organisms ",
    c: "Corals growing together*",
    d: "Colourful fungi",
		correctAnswer: 'c'
	},
	{
    question: "Q2. What do coral polyps eat?",
    img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    hint: "-What do coral or polyps eat",
		a: "Zooxanthellae",
		b: "Only plants",
    c: "They photosynthesise",
    d: "Small plants and animals*",
		correctAnswer: 'd'
  },
  {
    question: "Q3. Where are coral reefs located?",
    img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
    hint: "-Where can you find coral reefs",
		a: "Cold and nutrient rich waters",
		b: "Away from land",
    c: "Tropical areas with clear waters*",
    d: "They’re everywhere",
		correctAnswer: 'c'
  },
  {
    question: "Q4. How many species live in coral reefs?",
    img: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    hint: "-Google the number of species living in coral reefs or watch the video by Freeschool",
		a: "70,000",
		b: "2,000,000*",
    c: "100,000",
    d: "300,000",
		correctAnswer: 'b'
  },
  {
    question: "Q5. Type of reef around a volcanic island?",
    img: "https://images.unsplash.com/photo-1533713692156-f70938dc0d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    hint: "-Types of coral reefs",
		a: "Apron reef",
		b: "Platform reef",
    c: "Barrier reef",
    d: "Atoll reef*",
		correctAnswer: 'd'
  },
  {
    question: "Q6. The most common type of reef?",
    img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    hint: "-Watch the video by Freeschool or play the coral reef game",
		a: "Fringing reef*",
		b: "Barrier reef",
    c: "Atoll reef",
    d: "Platform reef",
		correctAnswer: 'a'
  },
  {
    question: "Q7. What threatens coral reefs?",
    img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
    hint: "-Threats to coral reefs",
		a: "Tourism, humans poking them",
		b: "Wasting water",
    c: "Usage of plastic",
    d: "All*",
		correctAnswer: 'd'
  },
  {
    question: "Q8. Why are coral reefs important?",
    img: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    hint: "-The importance of coral reefs",
		a: "They produce ½ the world’s oxygen",
		b: "They shelter many marine species",
    c: "Are sources of medicine and cures",
    d: "All*",
		correctAnswer: 'd'
  },
  {
    question: "Q9. How many plastic bags are there?",
    img: "https://images.unsplash.com/photo-1533713692156-f70938dc0d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    hint: "-Count and click on the plastic bags on the coral reef page",
		a: "5",
		b: "3*",
    c: "4",
    d: "2",
		correctAnswer: 'b'
  },
  {
    question: "Q10. How many plastic bottles are there?",
    img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    hint: "-Count and click on the bottles on the coral reef page",
		a: "6*",
		b: "5",
    c: "8",
    d: "10",
		correctAnswer: 'a'
  }
  
];
const lastIndexCount = questions.length - 1;

//mutable variables
let indexCount = 0;
let currentQuestionSet = questions[indexCount];
let score = 0;
let wrongListHints = [];
let userAnswerList = [];
let userSelect = document.querySelector('input[type="radio"]:checked');

//start quiz button
function startQuiz() {
  startPage.style.display = "none";
  quizContainer.style.display = "flex"; 
  buildQuiz();
}

//display the questions and answers
function buildQuiz() {
  let currentQuestionSet = questions[indexCount];
  let currentQuestion = currentQuestionSet.question;
  questionContainer.textContent = "" +currentQuestion+"";
  optionA.textContent = "" +currentQuestionSet.a+"";
  optionB.textContent = "" +currentQuestionSet.b+"";
  optionC.textContent = "" +currentQuestionSet.c+"";
  optionD.textContent = "" +currentQuestionSet.d+"";
  quizImg.setAttribute("src", ""+currentQuestionSet.img+"");
  //uncheck radios
  radios.forEach(radio => radio.checked = false);
}

//display next question
function displayNext() {
  if (indexCount < lastIndexCount) {
    indexCount++;
    nextBtn.style.display = "inline-block";
    submitBtn.style.display = "none";
  }
  buildQuiz();
  return indexCount;
}

//display previous question
function displayPrev() {
  if (indexCount > 0 ) {
    indexCount--;
  }
  if (indexCount < lastIndexCount) {
    submitBtn.style.display = "none";
    nextBtn.style.display ="inline-block";
  }
  buildQuiz()
  return indexCount;
}

//check answer and increment score or record wrong answer
function checkAnswer(correctAnswer) {
  //grab current user answer, compare with correct answer
  let userSelect = document.querySelector('input[type="radio"]:checked');
  let userAnswer = userSelect.value;
  if (userAnswer == correctAnswer) {
    score++;
  }
  else {
    wrongListHints.push(""+questions[indexCount].hint+"");
  }
  //add answer to userAnswer list
  userAnswerList.push(userSelect.value);
}

//decrease score if prev answer was correct
function checkPrevAnswer(correctAnswer) {
  //grab userAnswer from previous question after clicking button previous
  let userPrevAnswer = userAnswerList[userAnswerList.length - 1];
  if (userPrevAnswer == correctAnswer) {
    score--;
  }
  //remove hint from hints list if prev user answer was wrong
  else {
    wrongListHints.splice(-1, 1);
  }
}

//display score
function displayResults() {
  let percentage = (score * 100) / questions.length;
  let resultTxt = document.querySelector(".result-text").textContent = "You got " +percentage+ "% or "+score+" out of "+questions.length+" questions correct.";
  const hints = document.querySelector(".hint-container");
  //hint which areas the users need to work on
  let hintContainer = document.querySelector(".hint-container");
  if (score == 10) {
    hintContainer.textContent = "Fantastic job! You've placed a flag/green marker on this ecoystem in the map";
  }
  else {
    hintContainer.textContent = "Hint: try revisiting the following...";
  }
  let hintList = document.createElement("p");
  //innerHTML so <br> is rendered
  hintList.innerHTML = `<br><p class="nonbold fade-in">`+wrongListHints.join("<br>")+`</p>`;
  hintContainer.appendChild(hintList);
}

//update progress bar and question status
function updateProgress() {
  const questionStatus = document.querySelector(".question-num");
  let qNum = indexCount + 1;
  let progressPercentage = (indexCount ) * 111 / questions.length;
  progressBar.style.width = ""+progressPercentage+"%";
  questionStatus.textContent = "You're on Q"+qNum+"/"+questions.length+"";
}



/*************************************
          Eventlisters
 ***********************************/

 //To add to button on coral reef page
 startBtn.addEventListener("click", function() {
  updateProgress();
  startQuiz();
 });

//clicking button next
nextBtn.addEventListener("click", function () {
  //get current question object
  let currentCorrectAnswer = questions[indexCount];
  checkAnswer(currentCorrectAnswer.correctAnswer);
  displayNext();
  updateProgress();
  //display button previous
  prevBtn.style.display = "inline-block"; 
  if (indexCount >= lastIndexCount) {
    submitBtn.style.display = "block";
    nextBtn.style.display ="none";
 }
  //console tests:
  console.log("nextcorrectanswer:"+currentCorrectAnswer.correctAnswer+"");
  console.log("nextindex:"+indexCount+"");
  console.log("checkNextHint: "+wrongListHints[wrongListHints.length - 1]+"");
});

//clicking button previous
prevBtn.addEventListener("click", function () {
  //user cannot go back more than 1 question
  prevBtn.style.display = "none";
  displayPrev();
  //grab previous question object & answer, and check prev answer
  let prevIndexCount = indexCount;
  if (indexCount> 0) {
    let prevIndexCount = indexCount - 1;
  }
  let prevQuestionSet = questions[prevIndexCount];
  checkPrevAnswer(prevQuestionSet.correctAnswer); 
  updateProgress();
  //console test
  console.log("prev:"+score+"");
  console.log("prev:"+prevIndexCount+"");
});

//clicking button submit will show results
submitBtn.addEventListener("click", function() {
  //grab current question object
  let currentCorrectAnswer = questions[indexCount];
  checkAnswer(currentCorrectAnswer.correctAnswer);
  //hide quiz 
  content.style.display = "none";
  displayResults();
  //bring up results
  resultContainer.style.display = "flex";
});

//clicking button reset will reset quiz
resetBtn.addEventListener("click", function() {
  wrongListHints.length = 0;
  progressPercentage = 0;
  score = 0;
  indexCount = 0;
  resultContainer.style.display = "none";
  content.style.display = "flex";
  nextBtn.style.display = "inline-block";
  submitBtn.style.display = "none";
  buildQuiz();
  updateProgress();
});
})();