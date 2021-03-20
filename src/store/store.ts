/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { createStore } from 'vuex';
import { DummyState, dummy } from '@/store/modules/dummy';
import { calculateDamage } from '@/database/utils/utils';
import { preventNegativeNum } from '@/database/utils/heplpers';
import { ArmorFactory, WeaponFactory } from '@/database/main';
import { characteristicsOptions } from '@/components/options';

export type State = {
  dummy?: DummyState;
  armor: TArmor<TArmorType, TMetalMaterial | TLeatherMaterial>;
  weapon: TWeapon<TWeaponType, TMetalMaterial>;
};

const store = createStore<State>({
  modules: {
    dummy,
  },
  state: () => ({
    armor: ArmorFactory.createDefaultArmor(),
    weapon: WeaponFactory.createWeapon('oneHandedSword' as TWeaponType, 'cuprum'),
  }),
  mutations: {
    setArmor(state, args) {
      if (args.type === 'material') {
        state.armor.changeMaterial(args.value);
      }
      if (args.type === 'type') {
        state.armor.changeType(args.value);
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
        state.dummy.person.hp = preventNegativeNum(
          // @ts-ignore
          hp - calculateDamage(weaponCharacteristics, armorCharacteristics),
        );
        // recalculate
        state.weapon.calculateWeaponCharacteristics();
      }
    },
  },
  getters: {
    armorCharacteristics: state =>
      characteristicsOptions
        .map(
          ({ value, text }) =>
            `${text} ${state.armor?.armorCharacteristics?.[value as keyof TDamageType]}`,
        )
        .join(', '),
    weaponCharacteristics: state =>
      characteristicsOptions
        .map(
          ({ value, text }) =>
            // тут другой тип
            `${text} ${state.weapon.weaponCharacteristics?.[value as keyof TDamageType]}`,
        )
        .join(', '),
  },
});

export default store;
