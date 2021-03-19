import { CharacteristicsSum } from './CharacteristicsSum';
import { getWeaponCharacteristics as getWeaponCharacteristicsUtil } from './utils/utils';

// type A = ReturnType<typeof Weapon>;
export class Weapon<T extends TWeaponType> extends CharacteristicsSum<T, TMetalMaterial> {
  weaponCharacteristics: any;
  constructor(type: T, material: TMetalMaterial) {
    super(type, material);
    this.materials = ['cuprum', 'bronze', 'iron', 'steel', 'carbon'];
    this.name = 'weapon';
  }

  getWeaponCharacteristics() {
    const characteristics = {
      ...getWeaponCharacteristicsUtil(this.type, this.materialCharacteristics),
      type: this.type,
      material: this.material,
    };

    this.weaponCharacteristics = characteristics;
    return characteristics;
  }
}
