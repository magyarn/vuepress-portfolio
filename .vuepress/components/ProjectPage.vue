<template>
  <div class="project-page-wrapper">
    <div class="project-page-logo-wrapper">
      <!-- <img class="project-feature-img" :src="require(`../../img/${project.slug}-feature.png`)" alt=""> -->
      <img class="project-logo" :src="require(`../../img/${project.slug}-logo.png`)" alt="">
    </div>
    <img class="project-banner" :src="require(`../../img/${project.slug}-banner.png`)"alt="">
    <div class="project-page-content margin-top--5">
      <p class="project-tagline">{{ project.description }}</p>
      <h2>Overview</h2>
      <ul>
        <li>Client: {{project.client}}</li>
        <li>Duration: {{project.duration}}</li>
        <li>Tools: 
          <span v-for="(tool, index) in project.tools">{{tool}}<span v-if="index < project.tools.length - 1">, </span>
          </span>
        </li>
        <li>Live Site: <a :href="project.liveSiteURL" target="_blank">{{project.liveSiteText}}</a></li>
      </ul>
    </div>
    <div class="project-page-content margin-top--5">
      <h2>My Roles</h2>
      <section v-for="role in project.roles" :key="role.title" class="role-section">
        <h3>{{role.title}}</h3>
        <p>{{role.description}}</p>
        <ul class="project-article-list">
          <li v-for="article in role.articles" :key="article.title" class="project-article-list__item">
            <router-link :to="article.path" class="project-article-list__item__link">
              <div>
                  <h4 class="project-article-list__item-title">{{article.title}}</h4>
                  <p class="project-article-list__item-tagline">{{article.subtitle}}</p>
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

  export default {
    props: ['project'],
  }
</script>

<style lang="stylus">
@require '../styles/main.styl'

</style>

