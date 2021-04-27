<template>
  <div>
    <Dropdown
      v-model="type"
      @change="e => onSelect(e, 'type')"
      :options="armorOptions"
      optionLabel="text"
      optionValue="value"
      placeholder="Выберите доспех"
    />

    <Dropdown
      v-model="material"
      @change="e => onSelect(e, 'material')"
      :options="armorMaterials"
      optionLabel="text"
      optionValue="value"
      placeholder="Выберите материал"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import Dropdown from 'primevue/dropdown/';
import { armorOptions, leatherMaterialOptions, metalMaterialOptions } from './options';

export default defineComponent({
  name: 'Armor',
  props: {
    armor: {
      type: Object as PropType<TArmor<TArmorType, TAllMaterials>>,
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
      if (type === 'type') {
        this.type = e.value;
      } else {
        console.log(e, 'e');
        this.material = e.value;
      }
      this.$emit('setArmor', { value: e.value, type });
    },
  },
  data() {
    return {
      // FIXME: separate components
      material: null,
      type: null,
      armorOptions,
    };
  },
  components: {
    Dropdown,
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
