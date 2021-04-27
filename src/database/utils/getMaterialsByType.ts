import { leatherMaterialOptions, metalMaterialOptions } from '@/components/options';

export const getMaterialsByType = (type: TArmorType | TWeaponType) => {
  switch (type) {
    case 'leather':
      return leatherMaterialOptions;
    case 'lamellar':
      return [...leatherMaterialOptions, ...metalMaterialOptions];
    default:
      return metalMaterialOptions;
  }
};
