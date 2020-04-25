
$(document).ready(function(){
     //on click of the turtle graphic
    $(".animal-st").click(function(){
        // modal displays
        $("#turtle-modal").css("display","block");
        // body scrolling is disabled
        $("body").css("overflow", "hidden");
        // text and image container is set to flex
        $("#st-modal-content").addClass("modal-content");
        // modal scrolls to the top
        $("#st-modal-content").animate({ scrollTop: 0 }, "fast");
        // modal closing button styling
        $("#tclose").addClass("modalclose");
        // turtle image takes up 100% of height of flex box
        $("#st-img").addClass("modal-img");
        // animal information flex box container
        $("#stmodal-text-container").addClass("modal-text-container");
        // animal information flex box items (narrower items) 
        $(".modal-text-flex").css({
            "flex":"100%",
            "height":"auto",
        });
         // animal title styling
         $(".modal-title").css({
            "font-size":"4vw",
            "margin":"1.5%",
            "text-align":"center",
        });
        // introduction text 
        $("#t-textintro").addClass("modal-textintro");

        // subheading title styling
        //food subheading
        $("#turtle-food").addClass("modal-text-title");
        $("#tfood-content").css("display","none");
        $("#turtle-food").click(function(){
                $("#tfood-content").toggleClass("modal-text");
                $("#food-arrow").toggleClass("rotate");
                $("#tfood-content").toggle();
        });
        // habitat subheading
        $("#turtle-habitat").addClass("modal-text-title");
        $("#thabitat-content").css("display","none");
        $("#turtle-habitat").click(function(){
                $("#thabitat-content").toggleClass("modal-text");
                $("#habitat-arrow").toggleClass("rotate");
                $("#thabitat-content").toggle();
        });
        // size subheading
        $("#turtle-size").addClass("modal-text-title");
        $("#tsize-content").css("display","none");
        $("#turtle-size").click(function(){
                $("#tsize-content").toggleClass("modal-text");
                $("#size-arrow").toggleClass("rotate");
                $("#tsize-content").toggle();
        });
         // life expectancy subheading
         $("#turtle-life").addClass("modal-text-title");
         $("#tlife-content").css("display","none");
         $("#turtle-life").click(function(){
                 $("#tlife-content").toggleClass("modal-text");
                 $("#tlife-arrow").toggleClass("rotate");
                 $("#tlife-content").toggle();
         });
         // funfact subheading
         $("#turtle-funfact").addClass("modal-text-title");
         $("#tfunfact-content").css("display","none");
         $("#turtle-funfact").click(function(){
                 $("#tfunfact-content").toggleClass("modal-text");
                 $("#tfunfact-arrow").toggleClass("rotate");
                 $("#tfunfact-content").toggle();
         });
         // why are they important to coral reefs subheading
         $("#turtle-important").addClass("modal-text-title");
         $("#timportant-content").css("display","none");
         $("#turtle-important").click(function(){
                 $("#timportant-content").toggleClass("modal-text");
                 $("#timportant-arrow").toggleClass("rotate");
                 $("#timportant-content").toggle();
         });
        $("#tclose").click(function(){
            $("#turtle-modal").css("display","none");
            $("body").css("overflow", "auto");
        });
    });

    //on click of the shark animation
    $(".animal-rs").click(function(){
        // modal displays
        $("#shark-modal").css({"display":"block"});
        // body scrolling is disabled
        $("body").css("overflow", "hidden");
        // text and image container is set to flex
        $("#s-modal-content").addClass("modal-content");
        // modal scrolls to the top
        $("#s-modal-content").animate({ scrollTop: 0 }, "fast");
        // modal closing button styling
        $("#sclose").addClass("modalclose");
        $("#s-img").addClass("modal-img");
        $("#smodal-text-container").addClass("modal-text-container");
        // animal information flex box items  
        $(".modal-text-flex").css({
            "flex":"100%",
            "height":"auto",
            // "min-height":"190px"
        });
         // animal title styling
         $(".modal-title").css({
            "font-size":"4vw",
            "margin":"1.5%",
            "text-align":"center",
        });
        // introduction text 
        $("#s-textintro").addClass("modal-textintro");
    });
    // subheading title styling
        //food subheading
        $("#s-food").addClass("modal-text-title");
        $("#sfood-content").css("display","none");
        $("#s-food").click(function(){
                $("#sfood-content").toggleClass("modal-text");
                $("#sfood-arrow").toggleClass("rotate");
                $("#sfood-content").toggle();
        });
        // habitat subheading
        $("#s-habitat").addClass("modal-text-title");
        $("#shabitat-content").css("display","none");
        $("#s-habitat").click(function(){
                $("#shabitat-content").toggleClass("modal-text");
                $("#shabitat-arrow").toggleClass("rotate");
                $("#shabitat-content").toggle();
        });
        // size subheading
        $("#s-size").addClass("modal-text-title");
        $("#ssize-content").css("display","none");
        $("#s-size").click(function(){
                $("#ssize-content").toggleClass("modal-text");
                $("#ssize-arrow").toggleClass("rotate");
                $("#ssize-content").toggle();
        });
         // life expectancy subheading
         $("#s-life").addClass("modal-text-title");
         $("#slife-content").css("display","none");
         $("#s-life").click(function(){
                 $("#slife-content").toggleClass("modal-text");
                 $("#slife-arrow").toggleClass("rotate");
                 $("#slife-content").toggle();
         });
         // funfact subheading
         $("#s-funfact").addClass("modal-text-title");
         $("#sfunfact-content").css("display","none");
         $("#s-funfact").click(function(){
                 $("#sfunfact-content").toggleClass("modal-text");
                 $("#sfunfact-arrow").toggleClass("rotate");
                 $("#sfunfact-content").toggle();
         });
         // why are they important to coral reefs subheading
         $("#s-important").addClass("modal-text-title");
         $("#simportant-content").css("display","none");
         $("#s-important").click(function(){
                 $("#simportant-content").toggleClass("modal-text");
                 $("#simportant-arrow").toggleClass("rotate");
                 $("#simportant-content").toggle();
         });
    $("#sclose").click(function(){
        $("#shark-modal").toggle();
        $("body").css("overflow", "auto");
    });
    //on click of the lionfish animation
    $(".animal-lf").click(function(){
        // modal displays
        $("#lionfish-modal").css("display","block");
        // body scrolling is disabled
        $("body").css("overflow", "hidden");
         // text and image container is set to flex
        $("#l-modal-content").addClass("modal-content");
        // modal scrolls to the top
        $("#l-modal-content").animate({ scrollTop: 0 }, "fast");
        // modal closing button styling
        $("#lclose").addClass("modalclose");
         // lionfish image takes up 100% of height of flex box
        $("#lf-img").addClass("modal-img");
        $("#lfmodal-text-container").addClass("modal-text-container");
        // animal information flex box items 
        $(".modal-text-flex").css({
            "flex":"100%",
            "height":"auto",
        });
         // animal title styling
         $(".modal-title").css({
            "font-size":"4vw",
            "margin":"1.5%",
            "text-align":"center",
        });
       //intoduction text
        $("#l-textintro").addClass("modal-textintro");

        // subheading title styling
        //food subheading
        $("#l-food").addClass("modal-text-title");
        $("#lfood-content").css("display","none");
        $("#l-food").click(function(){
                $("#lfood-content").toggleClass("modal-text");
                $("#lfood-arrow").toggleClass("rotate");
                $("#lfood-content").toggle();
        });
        // habitat subheading
        $("#l-habitat").addClass("modal-text-title");
        $("#lhabitat-content").css("display","none");
        $("#l-habitat").click(function(){
                $("#lhabitat-content").toggleClass("modal-text");
                $("#lhabitat-arrow").toggleClass("rotate");
                $("#lhabitat-content").toggle();
        });
        // size subheading
        $("#l-size").addClass("modal-text-title");
        $("#lsize-content").css("display","none");
        $("#l-size").click(function(){
                $("#lsize-content").toggleClass("modal-text");
                $("#lsize-arrow").toggleClass("rotate");
                $("#lsize-content").toggle();
        });
         // life expectancy subheading
         $("#l-life").addClass("modal-text-title");
         $("#llife-content").css("display","none");
         $("#l-life").click(function(){
                 $("#llife-content").toggleClass("modal-text");
                 $("#llife-arrow").toggleClass("rotate");
                 $("#llife-content").toggle();
         });
         // funfact subheading
         $("#l-funfact").addClass("modal-text-title");
         $("#lfunfact-content").css("display","none");
         $("#l-funfact").click(function(){
                 $("#lfunfact-content").toggleClass("modal-text");
                 $("#lfunfact-arrow").toggleClass("rotate");
                 $("#lfunfact-content").toggle();
         });
         // why are they important to coral reefs subheading
         $("#l-important").addClass("modal-text-title");
         $("#limportant-content").css("display","none");
         $("#l-important").click(function(){
                 $("#limportant-content").toggleClass("modal-text");
                 $("#limportant-arrow").toggleClass("rotate");
                 $("#limportant-content").toggle();
         });
    });


    $("#lclose").click(function(){
        $("#lionfish-modal").css("display","none");
        $("body").css("overflow", "auto");
    });

    //on click of the triggerfish animation
    $(".animal-tf").click(function(){
        $("#triggerfish-modal").css("display","block");
        $("body").css("overflow", "hidden");
        $("#tf-modal-content").addClass("modal-content");
        $("#tf-modal-content").animate({ scrollTop: 0 }, "fast");
        $("#tfclose").addClass("modalclose");
        $("#tf-img").addClass("modal-img");
        $("#tfmodal-text-container").addClass("modal-text-container");
        // animal information flex box items 
        $(".modal-text-flex").css({
            "flex":"100%",
            "height":"auto",
        });
         // animal title styling
         $(".modal-title").css({
            "font-size":"4vw",
            "margin":"1.5%",
            "text-align":"center",
        });
        //introduction text
        $("#tf-textintro").addClass("modal-textintro");
        // subheading title styling
        //food subheading
        $("#tf-food").addClass("modal-text-title");
        $("#tffood-content").css("display","none");
        $("#tf-food").click(function(){
                $("#tffood-content").toggleClass("modal-text");
                $("#tffood-arrow").toggleClass("rotate");
                $("#tffood-content").toggle();
        });
        // habitat subheading
        $("#tf-habitat").addClass("modal-text-title");
        $("#tfhabitat-content").css("display","none");
        $("#tf-habitat").click(function(){
                $("#tfhabitat-content").toggleClass("modal-text");
                $("#tfhabitat-arrow").toggleClass("rotate");
                $("#tfhabitat-content").toggle();
        });
        // size subheading
        $("#tf-size").addClass("modal-text-title");
        $("#tfsize-content").css("display","none");
        $("#tf-size").click(function(){
                $("#tfsize-content").toggleClass("modal-text");
                $("#tfsize-arrow").toggleClass("rotate");
                $("#tfsize-content").toggle();
        });
         // life expectancy subheading
         $("#tf-life").addClass("modal-text-title");
         $("#tflife-content").css("display","none");
         $("#tf-life").click(function(){
                 $("#tflife-content").toggleClass("modal-text");
                 $("#tflife-arrow").toggleClass("rotate");
                 $("#tflife-content").toggle();
         });
         // funfact subheading
         $("#tf-funfact").addClass("modal-text-title");
         $("#tffunfact-content").css("display","none");
         $("#tf-funfact").click(function(){
                 $("#tffunfact-content").toggleClass("modal-text");
                 $("#tffunfact-arrow").toggleClass("rotate");
                 $("#tffunfact-content").toggle();
         });
         // why are they important to coral reefs subheading
         $("#tf-important").addClass("modal-text-title");
         $("#tfimportant-content").css("display","none");
         $("#tf-important").click(function(){
                 $("#tfimportant-content").toggleClass("modal-text");
                 $("#tfimportant-arrow").toggleClass("rotate");
                 $("#tfimportant-content").toggle();
         });
    });

    $("#tfclose").click(function(){
        $("#triggerfish-modal").css("display","none");
        $("body").css("overflow", "auto");
    });

    //on click of the clownfish animation
    $(".animal-cf").click(function(){
        $("#clownfish-modal").css("display","block");
        $("body").css("overflow", "hidden");
        $("#cf-modal-content").addClass("modal-content");
        $("#cf-modal-content").animate({ scrollTop: 0 }, "fast");
        $("#cfclose").addClass("modalclose");
        $("#cf-img").addClass("modal-img");
        $("#cfmodal-text-container").addClass("modal-text-container");
        // animal information flex box items
        $(".modal-text-flex").css({
            "flex":"100%",
            "height":"auto",
        });
         // animal title styling
         $(".modal-title").css({
            "font-size":"4vw",
            "margin":"1.5%",
            "text-align":"center",
        });
        //introduction text
        $("#cf-textintro").addClass("modal-textintro");

        // subheading title styling
        //food subheading
        $("#cf-food").addClass("modal-text-title");
        $("#cffood-content").css("display","none");
        $("#cf-food").click(function(){
                $("#cffood-content").toggleClass("modal-text");
                $("#cffood-arrow").toggleClass("rotate");
                $("#cffood-content").toggle();
        });
        // habitat subheading
        $("#cf-habitat").addClass("modal-text-title");
        $("#cfhabitat-content").css("display","none");
        $("#cf-habitat").click(function(){
                $("#cfhabitat-content").toggleClass("modal-text");
                $("#cfhabitat-arrow").toggleClass("rotate");
                $("#cfhabitat-content").toggle();
        });
        // size subheading
        $("#cf-size").addClass("modal-text-title");
        $("#cfsize-content").css("display","none");
        $("#cf-size").click(function(){
                $("#cfsize-content").toggleClass("modal-text");
                $("#cfsize-arrow").toggleClass("rotate");
                $("#cfsize-content").toggle();
        });
         // life expectancy subheading
         $("#cf-life").addClass("modal-text-title");
         $("#cflife-content").css("display","none");
         $("#cf-life").click(function(){
                 $("#cflife-content").toggleClass("modal-text");
                 $("#cflife-arrow").toggleClass("rotate");
                 $("#cflife-content").toggle();
         });
         // funfact subheading
         $("#cf-funfact").addClass("modal-text-title");
         $("#cffunfact-content").css("display","none");
         $("#cf-funfact").click(function(){
                 $("#cffunfact-content").toggleClass("modal-text");
                 $("#cffunfact-arrow").toggleClass("rotate");
                 $("#cffunfact-content").toggle();
         });
         // why are they important to coral reefs subheading
         $("#cf-important").addClass("modal-text-title");
         $("#cfimportant-content").css("display","none");
         $("#cf-important").click(function(){
                 $("#cfimportant-content").toggleClass("modal-text");
                 $("#cfimportant-arrow").toggleClass("rotate");
                 $("#cfimportant-content").toggle();
         });
    });

    $("#cfclose").click(function(){
        $("#clownfish-modal").css("display","none");
        $("body").css("overflow", "auto");
    });

    //on click of the crab animation
    $(".animal-c").click(function(){
        $("#crab-modal").css("display","block");
        $("body").css("overflow", "hidden");
        $("#c-modal-content").toggleClass("modal-content");
        $("#c-modal-content").animate({ scrollTop: 0 }, "fast");
        $("#cclose").addClass("modalclose");
        $("#c-img").addClass("modal-img");
        $("#cmodal-text-container").addClass("modal-text-container");
        // animal information flex box items  
        $(".modal-text-flex").css({
            "flex":"100%",
            "height":"auto",
            // "min-height":"190px"
        });
         // animal title styling
         $(".modal-title").css({
            "font-size":"4vw",
            "margin":"1.5%",
            "text-align":"center",
        });
        //introduction text
        $("#c-textintro").addClass("modal-textintro");

        // subheading title styling
        //food subheading
        $("#c-food").addClass("modal-text-title");
        $("#cfood-content").css("display","none");
        $("#c-food").click(function(){
                $("#cfood-content").toggleClass("modal-text");
                $("#cfood-arrow").toggleClass("rotate");
                $("#cfood-content").toggle();
        });
        // habitat subheading
        $("#c-habitat").addClass("modal-text-title");
        $("#chabitat-content").css("display","none");
        $("#c-habitat").click(function(){
                $("#chabitat-content").toggleClass("modal-text");
                $("#chabitat-arrow").toggleClass("rotate");
                $("#chabitat-content").toggle();
        });
        // size subheading
        $("#c-size").addClass("modal-text-title");
        $("#csize-content").css("display","none");
        $("#c-size").click(function(){
                $("#csize-content").toggleClass("modal-text");
                $("#csize-arrow").toggleClass("rotate");
                $("#csize-content").toggle();
        });
         // life expectancy subheading
         $("#c-life").addClass("modal-text-title");
         $("#clife-content").css("display","none");
         $("#c-life").click(function(){
                 $("#clife-content").toggleClass("modal-text");
                 $("#clife-arrow").toggleClass("rotate");
                 $("#clife-content").toggle();
         });
         // funfact subheading
         $("#c-funfact").addClass("modal-text-title");
         $("#cfunfact-content").css("display","none");
         $("#c-funfact").click(function(){
                 $("#cfunfact-content").toggleClass("modal-text");
                 $("#cfunfact-arrow").toggleClass("rotate");
                 $("#cfunfact-content").toggle();
         });
         // why are they important to coral reefs subheading
         $("#c-important").addClass("modal-text-title");
         $("#cimportant-content").css("display","none");
         $("#c-important").click(function(){
                 $("#cimportant-content").toggleClass("modal-text");
                 $("#cimportant-arrow").toggleClass("rotate");
                 $("#cimportant-content").toggle();
         });
});
    $("#cclose").click(function(){
        $("#crab-modal").css("display","none");
        $("body").css("overflow", "auto");
    });

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
            "width": 'toggle'
            });
            $("body").toggleClass("body-fixed");
        if (ScreenOrientation.type === "landscape-primary" || ScreenOrientation.type === "landscape-secondary" || $(window).height() < $(window).width() && $(window).height() < 800){
            $(".side-menu").css("height","400vh");
            $("ul").css("height","400vh");
        } else {
            $(".side-menu").css("height","100vh"); 
            $("ul").css("height","100vh");
        };
    });
    // On some menu options click additional options appear and arrow rotates
    $(".marine-eco-menu").click(function(){
        $(".marine-eco-li").css("font-size", "1.5vw");
        $("ul").css("height", "fit-content");
        $("#me-icon").toggleClass("rotate");
        $(".marine-eco-list").toggle(
            function(){
                $(this).css({
                "height": "auto",
                "overflow-y": "scroll",
                });
            });
        if (ScreenOrientation.type === "landscape-primary" || ScreenOrientation.type === "landscape-secondary" || $(window).height() < $(window).width() && $(window).height() < 800){
            $("ul").css("height","500vh");
        } else{ 
            $("ul").css("height","100vh");
        };
    }); 

});
