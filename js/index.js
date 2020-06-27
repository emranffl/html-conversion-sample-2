$(document).ready(function () {
    let height = 0

    if ($(window).width() > 991) {
        height = $(window).height() * 0.6
    } else {
        height = $(window).height() * 0.1
    }

    $(window).scroll(() => { toggleBackground($(window).scrollTop() < height) })
    $('#navbar-toggler').click(() => {
        toggleBackground($('.navbar-container').hasClass('bg-secondary') && $(window).scrollTop() < height)
    })

    $('.navbar-nav>li>a').click(() => {
        $('.navbar-collapse').collapse('hide')
    })

    $('#customModal').modal('show')
})

function toggleBackground(condition) {

    if (condition) {
        $('.navbar-container').removeClass('bg-secondary')
        $('.navbar-container').addClass('bg-transparent')
    } else {
        $('.navbar-container').removeClass('bg-transparent')
        $('.navbar-container').addClass('bg-secondary')
    }

}