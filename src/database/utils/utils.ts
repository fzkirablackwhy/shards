import { ARMOR_CHARACTERISTICS } from '../constants/armor';
import {
  LEATHER_MATERIALS_CHARACTERISTICS,
  METAL_MATERIALS_CHARACTERISTICS,
} from '../constants/materials';

export const getCharacteristicsByMaterial = (material: TLeatherMaterial | TMetalMaterial) => {
  if (material in LEATHER_MATERIALS_CHARACTERISTICS) {
    return LEATHER_MATERIALS_CHARACTERISTICS[material as TLeatherMaterial].armorEffect;
  }
  return METAL_MATERIALS_CHARACTERISTICS[material as TMetalMaterial].armorEffect;
};

export const calculateDamage = (type: TArmorType, materialStats: TDamageType) => {
  const isNegativeNum = (num: number) => num < 0;

  return Object.keys(materialStats).reduce((accumulator, key) => {
    const value =
      ARMOR_CHARACTERISTICS[type][key as DamageTypeKeys] +
      Number(materialStats[key as DamageTypeKeys]);
    return {
      [key]: isNegativeNum(value) ? 0 : value,
      ...accumulator,
    };
  }, {}) as TCharacteristicsSum;
};
