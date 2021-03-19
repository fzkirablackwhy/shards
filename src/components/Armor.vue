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
    <div>{{ getArmorCharacteristics() }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { ArmorFactory } from '../database/main';
import {
  characteristicsOptions,
  armorOptions,
  leatherMaterialOptions,
  metalMaterialOptions,
} from './options';

export default defineComponent({
  name: 'Armor',
  props: {
    setArmor: {
      type: Function,
      required: true,
    },
  },
  computed: {
    armorMaterials() {
      const type = this.selectedArmor;
      switch (type) {
        case 'leather':
          return leatherMaterialOptions;
        case 'lamellar':
          return [...leatherMaterialOptions, ...metalMaterialOptions];
        default:
          return metalMaterialOptions;
      }
    },
  },
  methods: {
    // FIXME: вынести в метод отдельного стора,
    getArmorCharacteristics() {
      const armor = ArmorFactory.createArmor(
        this.selectedArmor,
        this.selectedMaterial[this.selectedArmor as TArmorType] as
          | TLeatherMaterial
          | TMetalMaterial,
      );

      // armor.armorCharacteristics;
      // TCharacteristicsSum.
      // пока тут
      this.$emit('setArmor', armor);

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
