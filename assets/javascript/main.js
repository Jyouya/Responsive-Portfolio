$(window).ready(function () {
    $('.nav-button').on('click', function (event) {
        changePage.call(this, $(this).attr('data-page'));
    });
});

const pageTable = {
    about: drawAbout,
    profile: drawProfile,
    contact: drawContact,
}
function changePage(newPage) {
    $('.nav-button').removeClass('current-page');
    $(this).addClass('current-page');
    $('.grid-box').animate({ opacity: 0, right: '110%' }, 500).promise()
        .then(
            function () {
                $(this).remove();
            }
        );
    $('<div>')
        .addClass('grid-box  start-transparent start-right')
        .appendTo('.content')
        .append(
            $('<div>')
                .addClass('content-box')
                .append(...pageTable[newPage]())
        )
        .animate({ opacity: 1, right: 0 }, 500).promise()
        .then(
            $(this).removeClass('start-right start-transparent')
        )
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
            </article>
            <br/>`),
    $('<div class="links">').append(
        $('<a href="assets/other/Will West.pdf">Resume</a>'),
        $('<a href="mailto:willwest8xp@gmail.com"><i class="far fa-envelope"></i></a>'),
        $('<a href="https://github.com/Jyouya"><i class="fab fa-github"></i></a>'),
        $('<a href="https://www.linkedin.com/in/will-west-ab19ab97/"><i class="fab fa-linkedin-in"></i></a>')
    )]
}


const portfolio = [
    {
        title: 'Animingle',
        img: './assets/images/animingle.png',
        link: 'https://zscott92.github.io/Animingle/',
        source: 'https://github.com/zscott92/Animingle',
        label: false,
    },
    {
        title: 'Windower4 GUI-Lib',
        img: './assets/images/gui-lib.png',
        link: 'https://github.com/Jyouya/GUI-lib',
        label: true
    },
    {
        title: 'Bamazon',
        img: './assets/images/BAMazon.png',
        link: 'https://fathomless-garden-79160.herokuapp.com',
        source: 'https://github.com/Jyouya/Bamazon',
        label: false
    },
    {
        title: 'Anime Trivia',
        img: './assets/images/trivia.png',
        link: 'https://jyouya.github.io/TriviaGame/',
        source: 'https://github.com/Jyouya/TriviaGame',
        label: false,
    },
    {
        title: 'Star Wars Puzzle RPG',
        img: './assets/images/star-wars.png',
        link: 'https://jyouya.github.io/unit-4-game/',
        source: 'https://github.com/Jyouya/unit-4-game',
        label: true,
        lightIcon: true,
    },
    {
        title: 'LIRI CLI',
        img: './assets/images/liri.png',
        link: 'https://github.com/Jyouya/liri-node-app',
        label: true
    },
    {
        title: 'Friend Finder',
        img: './assets/images/friend-finder.png',
        link: 'https://mans-best-friend-finder.herokuapp.com/',
        source: 'https://github.com/Jyouya/Friend-Finder',
        label: false
    },
    {
        title: 'Hangman',
        img: './assets/images/hangman.png',
        link: 'https://jyouya.github.io/Word-Guess-Game/',
        source: 'https://github.com/Jyouya/Word-Guess-Game',
        label: false,
        lightIcon: true,
    },
]

function drawProfile() {
    return [$('<h2 class="page-title">Portfolio</h2>'),
    $('<div class="portfolio">').append(
        ...portfolio.map(entry => {
            return $(`<a href="${entry.link}" class="thumbnail">`).append(
                entry.source ? $(`<a href="${entry.source}" class="github-link${entry.lightIcon ? ' light' : ''}">`).append(
                    $('<i class="fab fa-github"></i>')
                ) : null,
                entry.label ? $(`<label>`).text(entry.title) : null,
                $(`<img src="${entry.img}" alt="${entry.title}">`)
            )
        })
    )];
}

function drawContact() {
    return [
        $('<h2 class="page-title">Contact Me</h2>'),
        $('<form>').append(
            $('<label>').text('Name'),
            $('<input type="text" name="name" placeholder="Your Name" disabled />'),
            $('<label>').text('Email'),
            $('<input type="text" name="email" placeholder="example@gmail.com" disabled />'),
            $('<label>').text('Message'),
            $('<textarea type="text" name="message" placeholder="Your message goes here..." rows=12 disabled></textarea>'),
            $('<input id="submit" type="submit" disabled />')
        ),
        $('<h2>').html('This form is under construction, but you can email me at <a href="mailto:willwest8xp@gmail.com">willwest8xp@gmail.com</a>')
    ]

    // <h2 class="page-title">Contact</h2>
    //         <form>
    //             <label>Name</label>
    //             <input type="text" name="name" placeholder="Your Name" />
    //             <label>Email</label>
    //             <input type="text" name="email" placeholder="example@gmail.com" />
    //             <label>Message</label>
    //             <textarea type="text" name="message" placeholder="Your message goes here..." rows=12></textarea>
    //             <input id=submit type="submit">
    //         </form>
}