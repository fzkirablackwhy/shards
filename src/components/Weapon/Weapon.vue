<template>
  <WeaponSelect :type="type" @setWeapon="setWeapon" />
  <MaterialSelect @setMaterial="setMaterial" :material="material" :options="materialOptions" />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import WeaponSelect from './WeaponSelect.vue';
import MaterialSelect from '../MaterialSelect.vue';

export default defineComponent({
  name: 'Weapon',
  props: {
    type: {
      type: String as PropType<TWeaponType>,
      required: true,
    },
    material: {
      type: String as PropType<TMetalMaterial>,
      required: true,
    },
    materialOptions: {
      type: Object,
      required: true,
    },
    setWeapon: { type: Function },
    setMaterial: { type: Function },
  },

  components: {
    WeaponSelect,
    MaterialSelect,
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped></style>
