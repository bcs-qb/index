
//Course Details Video
$('.course-iframe-video .course-play-button').on('click', function (ev) {
    $(".course-iframe-video iframe")[0].src += "&autoplay=1";
    ev.preventDefault();
    $(".course-iframe-video .video-iframe").css('display', 'block');
    $(".course-iframe-video .course-play-button").css('display', 'none');
    $(".course-iframe-video img").css('display', 'none');
});

//hero slider responsive script
if (window.matchMedia('(max-width: 1140px)').matches) {
    $(".hero-fluid").removeClass("container-fluid").addClass("container");
}
//Menu Temp Solution
$('.ncc-main-menu .navbar-nav > li').each(function () {
    if ($(this).find('.dropdown-menu').hasClass('multi-level')) {
        $(this).addClass('dropdown');
    }
});
$('.ncc-main-menu .navbar-nav .dropdown').click(function () {
    $(this).find('.dropdown-menu').toggleClass('d-block');
});

