<template>
  <article class="project-page-content">
    <header class="project-article-page-header">
      <p><router-link to="../">{{article.projectName}}</router-link> / {{ article.role}}</p>
      <h1>{{ article.title }}</h1>
      <p>{{ article.tagline }}</p>
    </header>
  </article>
</template>

<script>
export default {
  name: 'ArticlePage',
  props: ['article'],
}
</script>

<style lang="stylus">
@require '../styles/main.styl'

</style>

