import { LeatherArmor } from './LeatherArmor';
import { Weapon } from './Weapon';
import { MetalArmor } from './MetalArmor';

export class ArmorFactory {
  static createArmor<T extends TArmorType, M extends ArmorMaterialByType<T>>(type: T, material: M) {
    if (!type) {
      throw new Error('Тип данной брони еще не существует!');
    }

    switch (type) {
      case 'leather':
        return new LeatherArmor(type, material as TLeatherMaterial);
      default:
        return new MetalArmor(type, material as TMetalMaterial);
    }
  }
}

export class WeaponFactory {
  static createWeapon<T extends TWeaponType, U extends TMetalMaterial>(type: T, material: U) {
    if (!type) {
      throw new Error('Вид данного оружия не существует!');
    }
    // two-handed/one-handed
    switch (type) {
      default:
        return new Weapon<T>(type, material);
    }
  }
}
