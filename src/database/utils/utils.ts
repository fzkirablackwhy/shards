/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { ARMOR_CHARACTERISTICS } from '../constants/armor';
import {
  LEATHER_MATERIALS_CHARACTERISTICS,
  METAL_MATERIALS_CHARACTERISTICS,
} from '../constants/materials';
import { WEAPON_CHARACTERISTICS } from '../constants/weapon';
import { getRandomValue, percentageOfNum, preventNegativeNum } from './heplpers';

const damageTypeKeys: DamageTypeKeys[] = [
  'trustDamage',
  'сuttingDamage',
  'choppingDamage',
  'crushingDamage',
];

export const getCharacteristicsByMaterial = <M extends TLeatherMaterial | TMetalMaterial>(
  material: M,
  name: string,
) => {
  const effect = name === 'armor' ? 'armorEffect' : 'weaponEffect';
  if (material in LEATHER_MATERIALS_CHARACTERISTICS) {
    // материал из кожи аффектит только броню
    return LEATHER_MATERIALS_CHARACTERISTICS[material as TLeatherMaterial].armorEffect;
  }
  return METAL_MATERIALS_CHARACTERISTICS[material as TMetalMaterial][effect];
};

export const getArmorCharacteristics = (type: TArmorType, materialStats: TDamageType) => {
  return damageTypeKeys.reduce((accumulator, key) => {
    const value = ARMOR_CHARACTERISTICS[type][key] + Number(materialStats[key] ?? 0);
    return {
      [key]: preventNegativeNum(value),
      ...accumulator,
    };
  }, {}) as Required<TDamageType>;
};

export const getWeaponCharacteristics = (type: TWeaponType, materialStats: TDamageType) => {
  if (!WEAPON_CHARACTERISTICS[type]) {
    throw new Error('Досвидос');
  }
  return damageTypeKeys.reduce<TDamageType>((accumulator, key) => {
    let value = 0;
    if (key in WEAPON_CHARACTERISTICS[type]) {
      const weaponCharacteristics = WEAPON_CHARACTERISTICS[type][key];

      const randomDamage = getRandomValue(
        weaponCharacteristics?.from ?? 0,
        weaponCharacteristics?.to ?? 0,
      );

      value = Math.round(
        randomDamage + percentageOfNum(randomDamage, Number(materialStats[key] ?? 0)),
      );
    }

    return {
      [key]: preventNegativeNum(value),
      ...accumulator,
    };
  }, {}) as Required<TDamageType>;
};

export const calculateDamage = (weapon: TDamageType, dummyArmor: TDamageType) => {
  let damage = 0;
  damageTypeKeys.forEach(key => {
    const weaponDamage = weapon[key];
    const dammyArmorResistance = dummyArmor[key];

    if (weaponDamage) {
      if (dammyArmorResistance) {
        damage = weaponDamage - percentageOfNum(weaponDamage, dammyArmorResistance);
      } else {
        damage = weaponDamage;
      }
    }
  });
  return preventNegativeNum(damage);
};

export const getInitialCharacteristics = () =>
  damageTypeKeys.reduce<TDamageType>(
    (acc, key) => ({
      [key]: 0,
      ...acc,
    }),
    {},
  );
