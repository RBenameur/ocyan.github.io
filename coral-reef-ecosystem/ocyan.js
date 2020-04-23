
$(document).ready(function(){
    // On #play-button click the iframe container becomes full screen, and hidden whilst exit button becomes visible.
    $("#play-button").click(function(){
        //document.querySelector(".animation-container").requestFullscreen();
        var animation = document.querySelector("#coral-iframe");
        if (animation.requestFullscreen){
            animation.requestFullscreen(); 
        } else if (animation.webkitRequestFullscreen){
            animation.webkitRequestFullscreen(); // chrome, safari and opera
        } else if (animation.mozRequestFullScreen){
            animation.mozRequestFullScreen(); //firefox
        } else if (animation.msRequestFullscreen){
            animation.msRequestFullscreen(); // IE or Edge
        } else {
            alert(" I'm sorry, your browser does not support fullscreen mode! Please try a different browser");
        }
        $("#play-button").css("display","none");
        screen.orientation.lock("landscape") // lock screen to landscape mode on mobile screens
        //on click of the turtle animation
        $(".animal-st").click(function(){$("#turtle-modal").css("display", "block");});
        $("#tclose").click(function(){$("#turtle-modal").css("display", "none");});
        //on click of the shark animation
        $(".animal-rs").click(function(){$("#shark-modal").css("display", "block");});
        $(".sclose").click(function(){$("#shark-modal").css("display", "none"); });
        //on click of the lionfish animation
        $(".animal-lf").click(function(){$("#lionfish-modal").css("display", "block");});
        $(".lclose").click(function(){$("#lionfish-modal").css("display", "none");});
        //on click of the triggerfish animation
        $(".animal-tf").click(function(){$("#triggerfish-modal").css("display", "block");});
        $(".tfclose").click(function(){$("#triggerfish-modal").css("display", "none");});
        //on click of the clownfish animation
        $(".animal-cf").click(function(){$("#clownfish-modal").css("display", "block");});
        $(".cfclose").click(function(){$("#clownfish-modal").css("display", "none");});
        //on click of the crab animation
        $(".animal-c").click(function(){$("#crab-modal").css("display", "block");});
        $(".cclose").click(function(){$("#crab-modal").css("display", "none");});
        });
       // on #exit-button click exit fullscreen, becomes hidden and exit button becomes visible
       $("#exit-button").click(function(){
            document.exitFullscreen();
            $("#play-button").css("display","block");
            $("#exit-button").css("display","none");
            screen.orientation.unlock(); // unlock screen from landscape mode on mobile screens
        });
    // On compass image click menu appears
    $("#menu").click(function(){
            $(".side-menu").animate({
            width: 'toggle'
        });
    });
    // On some menu options click additional options appear and arrow rotates
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

});
