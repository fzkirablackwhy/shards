import { ArmorFactory } from '../main';
// FIXME: вынести отдельный тип
const armorType = ArmorFactory.createArmor('chain', 'bronze');
export class Person {
  hp: number;
  weapon?: string;
  armor?: typeof armorType;
  constructor(hp: number) {
    this.hp = hp;
  }
  addWeapon(weapon: any) {
    this.weapon = weapon;
    return this;
  }

  addArmor(armor: any) {
    this.armor = armor;
    return this;
  }
}
