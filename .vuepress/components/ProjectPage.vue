<template>
  <div>
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <img :src="require(`../../img/${project.featureImage}`)" alt="">
  </div>
</template>

<script>
  export default {
    props: ['project']
  }
</script>
