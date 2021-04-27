import { Armor } from './Armor';

export class LamellarArmor extends Armor<TAllMaterials> {
  constructor(type: TArmorType, material: TAllMaterials) {
    const materials = ['cow', 'horse', 'elephant', 'cuprum', 'bronze', 'iron', 'steel', 'carbon'];
    super({ type, material, materials });
  }
}
