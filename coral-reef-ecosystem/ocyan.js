
$(document).ready(function(){
    var height = $(window).height() 
    var width = $(window).width()
   if(width > height){
        console.log("landscape");
        $("#play-button").click(function(){
            document.querySelector(".animation-container").requestFullscreen();
            $("#play-button").css("display","none");
            $("#exit-button").css("display","block");
            screen.orientation.lock("landscape-primary") // lock screen to landscape mode
           });
           $("#exit-button").click(function(){
                document.exitFullscreen();
                $("#play-button").css("display","block");
                $("#exit-button").css("display","none");
                screen.orientation.unlock(); // unlock screen from landscape mode
            }); // bug if user clicks "esc" exit button does not disappear               
    } else if (width < height) {
        $("#play-button").click(function(){
          alert("change orientation pls");
          $("#play-button").css("display","block");
          $("#exit-button").css("display","none");
         });
    }; 
    $(window).resize(function() {
        var height = $(window).height();
        var width = $(window).width();
        if (width > height) {
            console.log("landscape");
            $("#play-button").click(function(){
               document.querySelector(".animation-container").requestFullscreen();
                    $("#play-button").css("display","none");
                    $("#exit-button").css("display","block");
               });
               $("#exit-button").click(function(){
                   document.exitFullscreen();
                    $("#play-button").css("display","block");
                    $("#exit-button").css("display","none");
                }); // bug if user clicks "esc" exit button does not disappear 
        } else {
            $("#play-button").click(function(){
              alert("changed orientation pls");
              $("#play-button").css("display","block");
              $("#exit-button").css("display","none");
          });
       }; 
    });


  /* $("#play-button").click(function(){
    document.querySelector(".animation-container").requestFullscreen();
        $("#play-button").css("display","none");
        $("#exit-button").css("display","block");
   });

   $("#exit-button").click(function(){
        document.exitFullscreen();
        $("#play-button").css("display","block");
        $("#exit-button").css("display","none");
    }); // bug if user clicks "esc" exit button does not disappear
*/


// Animation edit
/*
$("#play-button").click(function(){
    $("#coral-iframe").css({
        "position": "fixed",
        "margin": "5%",
        "width": "90%",
        "height": "80%",
    });
    $(this).css("display", "none");
    $("#exit-button").css("display", "block");
});

$("#exit-button").click(function(){
    $("#coral-iframe").css({
        "position": "relative",
        "margin": "0",
        "width": "100%",
        "height": "100%",
    });
    $(this).css("display", "none");
    $("#play-button").css("display","block");
});
*/

/*
$("#menu").click(function(){
        $(".side-menu").animate({
         width: 'toggle'
     });
});

$(".marine-eco-menu").click(function(){
    $(".marine-eco-li").css("font-size", "0.7em");
    $("ul").css("height", "fit-content");
    $("#me-icon").toggleClass("rotate")
    $(".marine-eco-list").toggle(
        function(){
            $(this).css({
            "height": "auto",
            "overflow-y": "scroll",
        });
    });
    }); 
    */
});
