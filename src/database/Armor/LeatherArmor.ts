import { Armor } from './Armor';

export class LeatherArmor extends Armor<TLeatherMaterial> {
  constructor(type: TArmorType, material: TLeatherMaterial) {
    super({ type, material, materials: ['cow', 'horse', 'elephant'] });
  }
}
