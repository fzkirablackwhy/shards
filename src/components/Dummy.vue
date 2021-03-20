<template>
  <div>
    Манекен
    <p>
      Броня на манекене:
      {{ !hasArmor ? 'без брони' : null }}
      <button @click="onClick">
        {{ hasArmor ? 'Снять броню' : 'Надеть броню' }}
      </button>
    </p>
    <Armor @setArmor="setArmor" :armor="person.armor" v-if="person.armor" />
    <p v-else>О, нет 😢</p>
    <p>Здоровье {{ hp }}</p>
    {{ characteristics }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { DummyState } from '@/store/modules/dummy';
import { createNamespacedHelpers } from 'vuex';
import Armor from './Armor.vue';

const { mapMutations, mapState, mapGetters } = createNamespacedHelpers('dummy');

export default defineComponent({
  components: { Armor },
  name: 'Dummy',
  computed: {
    ...mapState<DummyState>({
      person: (state: DummyState) => state.person,
    }),
    ...mapGetters(['hp', 'hasArmor', 'characteristics']),
  },
  methods: {
    ...mapMutations(['setArmor', 'wearArmor', 'takeOffArmor']),
    onClick() {
      if (this.hasArmor) {
        this.takeOffArmor();
        return;
      }
      this.wearArmor();
    },
  },
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
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
