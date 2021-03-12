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

export const characteristicsOptions = [
  { value: 'сuttingDamage', text: 'режущий урон' },
  { value: 'trustDamage', text: 'колющий урон' },
  { value: 'choppingDamage', text: 'рубящий урон' },
  {
    value: 'choppingDamage',
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

export const matelMaterialOptions = [
  { text: 'Медь', value: 'cuprum' },
  { text: 'Бронза', value: 'bronze' },
  { text: 'Железо', value: 'iron' },
  { text: 'Сталь', value: 'steel' },
  { text: 'Высокоуглеродистая сталь', value: 'carbon' },
];
