$(document).ready(function() {
    $('#compass-img').on({
        'click': function() {
            var src = ($(this).attr('src') === '../navigation-menu-folder/navigation-menu-w.png') ?
                '../navigation-menu-folder/compass-exitpng.png' :
                '../navigation-menu-folder/navigation-menu-w.png';
            $(this).attr('src', src);
        }
    });
    // On compass image click menu appears
    $("#compass-img").click(function() {
        $("#admap-menu").toggleClass("#admap-menu-closed");
        $("#admap-menu").toggleClass('#admap-menu-open');
        $(".side-menu").animate({
            "width": 'toggle',
        });
        $(".side-menu").css({
            "height": "400vh",
            "overflow": "scroll",
        });
        $("ul").css("height", "450vh");
    });
    $("#adventure-map").click(function() {
        $(".advent-li").css("font-size", "2vw");
        $(".nav-ul").css("height", "fit-content");
        $("#am-icon").toggleClass("rotate");
        $(".advent-list").css("height", "fit-content");
        $(".nav-ul").css("height", "550vh");
        $(".advent-list").animate({ "height": 'toggle' });
    });
    $("#marine-ecosystem").click(function() {
        $(".marine-eco-li").css("font-size", "2vw");
        $(".nav-ul").css("height", "fit-content");
        $("#me-icon").toggleClass("rotate");
        $(".marine-eco-list").css("height", "fit-content");
        $("#marine-ecosystem").css({
            "height": "fit-content",
            "overflow": "hidden",
        });
        $(".nav-ul").css("height", "550vh");
        $(".marine-eco-list").animate({ "height": 'toggle' });
    });
    if (screen.orientation.lock) {
        screen.orientation.lock("landscape");
    }

    function hasTouch() {
        return 'ontouchstart' in $(document).html ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0;
    };
    if (!hasTouch()) {
        $("#coralreef").hover(function() {
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/coralreef.jpg)");
            $(".explore-button-title").text("Explore Coral Reefs");
            $(".admap-modal-hover").css("background-color", "rgb(255, 107, 53, 0.8)");
            if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
                $(".admap-modal-hover").css({
                    "left": "48vh",
                    "top": "13vw",
                });
            } else {
                $(".admap-modal-hover").css({
                    "left": "48vw",
                    "top": "13vh",
                });
            };
        }, function() {
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#polar").hover(function() {
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".admap-modal-hover").css("background-color", "rgb(255, 107, 53, 0.8)");
            $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/polar.jpg)");
            $(".explore-button-title").text("Explore Polar Seas");
            if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
                $(".admap-modal-hover").css({
                    "left": "30.5vh",
                    "top": "35vw",
                });
            } else {
                $(".admap-modal-hover").css({
                    "left": "30.5vw",
                    "top": "35vh",
                });
            };
        }, function() {
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#kelp").hover(function() {
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".admap-modal-hover").css("background-color", "rgb(255, 107, 53, 0.8)");
            $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/kelp.jpg)");
            $(".explore-button-title").text("Explore Kelp Forests");
            if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
                $(".admap-modal-hover").css({
                    "left": "13vh",
                    "top": "23vw",
                });
            } else {
                $(".admap-modal-hover").css({
                    "left": "13vw",
                    "top": "23vh",
                });
            };
        }, function() {
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#sandybeach").hover(function() {
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".admap-modal-hover").css("background-color", "rgb(255, 107, 53, 0.8)");
            $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/sandybeach.jpg)");
            $(".explore-button-title").text("Explore Sandy Beaches");
            if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
                $(".admap-modal-hover").css({
                    "left": "23vh",
                    "top": "18vw",
                });
            } else {
                $(".admap-modal-hover").css({
                    "left": "23vw",
                    "top": "18vh",
                });
            };
        }, function() {
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#deepsea").hover(function() {
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/deepsea.jpg)");
            $(".explore-button-title").text("Explore Deep Seas");
            $(".admap-modal-hover").css("background-color", "rgb(255, 107, 53, 0.8)");
            if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
                $(".admap-modal-hover").css({
                    "left": "15vh",
                    "top": "30vw",
                });
            } else {
                $(".admap-modal-hover").css({
                    "left": "15vw",
                    "top": "30vh",
                });
            };
        }, function() {
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#hydrothermal").hover(function() {
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".admap-modal-hover").css("background-color", "rgb(255, 107, 53, 0.8)");
            $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/hydrothermalvent.jpg)");
            $(".explore-button-title").text("Explore Hydrothermal Vents");
            if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
                $(".admap-modal-hover").css({
                    "left": "6vw",
                    "top": "30vh",
                });
            } else {
                $(".admap-modal-hover").css({
                    "left": "6vw",
                    "top": "30vh",
                });
            };
        }, function() {
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#saltmarsh").hover(function() {
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".admap-modal-hover").css("background-color", "rgb(255, 107, 53, 0.8)");
            $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/saltmarsh.jpg)");
            $(".explore-button-title").text("Explore Saltmarshes");
            if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
                $(".admap-modal-hover").css({
                    "left": "13vh",
                    "top": "20vw",
                });
            } else {
                $(".admap-modal-hover").css({
                    "left": "13vw",
                    "top": "20vh",
                });
            };
        }, function() {
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#rockyshore").hover(function() {
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".admap-modal-hover").css("background-color", "rgb(255, 107, 53, 0.8)");
            $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/rockyshore.jpg)");
            $(".explore-button-title").text("Explore Rocky Shores");
            if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
                $(".admap-modal-hover").css({
                    "left": "35vh",
                    "top": "24vw",
                });
            } else {
                $(".admap-modal-hover").css({
                    "left": "35vw",
                    "top": "24vh",
                });
            };
        }, function() {
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
        $("#mangrove").hover(function() {
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".admap-modal-hover").css("background-color", "rgb(255, 107, 53, 0.8)");
            $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/mangrove.jpg)");
            $(".explore-button-title").text("Explore Mangrove Forests");
            if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
                $(".admap-modal-hover").css({
                    "left": "38vh",
                    "top": "13vw",
                });
            } else {
                $(".admap-modal-hover").css({
                    "left": "38vw",
                    "top": "13vh",
                });
            };
        }, function() {
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });

        $("#lostcity").hover(function() {
            $("#admap-hover").removeClass("admap-hover-hidden");
            $("#admap-hover").addClass("admap-modal-hover");
            $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/lost-city.png)");
            $(".explore-button-title").text("Explore Ocyan City");
            $(".admap-modal-hover").css("background-color", "#134074");
            if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
                $(".admap-modal-hover").css({
                    "left": "55vh",
                    "top": "30vw",
                });
            } else {
                $(".admap-modal-hover").css({
                    "left": "55vw",
                    "top": "30vh",
                });
            };
        }, function() {
            $("#admap-hover").removeClass("admap-modal-hover");
            $("#admap-hover").addClass("admap-hover-hidden");
        });
    };
    $("#coralreef").click(function() {
        $("#modal-wrapper").toggleClass("modal-wrapper");
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-modal");
        $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/coralreef.jpg)");
        $(".explore-button-title").text("Explore Coral Reefs");
        if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
            $(".admap-modal").css({
                "left": "48vh",
                "top": "13vw",
            });
        } else {
            $(".admap-modal").css({
                "left": "48vw",
                "top": "13vh",
            });
        };
    });
    $("#polar").click(function() {
        $("#modal-wrapper").toggleClass("modal-wrapper");
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-modal");
        $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/polar.jpg)");
        $(".explore-button-title").text("Explore Polar Seas");
        if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
            $(".admap-modal").css({
                "left": "30.5vh",
                "top": "35vw",
            });
        } else {
            $(".admap-modal").css({
                "left": "30.5vw",
                "top": "35vh",
            });
        };
    });
    $("#kelp").click(function() {
        $("#modal-wrapper").toggleClass("modal-wrapper");
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-modal");
        $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/kelp.jpg)");
        $(".explore-button-title").text("Explore Kelp Forests");
        if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
            $(".admap-modal").css({
                "left": "13vh",
                "top": "23vw",
            });
        } else {
            $(".admap-modal").css({
                "left": "13vw",
                "top": "23vh",
            });
        };
    });
    $("#sandybeach").click(function() {
        $("#modal-wrapper").toggleClass("modal-wrapper");
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-modal");
        $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/sandybeach.jpg)");
        $(".explore-button-title").text("Explore Sandy Beaches");
        if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
            $(".admap-modal").css({
                "left": "23vh",
                "top": "18vw",
            });
        } else {
            $(".admap-modal").css({
                "left": "23vw",
                "top": "18vh",
            });
        };
    });
    $("#deepsea").click(function() {
        $("#modal-wrapper").toggleClass("modal-wrapper");
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-modal");
        $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/deepsea.jpg)");
        $(".explore-button-title").text("Explore Deep Seas");
        if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
            $(".admap-modal").css({
                "left": "15vh",
                "top": "30vw",
            });
        } else {
            $(".admap-modal").css({
                "left": "15vw",
                "top": "30vh",
            });
        };
    });
    $("#hydrothermal").click(function() {
        $("#modal-wrapper").toggleClass("modal-wrapper");
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-modal");
        $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/hydrothermalvent.jpg)");
        $(".explore-button-title").text("Explore Hydrothermal Vents");
        if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
            $(".admap-modal").css({
                "left": "6vh",
                "top": "30vw",
            });
        } else {
            $(".admap-modal").css({
                "left": "6vw",
                "top": "30vh",
            });
        };
    });
    $("#saltmarsh").click(function() {
        $("#modal-wrapper").toggleClass("modal-wrapper");
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-modal");
        $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/saltmarsh.jpg)");
        $(".explore-button-title").text("Explore Saltmarshes");
        if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
            $(".admap-modal").css({
                "left": "13vh",
                "top": "20vw",
            });
        } else {
            $(".admap-modal").css({
                "left": "13vw",
                "top": "20vh",
            });
        };
    });
    $("#rockyshore").click(function() {
        $("#modal-wrapper").toggleClass("modal-wrapper");
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-modal");
        $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/rockyshore.jpg)");
        $(".explore-button-title").text("Explore Rocky Shores");
        if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
            $(".admap-modal").css({
                "left": "35vh",
                "top": "24vw",
            });
        } else {
            $(".admap-modal").css({
                "left": "35vw",
                "top": "24vh",
            });
        };
    });
    $("#mangrove").click(function() {
        $("#modal-wrapper").toggleClass("modal-wrapper");
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-modal");
        $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/mangrove.jpg)");
        $(".explore-button-title").text("Explore Mangrove Forests");
        if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
            $(".admap-modal").css({
                "left": "38vh",
                "top": "13vw",
            });
        } else {
            $(".admap-modal").css({
                "left": "38vw",
                "top": "13vh",
            });
        };
    });
    $("#lostcity").click(function() {
        $("#modal-wrapper").toggleClass("modal-wrapper");
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-modal");
        $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/lost-city.png)");
        $(".explore-button-title").text("Explore Ocyan City");
        $(".admap-modal").css("background-color", "#134074");
        $("a").css({ PointerEvent: "none" });
        if (ScreenOrientation.type === "portrait-primary" || ScreenOrientation.type === "portrait-secondary" || $(window).height() > $(window).width()) {
            $(".admap-modal").css({
                "left": "55vh",
                "top": "30vw",
            });
        } else {
            $(".admap-modal").css({
                "left": "55vw",
                "top": "30vh",
            });
        }
    });
    // exit buttons on the ecosystem modals
    $("#mapmodal-close").click(function() {
        $(".admap-modal").css("background-color", "rgb(255, 107, 53, 0.8)");
        $("#admap-sf").removeClass("admap-modal");
        $("#admap-sf").addClass("admap-modal-hidden");
        $("#modal-wrapper").toggleClass("modal-wrapper");
    });

});