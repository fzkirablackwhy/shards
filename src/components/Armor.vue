<template>
  <div>
    <select v-model="selectedArmor">
      <option v-for="option in armorOptions" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
    <select @change="onSelect" v-model="selectedMaterial[selectedArmor]">
      <option
        v-for="(option, $index) in armorMaterials"
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
import { ArmorFactory, WeaponFactory } from '../database/main';
import {
  characteristicsOptions,
  armorOptions,
  leatherMaterialOptions,
  metalMaterialOptions,
} from './options';

console.log(WeaponFactory.createWeapon('oneHandedSpear', 'cuprum'));
export default defineComponent({
  name: 'Armor',
  computed: {
    armorMaterials() {
      const type = this.selectedArmor;
      switch (type) {
        case 'leather':
          return leatherMaterialOptions;
        default:
          return metalMaterialOptions;
      }
    },
  },
  methods: {
    onSelect() {
      // Object.values(characteristicsOptions).forEach(key => console.log(key));
    },
    getWeaponCharacteristics() {
      const armor = ArmorFactory.createArmor(
        this.selectedArmor,
        this.selectedMaterial[this.selectedArmor] as TLeatherMaterial | TMetalMaterial,
      );

      return characteristicsOptions
        .map(
          ({ value, text }) => `${text} ${armor.armorCharacteristics[value as keyof TDamageType]}`,
        )
        .join(', ');
    },
  },
  data() {
    return {
      selectedArmor: 'leather' as TArmorType,
      selectedMaterial: {
        leather: 'cow',
        // убрать
        chain: 'cuprum',
        lamellar: 'cuprum',
        mountainPattern: 'cuprum',
      },
      armorOptions,
    };
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
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
