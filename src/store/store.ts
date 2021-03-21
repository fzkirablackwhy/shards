/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { createStore } from 'vuex';
import { DummyState, dummy } from '@/store/modules/dummy';
import { calculateDamage, getHitChance } from '@/database/utils/utils';
import { preventNegativeNum } from '@/database/utils/heplpers';
import { ArmorFactory, WeaponFactory } from '@/database/main';
import { mapArmorCharacteristics, mapWeaponCharacteristics } from '@/utils/mappers';

export type State = {
  dummy?: DummyState;
  armor: TArmor<TArmorType, TMetalMaterial | TLeatherMaterial>;
  weapon: TWeapon<TWeaponType, TMetalMaterial>;
  hitChance: boolean | null;
};

const store = createStore<State>({
  modules: {
    dummy,
  },
  state: () => ({
    armor: ArmorFactory.createDefaultArmor(),
    weapon: WeaponFactory.createWeapon('oneHandedSword' as TWeaponType, 'cuprum'),
    hitChance: null,
  }),
  mutations: {
    setArmor(state, args) {
      if (args.type === 'material') {
        const armor = ArmorFactory.createArmor(state.armor.type, args.value);
        state.armor = armor;
      }
      if (args.type === 'type') {
        const armor = ArmorFactory.createArmor(args.value, state.armor.material);
        state.armor = armor;
      }
    },
    setWeapon(state, args) {
      if (args.type === 'material') {
        state.weapon.changeMaterial(args.value);
      }
      if (args.type === 'type') {
        state.weapon.changeType(args.value);
      }
    },
    attackDummy(state) {
      if (state.weapon?.weaponCharacteristics && state.dummy?.person) {
        const { weaponCharacteristics } = state.weapon;
        const { armorCharacteristics } = state.dummy.person;

        const { hp } = state.dummy.person;

        const hitChance = getHitChance(80);
        state.hitChance = hitChance;

        if (hitChance) {
          state.dummy.person.hp = preventNegativeNum(
            hp - calculateDamage(weaponCharacteristics, armorCharacteristics),
          );
          // recalculate
          state.weapon.calculateWeaponCharacteristics();
        }
      }
    },
  },
  getters: {
    hitState: state => (state.hitChance ? 'Попадание' : 'Промах'),
    armorCharacteristics: state => mapArmorCharacteristics(state.armor.armorCharacteristics),
    weaponCharacteristics: state => mapWeaponCharacteristics(state.weapon.weaponCharacteristics),
  },
});

export default store;
