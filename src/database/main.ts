/* eslint-disable no-case-declarations */
import { LeatherArmor } from './Armor/LeatherArmor';
import { Weapon } from './Weapon';
import { MetalArmor } from './Armor/MetalArmor';
import { LamellarArmor } from './Armor/LamellarArmor';
import { getDefaultMaterial } from './utils/utils';

export class ArmorFactory {
  static createDefaultArmor() {
    return new LeatherArmor('leather', 'cow');
  }
  static createArmor<T extends TArmorType, M extends ArmorMaterialByType<T>>(type: T, m?: M) {
    let material = m;
    if (!material) {
      material = getDefaultMaterial(type) as M;
    }
    console.log(material, 'material');
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
