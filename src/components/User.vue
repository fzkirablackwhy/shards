<template>
  <h1>Игрок</h1>
  <h3>Броня</h3>
  <Armor
    :setArmor="setArmor"
    :setMaterial="setArmorMaterial"
    :type="armor.type"
    :material="armor.material"
    :materialOptions="armorMaterials"
  />
  <h3>Оружие</h3>
  <div>
    <Weapon
      :type="weapon.type"
      :material="weapon.material"
      :materialOptions="weaponMaterials"
      :setWeapon="changeWeaponType"
      :setMaterial="changeWeaponMaterial"
    />
  </div>
  <div class="p-d-flex card-wrapper">
    <CardComponent
      class="p-mr-2"
      title="Характеристики брони"
      :description="armorCharacteristics"
    />
    <CardComponent
      class="p-mr-2"
      title="Характеристики оружия"
      :description="weaponCharacteristics"
    />
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import Armor from './Armor/Armor.vue';
import CardComponent from './CardComponent.vue';
import Weapon from './Weapon/Weapon.vue';

export default {
  name: 'User',
  computed: {
    ...mapState({
      armor: state => state.armor,
      weapon: state => state.weapon,
    }),
    ...mapGetters([
      'armorCharacteristics',
      'armorMaterials',
      'weaponMaterials',
      'weaponCharacteristics',
    ]),
  },
  methods: {
    ...mapMutations(['setArmor', 'setArmorMaterial', 'changeWeaponType', 'changeWeaponMaterial']),
  },
  components: {
    Armor,
    Weapon,
    CardComponent,
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  & div {
    flex-basis: 50%;

    & + div {
      margin-left: 20px;
    }
  }
}
</style>
