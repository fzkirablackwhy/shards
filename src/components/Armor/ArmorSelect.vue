<template>
  <Dropdown
    :modelValue="type"
    @change="$emit('setArmor', $event.value)"
    :options="armorOptions"
    optionLabel="text"
    optionValue="value"
    placeholder="Выберите доспех"
  />
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { armorOptions } from '../options';

export default defineComponent({
  name: 'ArmorSelect',
  props: {
    type: {
      type: String as PropType<TArmorType>,
    },
  },
  data() {
    return {
      armorOptions,
    };
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
