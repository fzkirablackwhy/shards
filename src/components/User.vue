<template>
  <Armor
    :setArmor="setArmor"
    :setMaterial="setArmorMaterial"
    :type="armor.type"
    :material="armor.material"
    :materialOptions="armorMaterials"
  />
  {{ armorCharacteristics }}
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import Armor from './Armor/Armor.vue';

export default {
  name: 'User',
  computed: {
    ...mapState({
      armor: state => state.armor,
      weapon: state => state.weapon,
    }),
    ...mapGetters(['armorCharacteristics', 'armorMaterials']),
  },
  methods: {
    ...mapMutations(['setArmor', 'setArmorMaterial']),
  },
  components: {
    Armor,
  },
};
</script>

<style></style>
