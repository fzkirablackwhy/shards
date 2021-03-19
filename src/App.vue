<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <div class="block">
      <Armor @setArmor="setArmor" />
      <Weapon @setWeapon="setWeapon" />
      {{ weaponCharacteristics }}
    </div>
    <div class="block">
      <Dummy />
      <button @click="attackDummy">ATTACK!</button>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import Armor from './components/Armor.vue';
import Dummy from './components/Dummy.vue';
import { characteristicsOptions } from './components/options';
import Weapon from './components/Weapon.vue';

export default {
  name: 'App',
  computed: {
    ...mapState({
      weapon: state => state.weapon,
      armor: state => state.armor,
    }),
    // FIXME: вынести
    weaponCharacteristics() {
      if (this.weapon?.weaponCharacteristics) {
        return characteristicsOptions
          .map(
            ({ value, text }) =>
              // тут другой тип
              `${text} ${this.weapon.weaponCharacteristics[value]}`,
          )
          .join(', ');
      }
      return '';
    },
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
  background: khaki;
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
  margin-left: 20px;
}
</style>
