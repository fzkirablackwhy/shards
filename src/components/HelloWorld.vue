<template>
  <div id="v-model-select-dynamic" class="demo">
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
    <!-- <pre v-if="selectedArmor === 'leather'">Custom name: {{ customCarrierName }}</pre> -->
    <div>{{ getArmorCharacterictics() }}</div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-extraneous-dependencies */

import { defineComponent } from '@vue/runtime-core';
import { Options, Vue } from 'vue-class-component';
import { ArmorFactory } from '../database/main';
import {
  characteristicsOptions,
  armorOptions,
  leatherMaterialOptions,
  matelMaterialOptions,
} from './options';

export default defineComponent({
  name: 'HelloWorld',
  computed: {
    // a computed getter
    armorMaterials() {
      const type = this.selectedArmor;
      switch (type) {
        case 'leather':
          return leatherMaterialOptions;
        default:
          return matelMaterialOptions;
      }
    },
  },
  methods: {
    onSelect() {
      // Object.values(characteristicsOptions).forEach(key => console.log(key));
    },
    getArmorCharacterictics() {
      const armor = ArmorFactory.createArmor(
        this.selectedArmor,
        this.selectedMaterial[this.selectedArmor] as TLeatherMaterial | TMetalMaterial,
      );

      return characteristicsOptions.map(
        ({ value, text }) => `${text} ${armor[value as keyof TCharacteristicsSum]}`,
      );
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
      armorOptions: [...armorOptions],
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
