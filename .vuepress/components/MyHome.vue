<template>
  <div>
    <section class="homepage-hero-bg">
      <div class="homepage-hero">
        <h1 class="homepage-hero__text">User Experience Designer & <br>Web Developer</h1>
        <img class="homepage-hero__image" src="../../img/mo-mobile.png" alt="">
      </div>
    </section>
    <section class="bg--charcoal">
      <div class="my-philosphy text-wrapper">
        <img class="headshot" src="../../img/headshot.png" alt="">
        <p class="my-powers">
          Hi! I'm Nathan.<br> I use excellent visual design, a strong grasp of
          usability best practices, and thoughtful programming
          to deliver beautiful, professional, accessible websites.
        </p>
      </div>
    </section>
    <section class="text-wrapper padding-y--5">
      <h2 class="text--centered">Latest Projects</h2>
      <article class="card card--horizontal">
        <div class="card__image michigan-online"></div>
        <div class="card__body">
          <h3 class="card__title">Michigan Online</h3>
          <ul class="card__tag-list">
            <li class="card-tag">UX Design</li>
            <li class="card-tag">VueJS</li>
            <li class="card-tag">Django</li>
            <li class="card-tag">Graphic Design</li>
            <li class="card-tag">UX Research</li>
          </ul>
          <p>
            This site connects online learners to over 130 learning opportunities
             created by the University of Michigan.
          </p>
          <a href="">View project</a>
        </div>
      </article>
      <article class="card card--horizontal">
        <div class="card__image gallery-tool"></div>
        <div class="card__body">
          <h3 class="card__title">Assignment Gallery</h3>
          <ul class="card__tag-list">
            <li class="card-tag">UX Design</li>
            <li class="card-tag">VueJS</li>
          </ul>
          <p>
            Learners upload assignments for peer feedback. Instructors can
            customize the interface to meet their course/assignment's needs.
          </p>
          <a href="">View project</a>
        </div>
      </article>
      <article class="card card--horizontal">
        <div class="card__image sleep-tracker"></div>
        <div class="card__body">
          <h3 class="card__title">Sleep Tracker</h3>
          <ul class="card__tag-list">
            <li class="card-tag">UX Design</li>
            <li class="card-tag">Logo Design</li>
            <li class="card-tag">VueJS</li>
          </ul>
          <p>
            Users track habits that might be affecting the quality of their sleep.
          </p>
          <a href="">View project</a>
        </div>
      </article>
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from './MyFooter.vue'

  export default {
    name: "MyHome",
    components: {
      MyFooter
    }
  }
</script>

<style lang="stylus">
@require '../styles/main.styl'

.homepage-hero
  display: flex
  align-items: center
  height: 600px
  overflow: hidden
  max-width: 800px
  margin: 0 auto
  @media only screen and (min-width: 720px) and (max-width: 899px)
    padding: 0 5rem
  @media $md
    flex-direction: column
    text-align: center
    height: 400px
    max-width: 100%
  @media $sm
    flex-direction: column
    text-align: center
    height: 400px
    max-width: 100%
    padding: 0 2rem

.homepage-hero__text
  flex: 2;

.homepage-hero__image
  max-width: 250px

.my-philosphy
  color: $white
  text-align: center
  @media $xl
    padding: 7rem 0
  @media $lg
    padding: 7rem 0
  @media $md
    padding: 3rem 5rem
  @media $sm
    padding: 3rem 2rem

.my-powers
  font-size: 1.5rem
  @media $md
    font-size: 1rem
  @media $sm
    font-size: 1rem

</style>
