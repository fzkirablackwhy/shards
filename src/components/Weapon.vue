<template>
  <div class="weapon">
    <Dropdown
      v-model="type"
      @change="e => onSelect(e, 'type')"
      :options="weaponOptions"
      optionLabel="text"
      optionValue="value"
      placeholder="Выберите оружие"
    />
    <Dropdown
      v-model="material"
      @change="e => onSelect(e, 'material')"
      :options="weaponMaterials"
      optionLabel="text"
      optionValue="value"
      placeholder="Выберите материал"
    />
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
    onSetWeapon: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onSelect(e: any, type: any) {
      if (type === 'type') {
        this.type = e.value;
      } else {
        console.log(e, 'e');
        this.material = e.value;
      }
      this.$emit('setWeapon', { value: e.value, type });
    },
  },
  data() {
    return {
      type: null,
      material: null,
      weaponMaterials: metalMaterialOptions,
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
