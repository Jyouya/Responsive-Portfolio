$(window).ready(function () {
    $('.nav-button').on('click', function (event) {
        changePage.call(this, $(this).attr('data-page'));
    });
});

const pageTable = {
    about: drawAbout,
    profile: drawProfile,
}
function changePage(newPage) {
    $('.nav-button').removeClass('current-page');
    $(this).addClass('current-page');
    $('.content-box').animate({ opacity: 0, right: '110%' }, 500).promise()
        .then(
            function () {
                $(this).remove();
            }
        );
    $('<div>')
        .addClass('content-box start-transparent start-right')
        .appendTo('.content')
        .append(...pageTable[newPage]())
        .animate({ opacity: 1, right: 0 }, 500).promise()
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


const portfolio = [
    {
        title: 'Animingle',
        img: './assets/images/animingle.png',
        link: 'https://zscott92.github.io/Animingle/',
        source: 'https://github.com/zscott92/Animingle'
    }
]
function drawProfile() {
    return [$('<h2 class="page-title">Portfolio</h2>'),
    $('<div class="portfolio">').append(
        ...portfolio.map(entry => {
            return $(`<a href="${entry.link}" class="thumbnail">${entry.source ? `
            <i class="fab fa-github"></i>` : `
            `}
                        <label>${entry.title}</label>
                        <img src="${entry.img}" alt="${entry.title}"/>
                    </a>`)
        })
    )];

    // $(`<div class="portfolio">
    //     <a href="https://jyouya.github.io/Word-Guess-Game/" class="thumbnail">
    //         <label>Hangman</label>
    //         <img src="http://lorempixel.com/400/300/cats/1" alt="" />
    //     </a>

    //     <a href="https://jyouya.github.io/unit-4-game/" class="thumbnail">
    //         <label>RPG Game</label>
    //         <img src="http://lorempixel.com/400/300/cats/6" alt="" />
    //     </a>

    //     <a href="https://jyouya.github.io/TriviaGame/" class="thumbnail">
    //         <label>Trivia Game</label>
    //         <img src="http://lorempixel.com/400/300/cats/3" alt="" />
    //     </a>

    //     <a href="#" class="thumbnail">
    //         <label>Rutgers Info Widget</label>
    //         <img src="http://lorempixel.com/400/300/cats/4" alt="" />
    //     </a>

    //     <a href="#" class="thumbnail">
    //         <label>Rock Paper Scissors</label>
    //         <img src="http://lorempixel.com/400/300/cats/5" alt="" />
    //     </a>

    // </div>`)];
}