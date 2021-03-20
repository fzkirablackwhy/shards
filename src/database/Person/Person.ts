import { getInitialCharacteristics } from '../utils/utils';

export class Person {
  hp: number;
  armorCharacteristics: TDamageType;
  weapon?: string;
  armor?: TArmor<TArmorType, TMetalMaterial | TLeatherMaterial> | null;
  constructor(hp: number) {
    this.hp = hp;
    this.armorCharacteristics = getInitialCharacteristics();
  }
  addWeapon(weapon: any) {
    this.weapon = weapon;
    return this;
  }

  removeArmor() {
    this.armor = null;
    this.armorCharacteristics = getInitialCharacteristics();
  }

  addArmor(armor: TArmor<TArmorType, TMetalMaterial | TLeatherMaterial>) {
    this.armor = armor;
    // update person stats
    if (this.armor?.armorCharacteristics) {
      this.armorCharacteristics = this.armor.armorCharacteristics;
    }

    return this;
  }
}
