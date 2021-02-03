$(document).ready(function() {
    // Home footer functionality on click
    // $('#home .nav-item').click(function() {
    //     $('.home-footer').addClass('visible');
    // });


    // Toggle hove navbar on mobile
    if ( $(window).width() < 757 ) {
        $('#home .navbar-toggler').removeClass('collapsed');
        $('#home .navbar-collapse').addClass('show');
    };
});