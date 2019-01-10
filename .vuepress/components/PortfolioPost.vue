<template>
  <div>
    <a :href="post.projectUrl">{{ post.project }}</a>
    <h1>{{ post.title }}</h1>
    <img :src="require(`../../img/${post.headerImageUrl}`)" alt="">
    <section
      v-for="section in sections"
      :key="section.id">
      <h2 v-if="section.title">{{ section.title }}</h2>
      <p
        v-for="(paragraph, index) in section.text"
        :key="`${section.title}-p-${index}`">
          {{ paragraph }}
      </p>
      <ul v-if="section.specList">
        <li
          v-for="(spec, index) in section.specList"
          :key="`${section.title}-spec-${index}`">
            {{ spec }}
        </li>
      </ul>
      <ul v-if="section.title === 'Comparative Analysis' ">
        <li v-for="(platform, index) in section.platforms" :key="`comp-analysis-${index}`">
          <h3>{{ platform.name }}</h3>
          <p v-for="(paragraph, index) in platform.findings" :key="`${platform.name}-finding-${index}`">
            {{ paragraph }}
          </p>
          <img :src="require(`../../img/${platform.imageURL}`)" :alt="platform.imageALT">
        </li>
      </ul>
      <div v-if="section.title === 'Initial Designs' " class="image-grid">
        <a v-for="path in section.imagePaths" :href="require(`../../img/${path}`)" target="_blank"><img class="image-grid__image" :src="require(`../../img/${path}`)" alt=""></a>
      </div>
      <img v-if="section.imageUrl" :src="require(`../../img/${section.imageUrl}`)" alt="">
      <p v-if="section.finalProductLink">
        <a :href="section.finalProductLink" target="_blank">View Final Product</a>
      </p>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['post', 'sections']
  }
</script>

<style>
.image-grid {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.image-grid__image {
  display: block;
  max-height: 200px;
  margin: .5rem;
}
</style>
