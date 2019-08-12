$(window).ready(function () {
    $('.nav-button').on('click', function (event) {
        changePage.call(this, $(this).attr('data-page'));
    });
});

const pageTable = {
    about: drawAbout
}
function changePage(newPage) {
    $('.nav-button').removeClass('current-page');
    $(this).addClass('current-page');
    $('.content-box').animate({ left: '-100%', opacity: 0 }, 500).promise()
        .then(
            function () {
                $(this).remove();
            }
        );
    $('<div>')
        .addClass('content-box start-transparent start-right')
        .appendTo('.content')
        .append(...pageTable[newPage]())
        .animate({ opacity: 1, left: 0 }, 500).promise()
        .then(
            $(this).removeClass('start-right start-transparent')
        );
}

function drawAbout() {
    return [$('<h2 class="page-title">About Me</h2>'),
    $(`<article>
                <img src="assets/images/picture.png" alt="" class="portrait">
                <p>I'm a classically trained saxophonist and composer. I studied at Georgia State University under Dr.
                    Jan Baker. I play all kinds of music, from baroque music such as Bach's Cello Suites, to 21st
                    century avant garde works, and everything in between. My compositional style is very modern, yet
                    accessible.</p>

                <p>In my free time, I like to cook and work on personal software projects. Some fun things I've made
                    are: a program that sets your desktop background to a space-themed wallpaper that color-matches the
                    currently focused window, a program to generate functional chord progressions, and a set of addons
                    for Final Fantasy 11.</p>
            </article>`)]
}