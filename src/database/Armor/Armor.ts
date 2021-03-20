import { CharacteristicsSum } from '../CharacteristicsSum';
import { getArmorCharacteristics } from '../utils/utils';

export class Armor<M extends TLeatherMaterial | TMetalMaterial> extends CharacteristicsSum<
  TArmorType,
  M
> {
  armorCharacteristics?: TArmorCharacteristics<TArmorType, M>;
  constructor({
    type,
    material,
    materials,
  }: {
    type: TArmorType;
    material: M;
    materials: string[];
  }) {
    super(type, material);
    this.name = 'armor';
    this.materials = materials;
    this.calculateArmorCharacteristics();
  }

  calculateArmorCharacteristics() {
    this.armorCharacteristics = {
      ...getArmorCharacteristics(this.type, this.materialCharacteristics),
      type: this.type,
      material: this.material,
    };
    return this;
  }
  changeMaterial(material: M) {
    this.material = material;
    this.calculateArmorCharacteristics();

    return this;
  }

  changeType(type: TArmorType) {
    this.type = type;
    this.calculateArmorCharacteristics();
    return this;
  }

  describe() {
    console.log(this.type, this.material);
  }
}
