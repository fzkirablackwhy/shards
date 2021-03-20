import { createStore } from 'vuex';
import { DummyState, dummy } from '@/store/modules/dummy';
import { calculateDamage } from '@/database/utils/utils';
import { preventNegativeNum } from '@/database/utils/heplpers';

export type State = {
  dummy?: DummyState;
  armor: TArmor<TArmorType, TMetalMaterial | TLeatherMaterial> | null;
  weapon: TWeapon<TWeaponType, TMetalMaterial> | null;
};

const store = createStore<State>({
  modules: {
    dummy,
  },
  state: () => ({
    armor: null,
    weapon: null,
  }),
  mutations: {
    setArmor(state, armor) {
      state.armor = armor;
    },
    setWeapon(state, weapon) {
      state.weapon = weapon;
    },
    attackDummy(state) {
      if (state.weapon?.weaponCharacteristics && state.dummy?.armor) {
        const { weaponCharacteristics } = state.weapon;
        const dummyArmorCharacteristics = state.dummy.armor.armorCharacteristics;

        const { hp } = state.dummy.person;

        state.dummy.person.hp = preventNegativeNum(
          hp - calculateDamage(weaponCharacteristics, dummyArmorCharacteristics),
        );
        state.weapon.weaponCharacteristics = state.weapon.getWeaponCharacteristics();
      }
    },
  },
});

export default store;
