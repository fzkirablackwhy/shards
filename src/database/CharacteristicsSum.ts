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
    if (!this.name) {
      throw new Error('Не задано имя типа для материала');
    }
    if (!this.materials) {
      throw new Error('Массив материалов для данного типа вещи не задан');
    }
    if (!this.materials.find(material => material === this.material)) {
      throw new Error('Невозможно вычислить характеристики для несуществующего материала');
    }
    return getCharacteristicsByMaterial(this.material, this.name);
  }
}
