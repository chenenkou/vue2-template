<template>
  <div>
    <ul>
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style>

</style>
<script>
export default{
  data () {
    return {
      msg: 'hello vue'
    }
  }
}
</script>
