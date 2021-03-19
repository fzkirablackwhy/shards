import { Armor } from './Armor';

export class MetalArmor extends Armor<TMetalMaterial> {
  constructor(type: TArmorType, material: TMetalMaterial) {
    super(type, material);
    this.materials = ['cuprum', 'bronze', 'iron', 'steel', 'carbon'];
  }
}
