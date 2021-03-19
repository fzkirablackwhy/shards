export declare global {
  type DamageTypeKeys = 'trustDamage' | 'сuttingDamage' | 'choppingDamage' | 'crushingDamage';

  type TDamageType = { [key in DamageTypeKeys]?: number };

  type TCharacteristicsSum<T, M> = {
    type: T;
    material: M;
    name?: string;
    materialCharacteristics: TDamageType;
    materials?: string[];
  };

  type TArmorType = 'leather' | 'chain' | 'lamellar' | 'mountainPattern';

  type TLeatherMaterial = 'cow' | 'horse' | 'elephant';
  type TMetalMaterial = 'cuprum' | 'bronze' | 'iron' | 'steel' | 'carbon';

  type TWeaponType =
    | 'twohandedHammer'
    | 'twoHandedSpear'
    | 'oneHandedSpear'
    | 'oneHandedSword'
    | 'twoHandedSword'
    | 'oneHandedAxe'
    | 'twoHandedAxe'
    | 'oneHandedClub'
    | 'twoHandedClub';

  type ArmorMaterialByType<T> = T extends 'leather' ? TLeatherMaterial : TMetalMaterial;

  type TArmor<T, M> = {
    armorCharacteristics: TDamageType & {
      type: TArmorType;
      material: M;
    };
  } & TCharacteristicsSum<T, M>;

  type TWeapon<T, M> = {
    weaponCharacteristics: TDamageType & {
      type: TArmorType;
      material: M;
    };
    getWeaponCharacteristics: () => TDamageType & {
      type: TArmorType;
      material: M;
    };
  } & TCharacteristicsSum<T, M>;
}
