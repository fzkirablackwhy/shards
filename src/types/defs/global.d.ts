export declare global {
  type DamageTypeKeys = 'trustDamage' | 'сuttingDamage' | 'choppingDamage' | 'crushingDamage';

  type TDamageType = { [key in DamageTypeKeys]?: number };

  type TCharacteristicsSum = {
    type?: string;
  } & TDamageType &
    TMaterialCharacteristics;

  type TMaterialCharacteristics = {
    material?: string;
  };

  type TArmorType = 'leather' | 'chain' | 'lamellar' | 'mountainPattern';

  type TLeatherMaterial = 'cow' | 'horse' | 'elephant';
  type TMetalMaterial = 'cuprum' | 'bronze' | 'iron' | 'steel' | 'carbon';

  type MaterialByType<T> = T extends 'leather'
    ? TLeatherMaterial
    : T extends 'chain'
    ? TMetalMaterial
    : never;
}
