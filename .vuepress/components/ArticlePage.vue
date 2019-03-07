<template>
  <article class="project-page-content">
    <header class="project-article-page-header">
      <p><router-link to="../">{{article.projectName}}</router-link> / {{ article.role}}</p>
      <h1>{{ article.title }}</h1>
      <p>{{ article.tagline }}</p>
    </header>
    <section v-for="(section, index) in article.sections" :key="`section-${index}`" class="content custom">
      <h2 v-if="section.title">{{section.title}}</h2>
      <img v-if="section.image" class="margin-2-auto" :src="require(`../../img/${section.image}`)" :alt="section.imageAlt">
      <div v-if="section.paragraphs">
        <p v-for="(paragraph, index) in section.paragraphs" :key="`p-${index}`">{{paragraph}}</p>
      </div>
    </section>
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

