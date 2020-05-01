
//epilogue constants
const epilogueContainer = document.getElementById("ending");
const epilogueBtn = document.getElementById("epilogue-btn");
const closeEpilogueBtn = document.querySelector(".exit-epilogue");
let scrollBarWidth = window.innerWidth - document.body.offsetWidth;

/*
let userPoints = JSON.parse(localStorage.getItem("totalPoints"));
let totalUserPoints = 0;


//button to access lost city
const accessLostCity = document.getElementById("lost-city-access");

//check how many points the user has accumulated
$(window).on('load', function() {
  for(let key in userPoints) {
    totalUserPoints += userPoints[key]; 
  }
  //check if user has reached 100 points or passed the first quiz
  if(totalUserPoints == 100) {
    alert("access unlocked");
    $(#cf-dark).css("fill","#4C9B57");
    $(#cf-light).css("fill","#62D375");
    accessLostCity.setAttribute("href", "https://www.google.com/");
  }
  else {
    alert("access denied");  // paste here code for the modal not allowing access
  }
  return totalUserPoints;
});
*/

window.addEventListener("scroll", function(e) {
  var swimmingMascot = document.getElementById("mascot-swim");
  var swimRate = 0 - window.pageYOffset / -30;
  swimmingMascot.style.top = swimRate + "px";
}); 

//Click to read the epilogue
epilogueBtn.addEventListener("click", function() {
  epilogueContainer.style.display = "flex";
  let scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  $('body').css({
    marginLeft: -scrollBarWidth,
    overflow: 'hidden'
  });
});

closeEpilogueBtn.addEventListener("click", function() {
  document.getElementById("ending").style.display = "flex";
  let scrollBarWidth = window.innerWidth - document.body.offsetWidth;
  $('body').css({
    marginLeft: scrollBarWidth,
    overflow: 'auto'
  });
  epilogueContainer.style.display = "none";
});