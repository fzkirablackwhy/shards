export const armorOptions: { value: TArmorType; text: string }[] = [
  {
    value: 'leather',
    text: 'кожанный доспех',
  },
  {
    value: 'chain',
    text: 'кольчужный доспех',
  },
  {
    value: 'lamellar',
    text: 'ламеллярный доспех',
  },
  {
    value: 'mountainPattern',
    text: 'панцирная броня',
  },
];

export const armorCharacteristicsOptions = [
  { value: 'сuttingDamage', text: 'cопротивление режущему урону' },
  { value: 'trustDamage', text: 'cопротивление колющему урону' },
  { value: 'choppingDamage', text: 'cопротивление рубящему урону' },
  {
    value: 'crushingDamage',
    text: 'cопротивление дробящему урону',
  },
  {
    value: 'material',
    text: 'материал',
  },
  {
    value: 'type',
    text: 'тип',
  },
];
export const weaponCharacteristicsOptions = [
  { value: 'сuttingDamage', text: 'режущий урон' },
  { value: 'trustDamage', text: 'колющий урон' },
  { value: 'choppingDamage', text: 'рубящий урон' },
  {
    value: 'crushingDamage',
    text: 'дробящий урон',
  },
  {
    value: 'material',
    text: 'материал',
  },
  {
    value: 'type',
    text: 'тип',
  },
];

export const leatherMaterialOptions = [
  { text: 'Коровья кожа', value: 'cow' },
  { text: 'Лошадиная кожа', value: 'horse' },
  { text: 'Слоновья кожа', value: 'elephant' },
];

export const metalMaterialOptions = [
  { text: 'Медь', value: 'cuprum' },
  { text: 'Бронза', value: 'bronze' },
  { text: 'Железо', value: 'iron' },
  { text: 'Сталь', value: 'steel' },
  { text: 'Высокоуглеродистая сталь', value: 'carbon' },
];

export const weaponOptions: { value: TWeaponType; text: string }[] = [
  {
    value: 'oneHandedAxe',
    text: 'одноручный топор',
  },
  {
    value: 'twoHandedAxe',
    text: 'двуручный топор',
  },
  {
    value: 'oneHandedClub',
    text: 'одноручная дубина',
  },
  {
    value: 'twoHandedClub',
    text: 'двуручная дубина',
  },
  {
    value: 'oneHandedSpear',
    text: 'одноручное копье',
  },
  {
    value: 'twoHandedSpear',
    text: 'двуручное копье',
  },
  {
    value: 'twohandedHammer',
    text: 'двуручный молот',
  },
  {
    value: 'oneHandedSword',
    text: 'одноручный меч',
  },
  {
    value: 'twoHandedSword',
    text: 'двуручный меч',
  },
];
