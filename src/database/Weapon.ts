import { CharacteristicsSum } from './CharacteristicsSum';
import { getActionsByWeaponType } from './utils/getActionsByWeaponType';
import { getWeaponCharacteristics as getWeaponCharacteristicsUtil } from './utils/utils';

export class Weapon<T extends TWeaponType> extends CharacteristicsSum<T, TMetalMaterial> {
  weaponCharacteristics: TWeaponCharacteristics<T, TMetalMaterial> | null;
  actions: TActionTemplate[] | null;
  constructor(type: T, material: TMetalMaterial) {
    super(type, material);
    this.actions = null;
    this.weaponCharacteristics = null;
    this.materials = ['cuprum', 'bronze', 'iron', 'steel', 'carbon'];
    this.name = 'weapon';
    this.calculateWeaponCharacteristics();
    this.setActions();
  }

  setActions() {
    this.actions = getActionsByWeaponType(this.type);
  }

  changeMaterial(material: TMetalMaterial) {
    this.material = material;
    this.calculateWeaponCharacteristics();
    return this;
  }

  changeType(type: T) {
    this.type = type;
    this.calculateWeaponCharacteristics();
    this.setActions();
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
