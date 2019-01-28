<template>
  <div>
    <section class="text-wrapper">
      <h1>About</h1>
      <img class="headshot" src="../../img/headshot.png" alt="">
      <h2>Hi, I'm Nathan. </h2>
      <p>
        I'm a User Experience Designer and Front End Developer,
        currently working at the University of Michigan Office of Academic Innovation.
        I hold a Master of Science in Information from the University of Michigan School of Information,
        where I specialized in Human-Computer Interaction.
      </p>
      <p>
        Since graduating, I have continued to hone my craft as a visual and graphic
        designer. I enjoy creating logos, icon sets, style guides, and entire design systems.
        My current role gives me numerous opportunities to stay engaged with all parts
        of the user experience spectrum, from research methods such as comparative
        analysis and user interviews, to assembling low and high fidelity mockups,
        all the way to front-end implementation--which brings me to what has become my biggest passion...
      </p>
      <h2>I. Love. Web development. </h2>
      <p>
        Besides basic HTML and CSS, I am also highly proficient
        with vanilla Javascript and jQuery. More recently, I have challenged my love
        for Javascript into learning the frontend framework Vue, and have greatly
        enjoyed applying it in my daily work. Additionally, to help spread the love of
        Vue around the office, I lead a weekly workshop series on the topics of Javascript and Vue,
        for which I plan, create and teach lessons to fellow designers and developers. We're currently
        working on using the Vue CLI to create an online store prototype, for which you can
        checkout the tutorials here.
      </p>
      <p>
        When I'm not buried in a video tutorial on Vue, I'm busy learning the
        Python-based framework, Django. I have aspirations of becoming a full-stack
        developer who also knows a lot about user experience and visual design.
      </p>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from './MyFooter.vue'
  export default {
    name: "AboutMe",
    components: {
      MyFooter
    }
  }
</script>

<style lang="stylus">
@require('../styles/main.styl')
</style>
