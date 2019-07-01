// JavaScript Document

// ==== OwlCarousel ====

$(document).ready(function () {
    "use strict";
    $('.owl-investor').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            786: {
                items: 2,
                nav: false,
                loop: false
            }
        }
    });

    $('.owl-business').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            786: {
                items: 2,
                nav: false,
                loop: false
            }
        }
    });
});


// ===== Scroll to Top ==== 
$(window).scroll(function () {
    "use strict";
    if ($(this).scrollTop() >= 500) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {
    "use strict"; // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});


// Show navbar on Scroll top

//  var prevScrollpos = window.pageYOffset;
//window.onscroll = function() {"use strict";
//var currentScrollPos = window.pageYOffset; 
//  if (prevScrollpos > currentScrollPos) {
//    document.getElementById("header").style.top = "0";
//  } else {
//    document.getElementById("header").style.top = "-87px";
//  }
//  prevScrollpos = currentScrollPos;
//};

// Initiate superfish on nav menu
$('.nav-menu').superfish({
    delay: 100,                            // one second delay on mouseout
    animation: { opacity: 'show', height: 'show' },  // fade-in and slide-down animation
    speed: 'fast',                          // faster animation speed
    speedOut: 'fast',                          // faster animation speed
    autoArrows: false                            // disable generation of arrow mark-up
});


// Mobile Navigation
if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
        id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
        'class': '',
        'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<div class="navigation__toggle" id="mobile-nav-toggle"> <span class="navigation__hamburger"></span> <span class="navigation__hamburger"></span> <span class="navigation__hamburger"></span> </div>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-dropdown').addClass('icon-arrow-down');

    $('#mobile-nav').on('click', '.menu-has-dropdown', function (e) {
        "use strict";
        $(this).next().toggleClass('menu-item-active');
        $(this).nextAll('ul').eq(0).slideToggle();
        $(this).toggleClass("icon-arrow-up icon-arrow-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
        "use strict";
        $('body').toggleClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
        $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
        "use strict";
        var container = $("#mobile-nav, #mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                $('#mobile-body-overly').fadeOut();
            }
        }
    });
} else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
}

// Remove Collapse by clicking outside

$(document).click(function (event) {
    if ($(event.target).parents(".search-collapse").length < 1) {
        var clickover = $(event.target);
        var $collapsebar = $(".search-collapse");
        var _opened = $collapsebar.hasClass("show");
        if (_opened === true && !clickover.hasClass("btn-searchlink")) {
            $collapsebar.collapse('hide');
        }
    }
});


// Smooth scroll for the menu and links with .scrollto classes
$('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
            var top_space = 0;

            if ($('#header').length) {
                top_space = $('#header').outerHeight();

                if (!$('#header').hasClass('header-fixed')) {
                    top_space = top_space - 20;
                }
            }

            $('html, body').animate({
                scrollTop: target.offset().top - top_space
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.nav-menu').length) {
                $('.nav-menu .menu-active').removeClass('menu-active');
                $(this).closest('li').addClass('menu-active');
            }

            if ($('body').hasClass('mobile-nav-active')) {
                $('body').removeClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                $('#mobile-body-overly').fadeOut();
            }
            return false;
        }
    }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//Dropdown Select

//$(".dropdown-menu a.dropdown-item").click(function(){
//  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
//  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
//});

// Initiate the wowjs animation library
new WOW().init();

