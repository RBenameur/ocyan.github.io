$(document).ready(function() {

    const userNameInput = localStorage.getItem("username");

    //input user's name into instructions
    $(".changeName").text("" + userNameInput + ",");

    // instructions pop up
    $("#map-instructions-close").click(function() {
        $("#instructions-div").removeClass("instructions-open");
        $("#instructions-div").addClass("instructions-closed");
        $("#instructions-button").removeClass("instructions-button-closed");
        $("#instructions-button").addClass("instructions-button-open");
    });
    // instructions button
    $("#instructions-button").click(function() {
        $("#instructions-div").removeClass("instructions-closed");
        $("#instructions-div").addClass("instructions-open");
        $("#instructions-button").removeClass("instructions-button-open");
        $("#instructions-button").addClass("instructions-button-closed");
    });
    //button to access lost city
    let userPoints = JSON.parse(localStorage.getItem("totalPoints"));
    let totalUserPoints = 0;

    function checkPoints() {
        for (let key in userPoints) {
            totalUserPoints += userPoints[key];
        }
        //check if user has reached 100 points or passed the first quiz
        if (totalUserPoints == 100) {
            $("#cf-dark").css("fill", "#4C9B57");
            $("#cf-dark2").css("fill", "#4C9B57");
            $("#cf-dark3").css("fill", "#4C9B57");
            $("#cf-light").css("fill", "#62D375");
            $("#l-dark1").css("fill", "#4C9B57");
            $("#l-dark2").css("fill", "#4C9B57");
            $("#l-dark3").css("fill", "#4C9B57");
            $("#l-light").css("fill", "#62D375");
        }
    }

    $("#explore-anchor").removeAttr("href");
    checkPoints();

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
        $("#admap-menu").toggleClass("admap-menu-closed");
        $("#admap-menu").toggleClass('admap-menu-open');
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
            $(".marker-flexitem-img").css({
                "background-image": "url(../adventure-map-map/map-images/coralreef.jpg)",
                "background-position": "bottom",
            });
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
            $(".marker-flexitem-img").css({
                "background-image": "url(../adventure-map-map/map-images/polar.jpg)",
                "background-position": "bottom",
            });
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
            $(".marker-flexitem-img").css({
                "background-image": "url(../adventure-map-map/map-images/kelp.jpg)",
                "background-position": "bottom",
            });
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
            $(".marker-flexitem-img").css({
                "background-image": "url(../adventure-map-map/map-images/sandybeach.jpg)",
                "background-position": "bottom",
            });
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
            $(".marker-flexitem-img").css({
                "background-image": "url(../adventure-map-map/map-images/deepsea.jpg)",
                "background-position": "bottom",
            });
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
            $(".marker-flexitem-img").css({
                "background-image": "url(../adventure-map-map/map-images/hydrothermalvent.jpg)",
                "background-position": "bottom",
            });
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
            $(".marker-flexitem-img").css({
                "background-image": "url(../adventure-map-map/map-images/saltmarsh.jpg)",
                "background-position": "bottom",
            });
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
            $(".marker-flexitem-img").css({
                "background-image": "url(../adventure-map-map/map-images/rockyshore.jpg)",
                "background-position": "bottom",
            });
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
            $(".marker-flexitem-img").css({
                "background-image": "url(../adventure-map-map/map-images/mangrove.jpg)",
                "background-position": "bottom",
            });
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
        $(".marker-flexitem-img").css({
            "background-image": "url(../adventure-map-map/map-images/coralreef.jpg)",
            "background-position": "bottom",
        });
        $(".explore-button-title").text("Explore Coral Reefs");
        $("#explore-anchor").attr("href", "../coral-reef-ecosystem/coral-reef-ecosystem.html");
        $("#explore-anchor").click(function() {
            $(".explore-button-title").text("Explore Coral Reefs");
        });
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
        $(".marker-flexitem-img").css({
            "background-image": "url(../adventure-map-map/map-images/polar.jpg)",
            "background-position": "bottom",
        });
        $(".explore-button-title").text("Explore Polar Seas");
        $("#explore-anchor").click(function() {
            $(".explore-button-title").text("Under Development ");
        });

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
        $(".marker-flexitem-img").css({
            "background-image": "url(../adventure-map-map/map-images/kelp.jpg)",
            "background-position": "bottom",
        });
        $(".explore-button-title").text("Explore Kelp Forests");
        $("#explore-anchor").click(function() {
            $(".explore-button-title").text("Under Development ");
        });
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
        $(".marker-flexitem-img").css({
            "background-image": "url(../adventure-map-map/map-images/sandybeach.jpg)",
            "background-position": "bottom",
        });
        $(".explore-button-title").text("Explore Sandy Beaches");
        $("#explore-anchor").click(function() {
            $(".explore-button-title").text("Under Development ");
        });
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
        $(".marker-flexitem-img").css({
            "background-image": "url(../adventure-map-map/map-images/deepsea.jpg)",
            "background-position": "bottom",
        });
        $(".explore-button-title").text("Explore Deep Seas");
        $("#explore-anchor").click(function() {
            $(".explore-button-title").text("Under Development ");
        });
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
        $(".marker-flexitem-img").css({
            "background-image": "url(../adventure-map-map/map-images/hydrothermalvent.jpg)",
            "background-position": "bottom",
        });
        $(".explore-button-title").text("Explore Hydrothermal Vents");
        $("#explore-anchor").click(function() {
            $(".explore-button-title").text("Under Development ");
        });
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
        $(".marker-flexitem-img").css({
            "background-image": "url(../adventure-map-map/map-images/saltmarsh.jpg)",
            "background-position": "bottom",
        });
        $(".explore-button-title").text("Explore Saltmarshes");
        $("#explore-anchor").click(function() {
            $(".explore-button-title").text("Under Development ");
        });
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
        $(".marker-flexitem-img").css({
            "background-image": "url(../adventure-map-map/map-images/rockyshore.jpg)",
            "background-position": "bottom",
        });
        $(".explore-button-title").text("Explore Rocky Shores");
        $("#explore-anchor").click(function() {
            $(".explore-button-title").text("Under Development ");
        });
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
        $(".marker-flexitem-img").css({
            "background-image": "url(../adventure-map-map/map-images/mangrove.jpg)",
            "background-position": "bottom",
        });
        $(".explore-button-title").text("Explore Mangrove Forests");
        $("#explore-anchor").click(function() {
            $(".explore-button-title").text("Under Development ");
        });
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
        if (totalUserPoints == 100) {
            $("#explore-anchor").attr("href", "../ocyan-lost-city/lost-city.html");
            $(".explore-button-title").text("Explore Ocyan City");
        } else {
            $(".explore-button-title").text("Complete 1 quiz to unlock");
        };
        $("#modal-wrapper").toggleClass("modal-wrapper");
        $("#admap-sf").removeClass("admap-modal-hidden");
        $("#admap-sf").addClass("admap-modal");
        $(".marker-flexitem-img").css("background-image", "url(../adventure-map-map/map-images/lost-city.png)");
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
        $("#explore-anchor").removeAttr("href");
        $(".admap-modal").css("background-color", "rgb(255, 107, 53, 0.8)");
        $("#admap-sf").removeClass("admap-modal");
        $("#admap-sf").addClass("admap-modal-hidden");
        $("#modal-wrapper").toggleClass("modal-wrapper");
    });

});