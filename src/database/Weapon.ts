import { CharacteristicsSum } from './CharacteristicsSum';
import { getWeaponCharacteristics as getWeaponCharacteristicsUtil } from './utils/utils';

export class Weapon<T extends TWeaponType> extends CharacteristicsSum<T, TMetalMaterial> {
  constructor(type: T, material: TMetalMaterial) {
    super(type, material);
    this.materials = ['cuprum', 'bronze', 'iron', 'steel', 'carbon'];
    this.name = 'weapon';
  }

  getWeaponCharacteristics() {
    console.log(getWeaponCharacteristicsUtil(this.type, this.materialCharacteristics));
    return {
      ...getWeaponCharacteristicsUtil(this.type, this.materialCharacteristics),
      type: this.type,
      material: this.material,
    };
  }
}
