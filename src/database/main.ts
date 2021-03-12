/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import { calculateDamage } from './utils/utils';
import { LeatherArmorFactory } from './LeatherArmor';
import { DamageType } from './DamageType';
import { ChainArmorFactory } from './ChainArmor';

export class ArmorFactory {
  static createArmor<T extends TArmorType, U extends MaterialByType<T>>(type: T, material: U) {
    if (!type) {
      throw new Error('Тип данной брони еще не существует!');
    }
    switch (type) {
      case 'leather':
        return new AbstractLeatherArmor(type, material as TLeatherMaterial);
      // case 'chain':
      //   return new AbstractMetalArmor(type, material as TMetalMaterial);
      // case 'lamellar':
      //   return new AbstractMetalArmor(type, material as TMetalMaterial);
      // case 'mountainPattern':
      //   return new AbstractMetalArmor(type, material as TMetalMaterial);
      // case 'watterWalkers':
      //   return new AbstractMetalArmor(type, material as TMetalMaterial);
      default:
        return new AbstractMetalArmor(type, material as TMetalMaterial);
    }
  }
}

class CharacteristicsSum extends DamageType implements TCharacteristicsSum {
  material: string;
  type: string;

  constructor(type: TArmorType, options: TCharacteristicsSum) {
    super(options);
    this.type = type;
    this.material = options.material ?? '';
  }

  describe() {
    console.log(
      `Привет, я ${this.type} ${this.material} броня и мои статистики -
        колющий урон ${this.trustDamage}
        режущий урон ${this.сuttingDamage}
        рубящий урон ${this.choppingDamage}
        дробящий урон ${this.crushingDamage}
        `,
    );
  }
}

class AbstractLeatherArmor extends CharacteristicsSum {
  constructor(type: TArmorType, material: TLeatherMaterial) {
    const { material: _material, ...restMaterialStats } = LeatherArmorFactory.createLeatherArmor(
      material,
    );

    super(type, {
      material,
      ...calculateDamage(type, restMaterialStats),
    });
  }
}
class AbstractMetalArmor extends CharacteristicsSum {
  constructor(type: TArmorType, material: TMetalMaterial) {
    const { material: _material, ...restMaterialStats } = ChainArmorFactory.createChainArmor(
      material,
    );
    super(type, {
      material,
      ...calculateDamage(type, restMaterialStats),
    });
  }
}
