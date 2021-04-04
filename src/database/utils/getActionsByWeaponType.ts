import { fillActionValuesByTemplate } from './fillActionValuesByTemplate';

const actionValuesMap = new Map<TWeaponType, ActionType[]>([
  [
    'twohandedHammer',
    [
      {
        hitChance: 30,
        damage: 100,
        hasEffect: true,
        actionKey: 'hitInHead',
      },
      {
        hasEffect: true,
        actionKey: 'powerfulBlow',
      },
    ],
  ],
  [
    'twoHandedSpear',
    [
      {
        hitChance: 20,
        possibleDeath: true,
        hasEffect: false,
        actionKey: 'hitInHead',
      },
      {
        percentOfDamage: 50,
        hasEffect: true,
        actionKey: 'hitOnArmor',
      },
    ],
  ],
  [
    'oneHandedSword',
    [
      {
        hitChance: 50,
        damage: 20,
        // FIXME: обязательное поле или нет?
        hasEffect: false,
        actionKey: 'hitInHead',
      },
    ],
  ],
  [
    'twoHandedSword',
    [
      {
        hasEffect: true,
        actionKey: 'deathFromAbove',
      },
    ],
  ],
  [
    'oneHandedAxe',
    [
      {
        percentOfDamage: 30,
        hasEffect: true,
        actionKey: 'hitOnArmor',
      },
    ],
  ],
  [
    'twoHandedAxe',
    [
      {
        percentOfDamage: 50,
        hasEffect: true,
        actionKey: 'hitOnArmor',
      },
      {
        hasEffect: true,
        actionKey: 'deathFromAbove',
      },
    ],
  ],
  [
    'oneHandedSpear',
    [
      {
        percentOfDamage: 30,
        hasEffect: true,
        actionKey: 'hitOnArmor',
      },
      {
        hitChance: 20,
        damage: 50,
        hasEffect: false,
        actionKey: 'hitInHead',
      },
    ],
  ],
  [
    'oneHandedClub',
    [
      {
        hitChance: 35,
        damage: 20,
        hasEffect: true,
        actionKey: 'hitInHead',
      },
    ],
  ],
  [
    'twoHandedClub',
    [
      {
        hitChance: 30,
        damage: 70,
        hasEffect: true,
        actionKey: 'hitInHead',
      },
      {
        hasEffect: true,
        actionKey: 'powerfulBlow',
      },
    ],
  ],
]);

export const getActionsByWeaponType = (weaponType: TWeaponType): TActionTemplate[] | null => {
  const actions = actionValuesMap.get(weaponType);

  if (actions) {
    return actions.map(({ actionKey, ...actionValues }) => {
      if (actionValues && actionKey) {
        return fillActionValuesByTemplate(actionKey, actionValues);
      }
      throw new Error('Ключ или значения навыка для данного типа оружия не заданы');
    });
  }

  throw new Error('Произошла ошибка в поиске навыка для данного типа оружия');
};
