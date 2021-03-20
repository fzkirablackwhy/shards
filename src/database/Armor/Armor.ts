import { CharacteristicsSum } from '../CharacteristicsSum';
import { getArmorCharacteristics } from '../utils/utils';

export class Armor<M extends TLeatherMaterial | TMetalMaterial> extends CharacteristicsSum<
  TArmorType,
  M
> {
  name: string;
  constructor(type: TArmorType, material: M) {
    super(type, material);
    this.name = 'armor';
  }
  get armorCharacteristics() {
    return {
      ...getArmorCharacteristics(this.type, this.materialCharacteristics),
      type: this.type,
      material: this.material,
    };
  }

  describe() {
    console.log(this.type, this.material);
  }
}
