import { ARMOR_CHARACTERISTICS } from '../constants/armor';
import {
  LEATHER_MATERIALS_CHARACTERISTICS,
  METAL_MATERIALS_CHARACTERISTICS,
} from '../constants/materials';
import { WEAPON_CHARACTERISTICS } from '../constants/weapon';

const damageTypeKeys = ['trustDamage', 'сuttingDamage', 'choppingDamage', 'crushingDamage'];
const getRandomValue = (min: number, max: number) =>
  Math.floor(min + Math.random() * (max + 1 - min));

const isNegativeNum = (num: number) => num < 0;

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
  // вынести ключи отдельно
  return damageTypeKeys.reduce((accumulator, key) => {
    const value =
      ARMOR_CHARACTERISTICS[type][key as DamageTypeKeys] +
      Number(materialStats[key as DamageTypeKeys] ?? 0);
    return {
      [key]: isNegativeNum(value) ? 0 : value,
      ...accumulator,
    };
  }, {}) as Required<TDamageType>;
};

export const getWeaponCharacteristics = (type: TWeaponType, materialStats: TDamageType) => {
  if (!WEAPON_CHARACTERISTICS[type]) {
    throw new Error('Досвидос');
  }
  return damageTypeKeys.reduce((accumulator, key) => {
    let value = 0;
    if (key in WEAPON_CHARACTERISTICS[type]) {
      const weaponCharacteristics = WEAPON_CHARACTERISTICS[type][key as DamageTypeKeys];

      const randomDamage = getRandomValue(
        weaponCharacteristics?.from ?? 0,
        weaponCharacteristics?.to ?? 0,
      );

      value = randomDamage + Number(materialStats[key as DamageTypeKeys] ?? 0);
    }

    return {
      [key]: isNegativeNum(value) ? 0 : value,
      ...accumulator,
    };
  }, {}) as Required<TDamageType>;
};
