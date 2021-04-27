<template>
  <Dropdown
    :modelValue="type"
    @change="e => onSelect(e)"
    :options="weaponOptions"
    optionLabel="text"
    optionValue="value"
    placeholder="Выберите оружие"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { weaponOptions } from '../options';

export default defineComponent({
  name: 'WeaponSelect',
  props: {
    type: {
      type: String as PropType<TWeaponType>,
      required: true,
    },
  },
  methods: {
    onSelect(e: any) {
      console.log(this);
      const { value } = e;

      this.$emit('setWeapon', value);
    },
  },
  data() {
    return {
      weaponOptions,
    };
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
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
