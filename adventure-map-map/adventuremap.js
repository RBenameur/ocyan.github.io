
$(document).ready(function(){
    // On compass image click menu appears
    $("#menu").click(function(){
            $("#admap-menu").toggleClass('admap-menu-open');
            $(".side-menu").animate({
            "width": 'toggle',
            });
            $("body").toggleClass("body-fixed");
            $(".side-menu").css({
                "height":"400vh",
                "overflow":"scroll",
            });
            $("ul").css("height","450vh");
    });
    $("#adventure-map").click(function(){
        $(".advent-li").css("font-size", "1.5vw");
        $(".nav-ul").css("height", "fit-content");
        $("#am-icon").toggleClass("rotate");
            $(".advent-list").css("height","fit-content");
            $(".nav-ul").css("height","550vh");
        $(".advent-list").animate({"height":'toggle'});
    }); 
    $("#marine-ecosystem").click(function(){
        $(".marine-eco-li").css("font-size", "1.5vw");
        $(".nav-ul").css("height", "fit-content");
        $("#me-icon").toggleClass("rotate");
            $(".marine-eco-list").css("height","fit-content");
            $("#marine-ecosystem").css({
                "height":"fit-content",
                "overflow":"hidden",
            });
            $(".nav-ul").css("height","550vh");
        $(".marine-eco-list").animate({"height":'toggle'});
    }); 
    if(screen.orientation.lock){
        screen.orientation.lock("landscape");
    }
    function hasTouch() {
        return 'ontouchstart' in $(document).html
               || navigator.maxTouchPoints > 0
               || navigator.msMaxTouchPoints > 0;
    };
    if(!hasTouch()){
    $("#coralreef").hover(function(){
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/coralreef.jpg)");
            $(".explore-button-title").text("Explore Coral Reefs");
            $(".admap-modal-hover").css({
                "margin-left":"48vw",
                "margin-top":"13vh",
            });
        }, function(){
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#polar").hover(function(){
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/polar.jpg)");
            $(".explore-button-title").text("Explore Polar Seas");
            $(".admap-modal-hover").css({
                "margin-left":"30.5vw",
                "margin-top":"40vh",
            });
        }, function(){
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#kelp").hover(function(){
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/kelp.jpg)");
            $(".explore-button-title").text("Explore Kelp Forests");
            $(".admap-modal-hover").css({
                "margin-left":"13vw",
                "margin-top":"23vh",
            });
        }, function(){
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#sandybeach").hover(function(){
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/sandybeach.jpg)");
            $(".explore-button-title").text("Explore Sandy Beaches");
            $(".admap-modal-hover").css({
                "margin-left":"23vw",
                "margin-top":"18vh",
            });
        }, function(){
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#deepsea").hover(function(){
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/deepsea.jpg)");
            $(".explore-button-title").text("Explore Deep Seas");
            $(".admap-modal-hover").css({
                "margin-left":"10vw",
                "margin-top":"30vh",
            });
        }, function(){
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#hydrothermal").hover(function(){
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/hydrothermalvent.jpg)");
            $(".explore-button-title").text("Explore Hydrothermal Vents");
            $(".admap-modal-hover").css({
                "margin-left":"6vw",
                "margin-top":"30vh",
            });
        }, function(){
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#saltmarsh").hover(function(){
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/saltmarsh.jpg)");
            $(".explore-button-title").text("Explore Saltmarshes");
            $(".admap-modal-hover").css({
                "margin-left":"13vw",
                "margin-top":"20vh",
            });
        }, function(){
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#rockyshore").hover(function(){
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/rockyshore.jpg)");
            $(".explore-button-title").text("Explore Rocky Shores");
            $(".admap-modal-hover").css({
                "margin-left":"35vw",
                "margin-top":"24vh",
            });
        }, function(){
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#mangrove").hover(function(){
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/mangrove.jpg)");
            $(".explore-button-title").text("Explore Mangrove Forests");
            $(".admap-modal-hover").css({
                "margin-left":"38vw",
                "margin-top":"13vh",
            });
        }, function(){
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
    //  $("#lostcity").hover(function(){
    //      $("#admap-modal").toggleClass("admap-modal");
    //      $("#admap-modal").toggleClass("admap-modal-hidden");
    //      $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/coral-map-img.png.jpg)");
        // $(".map-title").text("Rainforest of the sea");
    //      $(".explore-button-title").text("Explore the Lost City");
    //  });
    };

    $("#coralreef").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/coralreef.jpg)");
        $(".explore-button-title").text("Explore Coral Reefs");
        $(".admap-modal").css({
            "margin-left":"48vw",
            "margin-top":"13vh",
        });

    });
    $("#polar").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/polar.jpg)");
        $(".explore-button-title").text("Explore Polar Seas");
        $(".admap-modal").css({
            "margin-left":"30.5vw",
            "margin-top":"40vh",
        });
    });
    $("#kelp").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/kelp.jpg)");
        $(".explore-button-title").text("Explore Kelp Forests");
        $(".admap-modal").css({
            "margin-left":"13vw",
            "margin-top":"23vh",
        });
    });
    $("#sandybeach").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/sandybeach.jpg)");
        $(".explore-button-title").text("Explore Sandy Beaches");
        $(".admap-modal").css({
            "margin-left":"23vw",
            "margin-top":"18vh",
        });
    });
    $("#deepsea").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/deepsea.jpg)");
        $(".explore-button-title").text("Explore Deep Seas");
        $(".admap-modal").css({
            "margin-left":"10vw",
            "margin-top":"30vh",
        });
    });
    $("#hydrothermal").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/hydrothermalvent.jpg)");
        $(".explore-button-title").text("Explore Hydrothermal Vents");
        $(".admap-modal").css({
            "margin-left":"6vw",
            "margin-top":"30vh",
        });
    });
    $("#saltmarsh").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/saltmarsh.jpg)");
        $(".explore-button-title").text("Explore Saltmarshes");
        $(".admap-modal").css({
            "margin-left":"13vw",
            "margin-top":"20vh",
        });
    });
    $("#rockyshore").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/rockyshore.jpg)");
        $(".explore-button-title").text("Explore Rocky Shores");
        $(".admap-modal").css({
            "margin-left":"35vw",
            "margin-top":"24vh",
        });
    });
    $("#mangrove").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/mangrove.jpg)");
        $(".explore-button-title").text("Explore Mangrove Forests");
        $(".admap-modal").css({
            "margin-left":"38vw",
            "margin-top":"13vh",
        });
    });
   /* $("#lostcity").click(function(){
        $("#admap-modal").addClass("admap-modal");
        $("#admap-modal").removeClass("admap-modal-hidden");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/coral-map-img.png.jpg)");
    // $(".map-title").text("Rainforest of the sea");
        $(".explore-button-title").text("Explore the Lost City");
    });*/
   
    // exit buttons on the ecosystem modals
    $("#mapmodal-close").click(function(){
        $("#admap-sf").removeClass("admap-sf");
        $("#admap-sf").addClass("admap-modal-hidden");  
    });

});