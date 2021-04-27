export declare global {
  type DamageTypeKeys = 'stabbingDamage' | 'сuttingDamage' | 'choppingDamage' | 'crushingDamage';
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

  type TAllMaterials = TLeatherMaterial | TMetalMaterial;

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

  type TArmorCharacteristics<T, M> = TDamageType & {
    type?: T;
    material?: M;
  };

  type TArmor<T, M> = {
    changeType: (type: T) => TArmor<T, M>;
    changeMaterial: (material: any) => TArmor<T, M>;
    armorCharacteristics?: TArmorCharacteristics<T, M>;
    calculateArmorCharacteristics: () => TArmor<T, M>;
  } & TCharacteristicsSum<T, M>;

  type TWeaponCharacteristics<T, M> = TDamageType & {
    type: T;
    material: M;
  };
  type TWeapon<T, M> = {
    actions: TActionTemplate[] | null;
    changeType: (type: T) => TWeapon<T, M>;
    changeMaterial: (material: M) => TWeapon<T, M>;
    weaponCharacteristics: TWeaponCharacteristics<T, M> | null;
    calculateWeaponCharacteristics: () => TWeapon<T, M>;
  } & TCharacteristicsSum<T, M>;

  type TActionTemplateKey =
    | 'hitInHead'
    | 'hitOnArmor'
    | 'stabbing'
    | 'deathFromAbove'
    | 'powerfulBlow';

  type TActionTemplate = {
    key: TActionTemplateKey;
    text: string;
    hitChance: number | null;
    damage: number | null;
    percentOfDamage?: number | null;
    possibleDeath?: boolean | null;
    effectChance?: number | null;
    effect?: {
      value: string;
      text: string;
    };
  };

  type ActionType = {
    hitChance?: number;
    // объединить в один тип?
    damage?: number;
    percentOfDamage?: number;
    possibleDeath?: boolean;
    hasEffect: boolean;
    actionKey: TActionTemplateKey;
    effectChance?: number;
  };
}
