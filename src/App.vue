<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div class="container">
    <div class="block">
      <Armor @setArmor="setArmor" :armor="armor" />
      {{ armorCharacteristics }}
      <Weapon @setWeapon="setWeapon" :weapon="weapon" />
      {{ weaponCharacteristics }}
    </div>
    <div class="block">
      <Dummy />
      <button @click="attackDummy">ATTACK!</button>
      <p :class="hitChance ? 'green' : 'red'">
        Состояние удара:
        <span>{{ hitState }}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import Armor from './components/Armor.vue';
import Dummy from './components/Dummy.vue';
import Weapon from './components/Weapon.vue';

export default {
  name: 'App',
  computed: {
    ...mapState({
      weapon: state => state.weapon,
      armor: state => state.armor,
      hitChance: state => state.hitChance,
    }),
    ...mapGetters(['armorCharacteristics', 'weaponCharacteristics', 'hitState']),
  },
  methods: {
    ...mapMutations(['setArmor', 'setWeapon', 'attackDummy']),
  },
  components: {
    Armor,
    Weapon,
    Dummy,
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
body {
  background: #211f13;
}
.red {
  color: red;
}
.green {
  color: #2fce2f;
}
.hit-state {
}
select {
  min-width: 200px;
  margin: 0 10px;
}
.container {
  display: flex;
  margin: auto 20px;
}
.block {
  background: #fff;
  padding: 20px;
  flex: 1 1 50%;
  box-shadow: 0px 4px 16px rgb(0 0 0 / 10%);
  border-radius: 24px;
}
.block + .block {
  background: #222831;
  margin-left: 20px;
}
</style>
