import { Material } from './Material';

export class LeatherArmorFactory {
  static createLeatherArmor(material: TLeatherMaterial) {
    switch (material) {
      case 'cow':
        return new CowLeather(material);
      case 'horse':
        return new HorseLeather(material);
      case 'elephant':
        return new ElephantLeather(material);
      default:
        throw new Error('Доспех из данного материала еще не существует!');
    }
  }
}

class CowLeather extends Material {}
class HorseLeather extends Material {}
class ElephantLeather extends Material {}
