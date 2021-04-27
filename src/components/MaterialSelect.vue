<template>
  <Dropdown
    :modelValue="material"
    @change="e => onSelect(e)"
    :options="options"
    optionLabel="text"
    optionValue="value"
    placeholder="Выберите материал"
  />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';

export default defineComponent({
  name: 'MaterialSelect',
  props: {
    material: {
      type: String as PropType<TArmorType>,
    },
    type: {
      type: String as PropType<TArmorType>,
    },
    options: {
      type: Object as PropType<TAllMaterials>,
    },
    onSetMaterial: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onSelect(e: any) {
      const { value } = e;
      this.$emit('setMaterial', value);
    },
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
