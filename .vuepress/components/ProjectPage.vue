<template>
  <div class="project-page-wrapper">
    <div class="project-page-content">
      <!-- <img class="project-feature-img" :src="require(`../../img/${project.slug}-feature.png`)" alt=""> -->
      <img class="project-logo" :src="require(`../../img/${project.slug}-logo.png`)" alt="">
    </div>
    <img class="project-banner" :src="require(`../../img/${project.slug}-banner.png`)"alt="">
    <div class="project-page-content margin-top--5">
      <p class="project-tagline">{{ project.description }}</p>
      <h2>Overview</h2>
      <ul>
        <li>Client: University of Michigan Office of Academic Innovation</li>
        <li>Duration: January 2018 - Present</li>
        <li>Tools: Sketch, Invision, HTML, CSS, Vue, Django</li>
        <li>Live Site: <a href="https://online.umich.edu/" target="_blank">Michigan Online</a></li>
      </ul>
    </div>
    <div class="project-page-content margin-top--5">
      <h2>My Roles</h2>
      <section>
        <h3>UX Designer</h3>
        <p>
          As the lead UX Designer for the project since it began in 2018, I have helped tackle 
          some of its biggest challenges, including: 2 redesigns, specific feature improvements, 
          and general information architecture.
        </p>
        <ul class="project-article-list">
          <li class="project-article-list__item">
            <router-link to="./ux/before-and-after-and-after-after.html">
              <div>
                  <h4 class="project-article-title">Before and After, and After After</h4>
                  <p class="project-article-tagline">The Story of a Double Redesign</p>
              </div>
              <span>View</span>
            </router-link>
          </li>
          <li class="project-article-list__item">
            <router-link to="./ux/wheres-my-free-stuff.html">
              <div>
                  <h4 class="project-article-title">Where's My Free Stuff?</h4>
                  <p class="project-article-tagline">A Lesson in Simplicity</p>
              </div>
              <span>View</span>
            </router-link>
          </li>
          <li class="project-article-list__item">
            <router-link to="./ux/intuitive-information-architecture.html">
              <div>
                  <h4 class="project-article-title">Intuitive Information Architecture</h4>
                  <p class="project-article-tagline">Discovering the Ideal Content Structure</p>
              </div>
              <span>View</span>
            </router-link>
          </li>
        </ul>
      </section>
      <section class="margin-top--5">
        <h3>Frontend Developer</h3>
        <p>
          In addition to steering the project's user experience, I am also responsible for bringing designs to life
          on the frontend. I use a combination of Django's HTML templating system, LESS/CSS, and VueJS to make it happen.
        </p>
        <ul class="project-article-list">
        <li class="project-article-list__item">
          <router-link to="./frontend-developer/my-journey-with-django.html">
            <div>
                <h4 class="project-article-title">My Journey with Django</h4>
                <p class="project-article-tagline">Top Takeaways After 1 Year as a Developer</p>
            </div>
            <span>View</span>
          </router-link>
        </li>
        <li class="project-article-list__item">
          <router-link to="./frontend-developer/getting-css-under-control.html">
            <div>
                <h4 class="project-article-title">Getting CSS Under Control</h4>
                <p class="project-article-tagline">My Ideal File Structure</p>
            </div>
            <span>View</span>
          </router-link>
        </li>
        <li class="project-article-list__item">
          <router-link to="./frontend-developer/working-with-vuejs.html">
            <div>
                <h4 class="project-article-title">Working with Vue JS</h4>
                <p class="project-article-tagline">Where, Why and How I Did It</p>
            </div>
            <span>View</span>
          </router-link>
        </li>
      </ul>
      </section>
      <section class="margin-top--5">
        <h3>Visual Designer</h3>
        <p>
          I am also the primary visual designer for the site and have made choices
           on everything from color palette and typography to illustration styles.
        </p>
        <ul class="project-article-list">
          <li class="project-article-list__item">
            <router-link to="./visual-designer/choices-choices-choices.html">
              <div>
                  <h4 class="project-article-title">Choices, Choices, Choices</h4>
                  <p class="project-article-tagline">Selecting Color Palette and Typography</p>
              </div>
              <span>View</span>
            </router-link>
          </li>
          <li class="project-article-list__item">
            <router-link to="./visual-designer/an-illustrative-touch.html">
              <div>
                  <h4 class="project-article-title">An Illustrative Touch</h4>
                  <p class="project-article-tagline">How I Developed Michigan Online's Illustrations</p>
              </div>
              <span>View</span>
            </router-link>
          </li>
        </ul>
      </section>
      <section class="margin-top--5">
        <h3>UX Researcher</h3>
        <p>
          While I am most passtionate about design and frontend development, I am a strong advocate for informing my work based on
          good user research. I have done so by performing comparative analyses, conducting surveys, and facilitating usability tests.
        </p>
        <ul class="project-article-list">
            <li class="project-article-list__item">
              <router-link to="./ux-researcher/sizing-up-the-competition.html">
                <div>
                    <h4 class="project-article-title">Sizing Up the Competition</h4>
                    <p class="project-article-tagline">Comparative Analysis Observations</p>
                </div>
                <span>View</span>
              </router-link>
            </li>
            <li class="project-article-list__item">
              <router-link to="./ux-researcher/and-the-winner-is.html">
                <div>
                    <h4 class="project-article-title">And the Winner Is...</h4>
                    <p class="project-article-tagline">Using Surveys to Inform Design</p>
                </div>
                <span>View</span>
              </router-link>
            </li>
            <li class="project-article-list__item">
              <router-link to="./ux-researcher/what-are-you-thinking.html">
                <div>
                    <h4 class="project-article-title">What Are You Thinking?</h4>
                    <p class="project-article-tagline">Stories from Usability Testing</p>
                </div>
                <span>View</span>
              </router-link>
            </li>
          </ul>
      </section>

    </div>
  </div>
</template>

<script>
import MyFooter from './MyFooter.vue'

  export default {
    props: ['project'],
    components: {
      MyFooter
    }
  }
</script>

<style lang="stylus">
@require '../styles/main.styl'

</style>

