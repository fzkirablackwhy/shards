import { armorCharacteristicsOptions, weaponCharacteristicsOptions } from '@/components/options';

export const mapArmorCharacteristics = (
  armorCharacteristics?: TArmorCharacteristics<TArmorType, TLeatherMaterial | TMetalMaterial>,
) =>
  armorCharacteristicsOptions.map(
    ({ value, text }) =>
      `${text} ${
        armorCharacteristics?.[
          value as keyof TArmorCharacteristics<TArmorType, TMetalMaterial | TLeatherMaterial>
        ]
      }`,
  );

export const mapWeaponCharacteristics = (
  weaponCharacteristics: TWeaponCharacteristics<TWeaponType, TMetalMaterial> | null,
) =>
  weaponCharacteristicsOptions.map(
    ({ value, text }) =>
      `${text} ${
        weaponCharacteristics?.[value as keyof TWeaponCharacteristics<TWeaponType, TMetalMaterial>]
      }`,
  );
