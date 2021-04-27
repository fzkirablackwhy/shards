<template>
  <div class="container">
    <div class="block">
      <User />
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
import Weapon from './components/Weapon/Weapon.vue';

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
    // Weapon,
    Dummy,
  },
};
</script>

<style lang="scss">
@import './scss/_colors.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin-top: 60px;
  background: $background;
}

.red {
  color: red;
}
.green {
  color: #2fce2f;
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
  text-align: left;
  background: $blockColor;
  color: $turquoise;
  padding: 20px;
  flex: 1 1 50%;
  /* box-shadow: 0px 4px 16px rgb(0 0 0 / 10%); */
  border-radius: 24px;
}
.block + .block {
  margin-left: 20px;
}
</style>
