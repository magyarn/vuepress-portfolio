<template>
  <article class="project-page-content">
    <header class="project-article-page-header">
      <p><router-link to="../">{{article.projectName}}</router-link> / {{ article.role}}</p>
      <h1 class="project-page-title">{{ article.title }}</h1>
      <p class="project-article-tagline">{{ article.tagline }}</p>
    </header>
    <section v-for="(section, index) in article.sections" :key="`section-${index}`" class="project-article-section content custom">
      <h2 v-if="section.title">{{section.title}}</h2>
      <img v-if="section.image" class="margin-2-auto" :class="imageClass(section)" :src="require(`../../img/${section.image}`)" :alt="section.imageAlt">
      <div v-if="section.paragraphs">
        <p v-for="(paragraph, index) in section.paragraphs" :key="`p-${index}`">{{paragraph}}</p>
      </div>
      <img v-if="section.imageBottom" class="margin-2-auto" :class="imageClass(section)" :src="require(`../../img/${section.imageBottom}`)" :alt="section.imageBottomAlt">
    </section>
  </article>
</template>

<script>

export default {
  name: 'ArticlePage',
  props: ['article'],
  methods: {
    imageClass(section, position) {
      if (section.imageBottomClass) {
        return section.imageBottomClass
      } else if (section.imageClass) {
        return section.imageClass
      }
      return ''
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/main.styl'

</style>

