<template>
  <div class="weapon">
    <select v-model="selectedWeapon">
      <option v-for="option in weaponOptions" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
    <select @change="onSelect" v-model="selectedMaterial">
      <option
        v-for="(option, $index) in weaponMaterials"
        :value="option.value"
        :key="option.value"
        :selected="$index === 0 ? true : false"
      >
        {{ option.text }}
      </option>
    </select>
    <div>{{ getWeaponCharacteristics() }}</div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-extraneous-dependencies */

import { defineComponent } from '@vue/runtime-core';
import { WeaponFactory } from '../database/main';
import { characteristicsOptions, weaponOptions, metalMaterialOptions } from './options';

export default defineComponent({
  name: 'Weapon',
  computed: {},
  methods: {
    onSelect() {
      // Object.values(characteristicsOptions).forEach(key => console.log(key));
    },
    getWeaponCharacteristics() {
      const weapon = WeaponFactory.createWeapon(this.selectedWeapon, this.selectedMaterial);
      weapon.getWeaponCharacteristics();
      this.$emit('setWeapon', weapon);

      // // FIXME: убрать и контролировать сверху
      // return characteristicsOptions
      //   .map(
      //     ({ value, text }) =>
      //       // тут другой тип
      //       `${text} ${weaponCharacteristics[value as keyof TDamageType]}`,
      //   )
      //   .join(', ');
    },
  },
  data() {
    return {
      selectedWeapon: 'oneHandedSword' as TWeaponType,
      selectedMaterial: 'cuprum' as TMetalMaterial,
      weaponMaterials: metalMaterialOptions,
      weaponOptions,
    };
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.weapon {
  background: antiquewhite;
}
select {
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
