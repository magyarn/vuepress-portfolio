<template>
  <footer class="my-footer bg--charcoal-light">
    <p>Made with  ❤️and Vuepress</p>
    <p>&copy; Nathan Magyar {{ copyrightYear}}</p>
  </footer>
</template>

<script>
  export default {
    name: "MyFooter",
    computed: {
      copyrightYear() {
        return (new Date()).getFullYear()
      }
    }
  }
</script>

<style lang="stylus">
@require '../styles/main.styl'

.bg--charcoal-light
  background: $charcoal-light

.my-footer
  width: 100%
  padding: 3rem 0
  text-align: center

</style>
