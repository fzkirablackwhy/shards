<template>
  <div>
    <select @input="e => onSelect(e, 'type')">
      <option
        v-for="option in armorOptions"
        :value="option.value"
        :key="option.value"
        :selected="option.value === type"
      >
        {{ option.text }}
      </option>
    </select>
    <select @input="e => onSelect(e, 'material')">
      <option
        v-for="option in armorMaterials"
        :value="option.value"
        :key="option.value"
        :selected="option.value === armor?.material"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { armorOptions, leatherMaterialOptions, metalMaterialOptions } from './options';

export default defineComponent({
  name: 'Armor',
  props: {
    armor: {
      type: Object as PropType<TArmor<TArmorType, TMetalMaterial | TLeatherMaterial>>,
    },
    onSetArmor: {
      type: Function,
      required: true,
    },
  },
  computed: {
    armorMaterials() {
      const type = this.armor?.type ?? 'leather';
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
    onSelect(e: any, type: 'type' | 'material') {
      this.$emit('setArmor', { value: e.target.value, type });
    },
  },
  data() {
    return {
      type: null,
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
