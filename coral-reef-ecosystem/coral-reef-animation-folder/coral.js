$(document).ready(function(){
console.log('hello World');

//turtle
$(".animal-st").click(function(){
 $("#turtle-modal").css("display", "block");
});
$("#tclose").click(function(){
 $("#turtle-modal").css("display", "none");
});

//shark
$(".animal-rs").click(function(){
    $("#shark-modal").css("display", "block");
   });
   $(".sclose").click(function(){
    $("#shark-modal").css("display", "none");
   });

//lionfish
$(".animal-lf").click(function(){
    $("#lionfish-modal").css("display", "block");
   });
   $(".lclose").click(function(){
    $("#lionfish-modal").css("display", "none");
   });

//triggerfish
$(".animal-tf").click(function(){
    $("#triggerfish-modal").css("display", "block");
   });
   $(".tfclose").click(function(){
    $("#triggerfish-modal").css("display", "none");
   });

//Clownfish
$(".animal-cf").click(function(){
    $("#clownfish-modal").css("display", "block");
   });
   $(".cfclose").click(function(){
    $("#clownfish-modal").css("display", "none");
   });

//Crab
$(".animal-c").click(function(){
    $("#crab-modal").css("display", "block");
   });
   $(".cclose").click(function(){
    $("#crab-modal").css("display", "none");
   });
});
