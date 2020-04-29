
$(document).ready(function(){
     screen.orientation.lock("landscape");
   $("#coralreef").hover(function(){
        $("#admap-hover").removeClass("admap-hover-hidden");
        $("#admap-hover").addClass("admap-modal-hover");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/coralreef.jpg)");
        $(".explore-button-title").text("Explore Coral Reefs");
    }, function(){
        $("#admap-hover").removeClass("admap-modal-hover");
        $("#admap-hover").addClass("admap-hover-hidden");
    });
    $("#polar").hover(function(){
        $("#admap-hover").removeClass("admap-hover-hidden");
        $("#admap-hover").addClass("admap-modal-hover");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/polar.jpg)");
        $(".explore-button-title").text("Explore Polar Seas");
    }, function(){
        $("#admap-hover").removeClass("admap-modal-hover");
        $("#admap-hover").addClass("admap-hover-hidden");
    });
    $("#kelp").hover(function(){
        $("#admap-hover").removeClass("admap-hover-hidden");
        $("#admap-hover").addClass("admap-modal-hover");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/kelp.jpg)");
        $(".explore-button-title").text("Explore Kelp Forests");
    }, function(){
        $("#admap-hover").removeClass("admap-modal-hover");
        $("#admap-hover").addClass("admap-hover-hidden");
    });
    $("#sandybeach").hover(function(){
        $("#admap-hover").removeClass("admap-hover-hidden");
        $("#admap-hover").addClass("admap-modal-hover");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/sandybeach.jpg)");
        $(".explore-button-title").text("Explore Sandy Beaches");
    }, function(){
        $("#admap-hover").removeClass("admap-modal-hover");
        $("#admap-hover").addClass("admap-hover-hidden");
    });
    $("#deepsea").hover(function(){
        $("#admap-hover").removeClass("admap-hover-hidden");
        $("#admap-hover").addClass("admap-modal-hover");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/deepsea.jpg)");
        $(".explore-button-title").text("Explore Deep Seas");
    }, function(){
        $("#admap-hover").removeClass("admap-modal-hover");
        $("#admap-hover").addClass("admap-hover-hidden");
    });
    $("#hydrothermal").hover(function(){
        $("#admap-hover").removeClass("admap-hover-hidden");
        $("#admap-hover").addClass("admap-modal-hover");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/hydrothermalvent.jpg)");
        $(".explore-button-title").text("Explore Hydrothermal Vents");
    }, function(){
        $("#admap-hover").removeClass("admap-modal-hover");
        $("#admap-hover").addClass("admap-hover-hidden");
    });
    $("#saltmarsh").hover(function(){
        $("#admap-hover").removeClass("admap-hover-hidden");
        $("#admap-hover").addClass("admap-modal-hover");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/saltmarsh.jpg)");
        $(".explore-button-title").text("Explore Saltmarshes");
    }, function(){
        $("#admap-hover").removeClass("admap-modal-hover");
        $("#admap-hover").addClass("admap-hover-hidden");
    });
    $("#rockyshore").hover(function(){
        $("#admap-hover").removeClass("admap-hover-hidden");
        $("#admap-hover").addClass("admap-modal-hover");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/rockyshore.jpg)");
        $(".explore-button-title").text("Explore Rocky Shores");
    }, function(){
        $("#admap-hover").removeClass("admap-modal-hover");
        $("#admap-hover").addClass("admap-hover-hidden");
    });
    $("#mangrove").hover(function(){
        $("#admap-hover").removeClass("admap-hover-hidden");
        $("#admap-hover").addClass("admap-modal-hover");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/mangrove.jpg)");
        $(".explore-button-title").text("Explore Mangrove Forests");
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
    $("#coralreef").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/coralreef.jpg)");
        $(".explore-button-title").text("Explore Coral Reefs");
        $(this).data('clicked',true);
    });
    $("#polar").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/polar.jpg)");
        $(".explore-button-title").text("Explore Polar Seas");
    });
    $("#kelp").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/kelp.jpg)");
        $(".explore-button-title").text("Explore Kelp Forests");
    });
    $("#sandybeach").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/sandybeach.jpg)");
        $(".explore-button-title").text("Explore Sandy Beaches");
    });
    $("#deepsea").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/deepsea.jpg)");
        $(".explore-button-title").text("Explore Deep Seas");
    });
    $("#hydrothermal").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/hydrothermalvent.jpg)");
        $(".explore-button-title").text("Explore Hydrothermal Vents");
    });
    $("#saltmarsh").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/saltmarsh.jpg)");
        $(".explore-button-title").text("Explore Saltmarshes");
    });
    $("#rockyshore").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/rockyshore.jpg)");
        $(".explore-button-title").text("Explore Rocky Shores");
    });
    $("#mangrove").click(function(){
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-sf");
        $(".marker-flexitem-img").css("background-image","url(../adventure-map-map/map-images/mangrove.jpg)");
        $(".explore-button-title").text("Explore Mangrove Forests");
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