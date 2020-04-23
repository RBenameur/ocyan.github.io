
$(document).ready(function(){
     //on click of the turtle animation
    $(".animal-st").click(function(){$("#turtle-modal").toggle()});
    $("#tclose").click(function(){$("#turtle-modal").toggle()});
    //on click of the shark animation
    $(".animal-rs").click(function(){$("#shark-modal").toggle()});
    $(".sclose").click(function(){$("#shark-modal").toggle()});
    //on click of the lionfish animation
    $(".animal-lf").click(function(){$("#lionfish-modal").toggle()});
    $(".lclose").click(function(){$("#lionfish-modal").toggle()});
    //on click of the triggerfish animation
    $(".animal-tf").click(function(){$("#triggerfish-modal").toggle()});
    $(".tfclose").click(function(){$("#triggerfish-modal").toggle()});
    //on click of the clownfish animation
    $(".animal-cf").click(function(){$("#clownfish-modal").toggle()});
    $(".cfclose").click(function(){$("#clownfish-modal").toggle()});
    //on click of the crab animation
    $(".animal-c").click(function(){$("#crab-modal").toggle()});
    $(".cclose").click(function(){$("#crab-modal").toggle()});
// play button on coral animation click
    $("#play-button").click(function(){
        var animation = document.querySelector("#coral-iframe");
        if (animation.requestFullscreen){
            animation.requestFullscreen();
            screen.orientation.lock("landscape"); // lock screen to landscape mode on mobile screens 
        } else if (animation.webkitRequestFullscreen){
            animation.webkitRequestFullscreen(); // chrome, safari and opera
            screen.orientation.lock("landscape"); // lock screen to landscape mode on mobile screens 
        } else if (animation.mozRequestFullScreen){
            animation.mozRequestFullScreen(); //firefox
            screen.orientation.lock("landscape"); // lock screen to landscape mode on mobile screens 
        } else if (animation.msRequestFullscreen){
            animation.msRequestFullscreen(); // IE or Edge
            screen.orientation.lock("landscape"); // lock screen to landscape mode on mobile screens 
        } else {
            alert(" I'm sorry, your browser does not support fullscreen mode! Please try a different browser");
        };
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
