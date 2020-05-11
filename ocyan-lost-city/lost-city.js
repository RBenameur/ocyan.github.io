
//epilogue constants
const epilogueContainer = document.getElementById("ending");
const epilogueBtn = document.getElementById("epilogue-btn");
const topCloseEpilogue = document.querySelector(".exit-epilogue");
const bottomExitEpilogueBtn = document.querySelector(".exit-btn-epilogue");
const trash = document.querySelectorAll(".trash");
const userNameInput = localStorage.getItem("username");
let scrollBar = window.innerWidth - document.body.offsetWidth;

//input user's name into the story
$(document).ready(function(){
  $(".changeName").each(function() {
    $(this).text(""+userNameInput+"");
  });
});

//randomly place trash
$(trash).each(function () {
  let floatTop = Math.floor(Math.random() * 300);
  let floatLeft = Math.floor(Math.random() * 300);

  $(this).css({
    "margin-left": floatLeft,
    "margin-top": floatTop
  });
});

//display on clicking top and bottom close buttons 
function displayClosed() {
  epilogueContainer.style.display = "none";
  document.getElementById("ocyan-logo").style.width = 25 + "vw";
}

/**************Event Listeners*************/
//parallax on mascot
window.addEventListener("scroll", function(e) {
  let swimmingMascot = document.getElementById("mascot-swim");
  let swimRate = (0 - window.pageYOffset / -50) + 192;
  swimmingMascot.style.top = swimRate + "px";
}); 

//Click to read the epilogue
epilogueBtn.addEventListener("click", function() {
  document.getElementById("ending").style.display = "flex";
  epilogueContainer.style.display = "flex";
  let scrollBar = window.innerWidth - document.body.offsetWidth;
  $('body').css({
    marginLeft: -scrollBar,
    overflow: 'hidden'
  });
  document.getElementById("ocyan-logo").style.width = 16 + "%";
});

//close the epilogue using top x
topCloseEpilogue.addEventListener("click", function() {
  let scrollBar = window.innerWidth - document.body.offsetWidth;
  $('body').css({
    marginLeft: scrollBar,
    overflow: 'auto'
  });
  displayClosed();
});

//close the epilogue using bottom button
bottomExitEpilogueBtn.addEventListener("click", function () {
  displayClosed();
});