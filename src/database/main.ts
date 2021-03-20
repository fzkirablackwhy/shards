import { LeatherArmor } from './Armor/LeatherArmor';
import { Weapon } from './Weapon';
import { MetalArmor } from './Armor/MetalArmor';
import { LamellarArmor } from './Armor/LamellarArmor';

export class ArmorFactory {
  static createDefaultArmor() {
    return new LeatherArmor('leather', 'cow');
  }
  static createArmor<T extends TArmorType, M extends ArmorMaterialByType<T>>(type: T, material: M) {
    if (!type) {
      throw new Error('Тип данной брони еще не существует!');
    }

    switch (type) {
      case 'leather':
        return new LeatherArmor(type, material as TLeatherMaterial);
      case 'lamellar':
        return new LamellarArmor(type, material);
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
