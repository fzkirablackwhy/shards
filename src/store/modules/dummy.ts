import { Person } from '@/database/Person/Person';
import { ArmorFactory } from '@/database/main';
import { Module } from 'vuex';
import { mapArmorCharacteristics } from '@/utils/mappers';

// FIXME: вынести отдельный тип
const person = new Person(100);
export type DummyState = {
  person: typeof person;
};
export const dummy: Module<DummyState, {}> = {
  namespaced: true,
  state: () => ({
    person: new Person(100),
  }),
  mutations: {
    wearArmor(state) {
      const armor = ArmorFactory.createDefaultArmor();
      state.person.addArmor(armor);
    },
    takeOffArmor(state) {
      state.person.removeArmor();
    },
    setArmor(state, args) {
      if (state.person.armor) {
        if (args.type === 'material') {
          const armor = ArmorFactory.createArmor(state.person.armor.type, args.value);
          state.person.addArmor(armor);
        }
        if (args.type === 'type') {
          const armor = ArmorFactory.createArmor(args.value, state.person.armor.material);
          state.person.addArmor(armor);
        }
      }
    },
    resetHp(state) {
      state.person.hp = 100;
    },
  },
  getters: {
    hp: state => state.person.hp.toFixed(2),
    hasArmor: state => Boolean(state.person.armor),
    characteristics: state => mapArmorCharacteristics(state.person.armorCharacteristics),
  },
};
