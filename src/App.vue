<template>
  <div class="container">
    <div class="block">
      <User />
      <Weapon @setWeapon="setWeapon" :weapon="weapon" />
      {{ weaponCharacteristics }}
      <div>
        {{ weaponActions }}
      </div>
    </div>
    <div class="block">
      <Dummy />
      <Button label="ATTACK" @click="attackDummy" />
      <p :class="hitChance ? 'green' : 'red'">
        Состояние удара:
        <span>{{ hitState }}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import User from './components/User.vue';
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
    ...mapGetters(['armorCharacteristics', 'weaponCharacteristics', 'hitState', 'weaponActions']),
  },
  // methods: {
  //   // FIXME: вынести!
  //   ...mapMutations(['setArmor', 'setArmorMaterial', 'setWeapon', 'attackDummy']),
  // },
  components: {
    User,
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

select {
  min-width: 200px;
  margin: 0 10px;
}
.p-dropdown {
  width: 13rem;
  margin-right: 20px;
}
.container {
  display: flex;
  margin: auto 20px;
}
.block {
  background: #1e1e1e;
  color: #5fce8c;
  padding: 20px;
  flex: 1 1 50%;
  box-shadow: 0px 4px 16px rgb(0 0 0 / 10%);
  border-radius: 24px;
}
.block + .block {
  background: #1e1e1e;
  margin-left: 20px;
}
</style>
