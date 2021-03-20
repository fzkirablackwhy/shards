import { CharacteristicsSum } from './CharacteristicsSum';
import { getWeaponCharacteristics as getWeaponCharacteristicsUtil } from './utils/utils';

export class Weapon<T extends TWeaponType> extends CharacteristicsSum<T, TMetalMaterial> {
  weaponCharacteristics: TWeaponCharacteristics<T, TMetalMaterial> | null;
  constructor(type: T, material: TMetalMaterial) {
    super(type, material);
    this.weaponCharacteristics = null;
    this.materials = ['cuprum', 'bronze', 'iron', 'steel', 'carbon'];
    this.name = 'weapon';
    this.calculateWeaponCharacteristics();
  }

  changeMaterial(material: TMetalMaterial) {
    this.material = material;
    this.calculateWeaponCharacteristics();
    return this;
  }

  changeType(type: T) {
    this.type = type;
    this.calculateWeaponCharacteristics();
    return this;
  }

  calculateWeaponCharacteristics() {
    const characteristics = {
      ...getWeaponCharacteristicsUtil(this.type, this.materialCharacteristics),
      type: this.type,
      material: this.material,
    };

    this.weaponCharacteristics = characteristics;
    return this;
  }
}
