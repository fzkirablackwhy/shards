import { Person } from '@/database/Person/Person';
import { ArmorFactory } from '@/database/main';
import { Module } from 'vuex';
import { mapArmorCharacteristics } from '@/utils/mappers';
import { getMaterialsByType } from '@/database/utils/getMaterialsByType';

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
    setArmor(state, type) {
      state.person.armor = ArmorFactory.createArmor(type);
    },
    setArmorMaterial(state, material) {
      if (state.person.armor) {
        state.person.armor.changeMaterial(material);
      }
    },
    resetHp(state) {
      state.person.hp = 100;
    },
  },
  getters: {
    hp: state => state.person.hp,
    hasArmor: state => Boolean(state.person.armor),
    characteristics: state => mapArmorCharacteristics(state.person.armorCharacteristics),
    armorMaterials: state =>
      state.person?.armor?.type && getMaterialsByType(state.person?.armor?.type),
  },
};
