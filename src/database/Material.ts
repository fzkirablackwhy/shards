import { DamageType } from './DamageType';
import { getCharacteristicsByMaterial } from './utils/utils';

export class Material extends DamageType {
  material: string;

  constructor(material: TLeatherMaterial | TMetalMaterial) {
    super(getCharacteristicsByMaterial(material));
    this.material = material;
  }
}
