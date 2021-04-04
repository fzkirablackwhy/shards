export const actionTemplatesMap = new Map<TActionTemplateKey, TActionTemplate>([
  [
    'hitInHead',
    {
      key: 'hitInHead',
      text: 'удар в голову',
      hitChance: null,
      damage: null,
      effect: {
        value: 'stunning',
        text: 'оглушение',
      },
    },
  ],
  [
    'hitOnArmor',
    {
      key: 'hitOnArmor',
      text: 'удар по броне',
      hitChance: 80,
      damage: null,
      percentOfDamage: null,
      effectChance: 30,
      effect: {
        // FIXME: нужно значение 10%/5& в зависимости от типа оружия
        value: 'decreaseArmorStats',
        text: 'снижение всех показателей брони',
      },
    },
  ],
  [
    'stabbing',
    {
      key: 'stabbing',
      text: 'колющий урон',
      hitChance: null,
      damage: null,
    },
  ],
  [
    'deathFromAbove',
    {
      key: 'deathFromAbove',
      text: 'смерть с небес',
      hitChance: 35,
      damage: 70,
      effect: {
        value: 'bleeding',
        text: 'кровотечение',
      },
    },
  ],
  [
    'powerfulBlow',
    {
      key: 'powerfulBlow',
      text: 'смерть с небес',
      hitChance: null,
      damage: null,
      percentOfDamage: 30,
      effect: {
        value: 'bleeding',
        text: 'ЧТО_ТО СТРАННОЕ',
      },
    },
  ],
  // [
  //   'oneHandedSpear',
  //   {
  //     hitChance: 20,
  //     damage: 50,
  //     hasEffect: false,
  //     actionKey: 'hitInHead',
  //   },
  // ],
]);
