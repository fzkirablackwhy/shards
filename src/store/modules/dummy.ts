import { Person } from '@/database/Person/Person';
import { Module } from 'vuex';

// FIXME: вынести отдельный тип
const person = new Person(100);
export type DummyState = {
  armor: TArmor<TArmorType, TMetalMaterial | TLeatherMaterial> | null;
  person: typeof person;
};
export const dummy: Module<DummyState, {}> = {
  namespaced: true,
  state: () => ({
    armor: null,
    person: new Person(100),
  }),
  mutations: {
    setArmor(state, armorProps) {
      state.armor = armorProps;
      state.person = person.addArmor(armorProps);
      // state.person.hp = 0;
    },
  },
  getters: {
    hp(state) {
      return state.person.hp.toFixed(2);
    },
    personStats(state) {
      console.log('1');
      person.addArmor(state.armor);
      return person;
    },
  },
};
