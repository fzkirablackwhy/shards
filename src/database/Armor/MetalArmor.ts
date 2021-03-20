import { Armor } from './Armor';

export class MetalArmor extends Armor<TMetalMaterial> {
  constructor(type: TArmorType, material: TMetalMaterial) {
    // this approach maybe removed
    const materials = ['cuprum', 'bronze', 'iron', 'steel', 'carbon'];
    super({ type, material, materials });
  }
}
