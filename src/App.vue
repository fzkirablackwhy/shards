<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Armor msg="Welcome to Your Vue.js App" />
  <Weapon />
</template>

<script>
import Armor from './components/Armor.vue';
import Weapon from './components/Weapon.vue';

export default {
  name: 'App',
  components: {
    Armor,
    Weapon,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
