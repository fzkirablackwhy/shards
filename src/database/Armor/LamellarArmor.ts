import { Armor } from './Armor';

export class LamellarArmor extends Armor<TLeatherMaterial | TMetalMaterial> {
  constructor(type: TArmorType, material: TLeatherMaterial | TMetalMaterial) {
    super(type, material);
    this.materials = ['cow', 'horse', 'cuprum', 'bronze', 'iron', 'steel', 'carbon'];
  }
}
