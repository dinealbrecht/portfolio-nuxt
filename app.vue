<script setup>
// variable
const msg = 'Hello!'

// functions
function log() {
  console.log(msg)
}
</script>

<template>
  <div class="App">
    <h1 class="App__header">Dine Albrecht</h1>
    <div class="App-intro">
        <p>
          Hello there :) I'm a <em>Freelance Interactive Frontend Developer</em> with over 10 years experience working for London ad agencies such as
          <a href="https://b-reel.com/" rel="noopener noreferrer" target="_blank">B-Reel</a>, <a href="https://www.stinkstudios.com/" rel="noopener noreferrer" target="_blank">Stink Studios</a>,
          <a href="https://www.rehabagency.ai/" rel="noopener noreferrer" target="_blank">rehabstudio</a>, <a href="http://futurecorp.london/" rel="noopener noreferrer" target="_blank">futurecorp</a>,
          <a href="https://clubhouse.studio/" rel="noopener noreferrer" target="_blank">clubhouse studio</a>. I like staying up to date with latest technologies and am currently using React, Webpack, SCSS. I live between
          <em>London</em>, <em>Berlin</em> and <em>Berlin</em> and am available for remote collaborations.
        </p>
        <p>
          Get in touch with me here:<br />
          <a href="mailto:hello@dinealbrecht.net">email me</a>, 
          <a href="https://www.linkedin.com/in/dinealbrecht/" rel="noopener noreferrer" target="_blank">linkedin</a>,
        </p>
    </div>
    <div class="App__items">
        <a class="Project" href="https://www.stinkstudios.com/work/john-lewis-moz-the-monster-monster-maker" target="_blank">
            <div class="Project__front"><img src="public/screenshot-2019-10-01-at-21.24.55-1000x1000.png" class="Project__image" /></div>
            <div class="Project__back">
                <div class="Project__content">
                    <h2 class="Project__title">Moz the Monster</h2>
                    <p class="Project__description">John Lewis Christmas campaign. Developed in React, Redux, styled components</p>
                    <p class="Project__link">see project</p>
                </div>
            </div>
        </a>
        <a class="Project" href="https://www.michelbergerhotel.com/" target="_blank">
            <div class="Project__front"><img src="public/screenshot-2019-10-01-at-21.30.26-1000x1000.png" class="Project__image" /></div>
            <div class="Project__back">
                <div class="Project__content">
                    <h2 class="Project__title">Michelberger Hotel</h2>
                    <p class="Project__description">New website for Michelberger Hotel. Developed with Gatsby, React, redux, styled components</p>
                    <p class="Project__link">see project</p>
                </div>
            </div>
        </a>
        <a class="Project" href="https://www.gatesfoundation.org/yearinreview/2017/en" target="_blank">
            <div class="Project__front"><img src="public/screenshot-2019-10-14-at-22.06.54-1000x1000.png" class="Project__image" /></div>
            <div class="Project__back">
                <div class="Project__content">
                    <h2 class="Project__title">Gates Foundation</h2>
                    <p class="Project__description">Year in review 2017 for the Gates foundation - Developed in React.js</p>
                    <p class="Project__link">see project</p>
                </div>
            </div>
        </a>
        <a class="Project" href="https://popnow.stellamccartney.com/" target="_blank">
            <div class="Project__front"><img src="public/screen-shot-2017-07-31-at-22.19.28-1000x1000.png" class="Project__image" /></div>
            <div class="Project__back">
                <div class="Project__content">
                    <h2 class="Project__title">Stella POP</h2>
                    <p class="Project__description">Campaign site for new Stella McCartney perfume POP. Tech: Vue.js, SCSS</p>
                    <p class="Project__description">offline</p>
                </div>
            </div>
        </a>
        <a class="Project" href="http://www.adidas.co.uk/stellasport" target="_blank">
            <div class="Project__front"><img src="public/screen-shot-2017-07-31-at-22.21.49-1000x1000.png" class="Project__image" /></div>
            <div class="Project__back">
                <div class="Project__content">
                    <h2 class="Project__title">Stellasport</h2>
                    <p class="Project__description">New website for Stellasport. Tech: React.js, SCSS, Gulp</p>
                    <p class="Project__description">now offline</p>
                </div>
            </div>
        </a>
        <a class="Project" href="https://www.here.com/en/vision/autonomous-world" target="_blank">
            <div class="Project__front"><img src="public/screenshot-2019-10-11-at-11.34.34-1000x1000.png" class="Project__image" /></div>
            <div class="Project__back">
                <div class="Project__content">
                    <h2 class="Project__title">Here</h2>
                    <p class="Project__description">Section for here.com site for autonomous world. Tech: riot, scss</p>
                    <p class="Project__description">now offline</p>
                </div>
            </div>
        </a>
        <a class="Project" href="http://londonewcastle.com/" target="_blank">
            <div class="Project__front"><img src="public/screen-shot-2017-08-05-at-22.57.39-1000x1000.png" class="Project__image" /></div>
            <div class="Project__back">
                <div class="Project__content">
                    <h2 class="Project__title">Londonewcastle</h2>
                    <p class="Project__description">A new website for architecture firm Londonewcastle. Developed in ES6, React and Kirby CMS</p>
                    <p class="Project__description">now offline</p>
                </div>
            </div>
        </a>
        <a class="Project" href="http://twentytwolondon.com/" target="_blank">
            <div class="Project__front"><img src="public/screen-shot-2017-08-05-at-23.15.16-1000x1000.png" class="Project__image" /></div>
            <div class="Project__back">
                <div class="Project__content">
                    <h2 class="Project__title">Twentytwo</h2>
                    <p class="Project__description">Website for new developement in the city of London in twentytwo Bishopsgate featuring an interactive scroll experience. Developed with React, ES6, Kirby CMS</p>
                    <p class="Project__description">now offline</p>
                </div>
            </div>
        </a>
        <a class="Project" href="https://www.theopen.com/Leaderboard#!/traditional" target="_blank">
            <div class="Project__front"><img src="public/screen-shot-2016-04-14-at-23.52.24-1000x1000.jpg" class="Project__image" /></div>
            <div class="Project__back">
                <div class="Project__content">
                    <h2 class="Project__title">The Open</h2>
                    <p class="Project__description">Interactive map showing live scores and locations + leaderboard</p>
                    <p class="Project__description">now offline</p>
                </div>
            </div>
        </a>
        <a class="Project" href="http://copa90.com/" target="_blank">
            <div class="Project__front"><img src="public/58a1257copa90-match-day-1000x1000.jpg" class="Project__image" /></div>
            <div class="Project__back">
                <div class="Project__content">
                    <h2 class="Project__title">Copa90</h2>
                    <p class="Project__description">Social media alternative website for Football fans. Tech: Backbone, Jade templates, ES6</p>
                    <p class="Project__description">now offline</p>
                </div>
            </div>
        </a>
    </div>
  </div>
</template>
