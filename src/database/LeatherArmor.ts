import { Armor } from './Armor';
import { CharacteristicsSum } from './CharacteristicsSum';

export class LeatherArmor extends Armor<TLeatherMaterial> {
  constructor(type: TArmorType, material: TLeatherMaterial) {
    super(type, material);
    this.materials = ['cow', 'horse'];
  }
}
