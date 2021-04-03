<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <NewCollection></NewCollection>
    <Products></Products>
    <Contact></Contact>
    <router-view />
  </div>
</template>
<script>
import Contact from './components/Contact.vue'
import HeaderComp from './components/HeaderComp.vue'
import NewCollection from './components/NewCollection.vue'
import Products from './components/Products.vue'
export default {
  name:"app",
  components:{HeaderComp,NewCollection, Products, Contact}
}
</script>
<style lang="scss">

body{
  margin: 0;
  padding: 0;
}
</style>
