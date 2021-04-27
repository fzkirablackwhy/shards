/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { createStore } from 'vuex';
import { DummyState, dummy } from '@/store/modules/dummy';
import { calculateDamage, getHitChance } from '@/database/utils/utils';
import { preventNegativeNum } from '@/database/utils/heplpers';
import { ArmorFactory, WeaponFactory } from '@/database/main';
import { mapArmorCharacteristics, mapWeaponCharacteristics } from '@/utils/mappers';
import { getMaterialsByType } from '@/database/utils/getMaterialsByType';

export type State = {
  dummy?: DummyState;
  armor: TArmor<TArmorType, TAllMaterials>;
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
    setArmor(state, type) {
      state.armor = ArmorFactory.createArmor(type);

      console.log(state.armor.material);
    },
    setArmorMaterial(state, material) {
      state.armor = state.armor.changeMaterial(material);
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
      // FIXME: Вынести в отдельный метод?
      if (state.weapon.weaponCharacteristics && state.dummy?.person) {
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
    weaponActions: state => state.weapon.actions,
    armorMaterials: state => getMaterialsByType(state.armor.type),
  },
});

export default store;
