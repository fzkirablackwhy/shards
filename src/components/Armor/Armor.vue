<template>
  <ArmorSelect @setArmor="setArmor" :type="type" />
  <MaterialSelect @setMaterial="setMaterial" :material="material" :options="materialOptions" />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import ArmorSelect from './ArmorSelect.vue';
import MaterialSelect from '../MaterialSelect.vue';

type TArmorProps = {
  setArmor: () => void;
  setMaterial: () => void;
  type: TArmorType;
  material: TAllMaterials;
  materialOptions: {
    text: string;
    value: string;
  }[];
};

export default defineComponent<{}, {}, TArmorProps, {}>({
  name: 'Armor',
  props: {
    type: {
      type: String as PropType<TArmorProps['type']>,
      required: true,
    },
    material: {
      type: String as PropType<TArmorProps['material']>,
      required: true,
    },
    materialOptions: {
      type: Object as PropType<TArmorProps['materialOptions']>,
      required: true,
    },
    setArmor: { type: Function },
    setMaterial: { type: Function },
  },
  components: {
    ArmorSelect,
    MaterialSelect,
  },
});
</script>

<style></style>
