/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable no-return-assign */
type TT = {
  hitChance: number;
  damage?: number;
  percentOfDamage?: number;
  hasEffect: boolean;
  actionKey: string;
};
const actions = () => {
  const firstSkill = new Map<TWeaponType, TT>([
    [
      'twohandedHammer',
      {
        hitChance: 30,
        damage: 100,
        hasEffect: true,
        actionKey: 'hitInHead',
      },
    ],
    [
      'oneHandedClub',
      {
        hitChance: 35,
        damage: 20,
        hasEffect: true,
        actionKey: 'hitInHead',
      },
    ],
    [
      'twoHandedClub',
      {
        hitChance: 30,
        damage: 70,
        hasEffect: true,
        actionKey: 'hitInHead',
      },
    ],
    [
      'oneHandedAxe',
      {
        hitChance: 80,
        percentOfDamage: 30,
        hasEffect: true,
        actionKey: 'hitOnArmor',
      },
    ],
  ]);

  const defaults = new Map<any, any>([
    [
      'hitInHead',
      {
        // hasEffect:
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
        hitChance: null,
        damage: null,
        effect: {
          effectChance: 30,
          value: 'stunning',
          text: 'снижение всех показателей брони',
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

  const test = firstSkill.get('twohandedHammer');
  const test2 = defaults.get(test?.actionKey);

  const res = {};
  const defaultsFounded = defaults.get(test?.actionKey);
  if (defaultsFounded) {
    Object.keys(defaultsFounded).forEach(key => {
      if (test?.hasEffect && key === 'effect') {
        console.log('Эффест есть');
      }
      // @ts-ignore
      if (test[key]) {
        // @ts-ignore
        console.log(test[key]);
        // @ts-ignore
        res[key] = test[key];
      } else {
        // @ts-ignore
        res[key] = defaultsFounded[key];
      }
    });
    console.log(res);
  }
  console.log(test, test2);
};
actions();
export const WEAPON_CHARACTERISTICS: {
  [key in TWeaponType]: { [key in keyof TDamageType]?: { from: number; to: number } };
} = {
  twohandedHammer: {
    crushingDamage: {
      from: 13,
      to: 20,
    },
    // actions: [
    //   {
    //     key: "hitInHead",
    //   }
    // ],
  },
  twoHandedSpear: {
    сuttingDamage: {
      from: 12,
      to: 18,
    },
  },
  oneHandedSpear: {
    сuttingDamage: {
      from: 4,
      to: 7,
    },
  },
  oneHandedSword: {
    // один или другой
    сuttingDamage: {
      from: 6,
      to: 7,
    },
    trustDamage: {
      from: 4,
      to: 5,
    },
  },
  twoHandedSword: {
    // оба
    сuttingDamage: {
      from: 10,
      to: 15,
    },
    choppingDamage: {
      from: 3,
      to: 5,
    },
  },
  oneHandedAxe: {
    // один или другой
    choppingDamage: {
      from: 6,
      to: 8,
    },
  },
  twoHandedAxe: {
    // оба
    сuttingDamage: {
      from: 3,
      to: 5,
    },
    choppingDamage: {
      from: 6,
      to: 10,
    },
  },
  oneHandedClub: {
    crushingDamage: {
      from: 4,
      to: 6,
    },
  },
  twoHandedClub: {
    crushingDamage: {
      from: 11,
      to: 19,
    },
  },
};
