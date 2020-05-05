const inputUser = document.querySelector("#fname");
let inputUserName = document.querySelector("#fname").value;


//record name in local storage to put in story
document.getElementById("explore").addEventListener("click", function(){
    inputUserName = document.querySelector("#fname").value;

  if (inputUserName.length == 0) {

      localStorage.setItem("username","Explorer");
  }
  else {
      localStorage.setItem("username", inputUserName);
      }

});

//on pressing enter key, user can enter website
inputUser.onkeydown = onEnterClickButton;
function onEnterClickButton(e) {
    inputUserName = document.querySelector("#fname").value;
    const exploreBtn = document.getElementById("explore-link");
    if(e.key == "Enter") { 
        e.preventDefault(); 
    }
    if (inputUserName.length > 0 && (e.key == "Enter")) {
        exploreBtn.click();
    } 
}
