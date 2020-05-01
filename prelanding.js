document.getElementById("explore").addEventListener("click", function(){
  var inputtx = document.querySelector("#fname").value;

  if (inputtx.length == 0) {

      localStorage.setItem("username","Explorer");
  }
  else {
      localStorage.setItem("username", inputtx);
      }
});