import { Armor } from './Armor';

export class LamellarArmor extends Armor<TLeatherMaterial | TMetalMaterial> {
  constructor(type: TArmorType, material: TLeatherMaterial | TMetalMaterial) {
    const materials = ['cow', 'horse', 'elephant', 'cuprum', 'bronze', 'iron', 'steel', 'carbon'];
    super({ type, material, materials });
  }
}
