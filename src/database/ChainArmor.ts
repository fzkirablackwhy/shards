import { Material } from './Material';

export class ChainArmorFactory {
  static createChainArmor(material: TMetalMaterial) {
    switch (material) {
      case 'cuprum':
        return new CuprumChain(material);
      case 'bronze':
        return new BronzeChain(material);
      case 'carbon':
        return new CarbonChain(material);
      case 'iron':
        return new IronChain(material);
      case 'steel':
        return new SteelChain(material);
      default:
        throw new Error('Доспех из данного материала еще не существует!');
    }
  }
}

class CuprumChain extends Material {}
class BronzeChain extends Material {}
class CarbonChain extends Material {}
class IronChain extends Material {}
class SteelChain extends Material {}
