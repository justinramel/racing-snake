<template>
  <div>
    <div class="jumbotron">
      <h1 class="header-text">Racing Snake</h1>
      <h2 class="header-text">Calculate your ideal cycling weight</h2>
    </div>

    <div class="container">
      <div id="app">
        <Index></Index>
        <MyFooter></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import Index from './components/Index'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'app',
  components: {
    Index,
    MyFooter
  }
}
</script>

<style src="./assets/css/main.css"></style>
<style src="./assets/css/bootstrap.min.css"></style>