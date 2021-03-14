import { getCharacteristicsByMaterial, getArmorCharacteristics } from './utils/utils';

class CharacteristicsSum {
  constructor(type, material) {
    this.type = type;
    this.material = material;
  }
  // вынести отдельно
  get armorCharacteristics() {
    return {
      ...getArmorCharacteristics(this.type, this.materialCharacteristics),
      type: this.type,
      material: this.material,
    };
  }
  get materialCharacteristics() {
    if (this.materials.find(material => material === this.material)) {
      return getCharacteristicsByMaterial(this.material);
    }
    throw new Error('Невозможно вычислить характеристики для несуществующего материала');
  }
}

export class ArmorFactory {
  static createArmor(type, material) {
    if (!type) {
      throw new Error('Тип данной брони еще не существует!');
    }
    switch (type) {
      case 'leather':
        return new LeatherArmor(type, material);
      default:
        return new MetalArmor(type, material);
    }
  }
}
class MetalArmor extends CharacteristicsSum {
  constructor(type, material) {
    super(type, material);
    this.materials = ['cuprum', 'bronze', 'iron', 'steel', 'carbon'];
  }

  describe() {
    console.log(this.armorCharacteristic);
  }
}

class LeatherArmor extends CharacteristicsSum {
  constructor(type, material) {
    super(type, material);
    this.materials = ['cow', 'horse'];
  }
}

// class Developer {
//   askQuestions() {
//     console.log('Asking about design patterns!');
//   }
// }

// class CommunityExecutive {
//   askQuestions() {
//     console.log('Asking about community building');
//   }
// }
