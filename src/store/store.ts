import { createStore } from 'vuex';
import { DummyState, dummy } from '@/store/modules/dummy';
import { calculateDamage } from '@/database/utils/utils';
import { preventNegativeNum } from '@/database/utils/heplpers';
import { WeaponFactory } from '@/database/main';

export type State = {
  dummy?: DummyState;
  armor: TArmor<TArmorType, TMetalMaterial | TLeatherMaterial> | null;
  weapon: TWeapon<TWeaponType, TMetalMaterial>;
};

const store = createStore<State>({
  modules: {
    dummy,
  },
  state: () => ({
    armor: null,
    weapon: WeaponFactory.createWeapon('oneHandedSword' as TWeaponType, 'cuprum'),
  }),
  mutations: {
    setArmor(state, armor) {
      state.armor = armor;
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
      if (state.weapon?.weaponCharacteristics && state.dummy?.armor) {
        const { weaponCharacteristics } = state.weapon;
        const dummyArmorCharacteristics = state.dummy.armor.armorCharacteristics;

        const { hp } = state.dummy.person;
        state.dummy.person.hp = preventNegativeNum(
          hp - calculateDamage(weaponCharacteristics, dummyArmorCharacteristics),
        );
        // recalculate
        state.weapon.calculateWeaponCharacteristics();
      }
    },
  },
});

export default store;
