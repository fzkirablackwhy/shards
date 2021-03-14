import { CharacteristicsSum } from './CharacteristicsSum';
import { getWeaponCharacteristics } from './utils/utils';

export class Weapon<T extends TWeaponType> extends CharacteristicsSum<T, TMetalMaterial> {
  constructor(type: T, material: TMetalMaterial) {
    super(type, material);
    this.materials = ['cuprum', 'bronze', 'iron', 'steel', 'carbon'];
    this.name = 'weapon';
  }

  get weaponCharacteristics() {
    return {
      ...getWeaponCharacteristics(this.type, this.materialCharacteristics),
      type: this.type,
      material: this.material,
    };
  }
}
