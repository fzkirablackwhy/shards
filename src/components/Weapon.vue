<template>
  <div class="weapon">
    <select @input="e => onSelect(e, 'type')">
      <option
        v-for="option in weaponOptions"
        :value="option.value"
        :key="option.value"
        :selected="option.value === weapon.type"
      >
        {{ option.text }}
      </option>
    </select>
    <select @input="e => onSelect(e, 'material')">
      <option
        v-for="option in weaponMaterials"
        :value="option.value"
        :key="option.value"
        :selected="option.value === weapon.material"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { weaponOptions, metalMaterialOptions } from './options';

export default defineComponent({
  name: 'Weapon',
  computed: {},
  props: {
    weapon: {
      type: Object as PropType<TWeapon<TWeaponType, TMetalMaterial>>,
    },
    setWeapon: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onSelect(e: any, type: any) {
      this.$emit('setWeapon', { value: e.target.value, type });
    },
  },
  data() {
    return {
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
