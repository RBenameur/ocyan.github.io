
//epilogue constants
const epilogueContainer = document.getElementById("ending");
const epilogueBtn = document.getElementById("epilogue-btn");
const closeEpilogueBtn = document.querySelector(".exit-epilogue");
let scrollBar = window.innerWidth - document.body.offsetWidth;
const trash = document.querySelectorAll(".trash");
const userNameInput = localStorage.getItem("username");

//input user's name into the story
$(document).ready(function(){
  $(".changeName").each(function() {
    $(this).text(""+userNameInput+"");
  });
});

//randomly place trash
$(trash).each(function () {
  let floatTop = Math.floor(Math.random() * 420);
  let floatLeft = Math.floor(Math.random() * 250);

  $(this).css({
    "margin-left": floatLeft,
    "margin-top": floatTop
  });
});

//parallax on mascot
window.addEventListener("scroll", function(e) {
  var swimmingMascot = document.getElementById("mascot-swim");
  var swimRate = (0 - window.pageYOffset / -50) + 192;
  swimmingMascot.style.top = swimRate + "px";
}); 

//Click to read the epilogue
epilogueBtn.addEventListener("click", function() {
  epilogueContainer.style.display = "flex";
  let scrollBar = window.innerWidth - document.body.offsetWidth;
  $('body').css({
    marginLeft: -scrollBar,
    overflow: 'hidden'
  });
  document.getElementById("ocyan-logo").style.width = 16 + "%";
  document.getElementById("menu").style.width = 15 + "vw";
  document.getElementById("menu").style.height = 18 + "vh";
});

//close the epilogue
closeEpilogueBtn.addEventListener("click", function() {
  document.getElementById("ending").style.display = "flex";
  let scrollBar = window.innerWidth - document.body.offsetWidth;
  $('body').css({
    marginLeft: scrollBar,
    overflow: 'auto'
  });
  epilogueContainer.style.display = "none";
  document.getElementById("ocyan-logo").style.width = 23 + "vw";
});