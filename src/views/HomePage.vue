<template>
  <div style="width: 100%; height: 100%">
    <div class="header">
      <Header></Header>
    </div>
    <div class="content mb-4">
      <Content></Content>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
}
.content {
  min-height: 100%;
  width: 100%;
}
</style>
