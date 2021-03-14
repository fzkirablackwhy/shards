import { getCharacteristicsByMaterial } from './utils/utils';

export class CharacteristicsSum<T, M extends TLeatherMaterial | TMetalMaterial>
  implements TCharacteristicsSum<T, M> {
  type: T;
  name?: string;
  material: M;
  materials: string[];

  constructor(type: T, material: M) {
    this.type = type;
    this.material = material;
    this.materials = [];
  }

  get materialCharacteristics() {
    if (this.materials.find(material => material === this.material) && this.name) {
      return getCharacteristicsByMaterial(this.material, this.name);
    }
    throw new Error('Невозможно вычислить характеристики для несуществующего материала');
  }
}
