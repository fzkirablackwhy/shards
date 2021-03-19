<template>
  <div>
    Манекен
    <Armor @setArmor="setArmor" />
    <p>Здоровье {{ hp }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { createNamespacedHelpers } from 'vuex';
import Armor from './Armor.vue';

const { mapMutations, mapState, mapGetters } = createNamespacedHelpers('dummy');
export default defineComponent({
  components: { Armor },
  name: 'Dummy',
  methods: {
    ...mapMutations(['setArmor']),
  },
  computed: {
    ...mapState({
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      person: state => state.person,
    }),
    // FIXME: может и не пригодится
    ...mapGetters([
      'personStats',
      'hp',
      // ...
    ]),
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
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
