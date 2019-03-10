<template>
  <ul class="blog-articles">
    <li v-for="article in content.articles" :key="article.title" class="blog-article-card">
      <router-link 
        v-if="article.type === 'internal'"
        :to="article.link" 
        class="blog-article-card__link">
        <div 
          class="blog-article-card__image" 
          :style="{ backgroundImage: 'url(' + require(`../../img/blog/${article.featuredImage}.png`) + ')' }"></div>
        <div class="blog-article-card__info">
          <div>
            <h3 class="blog-article-card__title">{{article.title}}</h3>
            <p class="blog-article-card__description">{{article.description}}</p>
          </div>
          <p class="blog-article-card__date">{{article.date}}</p>
        </div>
      </router-link>
      <a v-else :href="article.link" class="blog-article-card__link" target="_blank">
        <div 
          class="blog-article-card__image" 
          :style="{ backgroundImage: 'url(' + require(`../../img/blog/${article.featuredImage}.png`) + ')' }"></div>
        <div class="blog-article-card__info">
          <div>
            <h3 class="blog-article-card__title">{{article.title}}</h3>
            <p class="blog-article-card__description">{{article.description}}</p>
          </div>
          <p class="blog-article-card__date">{{article.date}}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'FeaturedArticles',
    props: [ 'content' ]
  }
</script>

<style lang="stylus">
@require '../styles/main.styl'
</style>


