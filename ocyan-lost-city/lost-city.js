
//epilogue constants
const epilogueContainer = document.getElementById("ending");
const epilogueBtn = document.getElementById("epilogue-btn");
const closeEpilogueBtn = document.querySelector(".exit-epilogue");
let scrollBar = window.innerWidth - document.body.offsetWidth;
const trash = document.querySelectorAll(".trash");


//randomly place trash
$(trash).each(function () {
  let floatTop = Math.floor(Math.random() * 300);
  let floatLeft = Math.floor(Math.random() * 300);

  $(this).css({
    "margin-left": floatLeft,
    "margin-top": floatTop
  });
});

//parallax on mascot
window.addEventListener("scroll", function(e) {
  var swimmingMascot = document.getElementById("mascot-swim");
  var swimRate = 0 - window.pageYOffset / -30;
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