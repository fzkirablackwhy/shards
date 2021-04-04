export const WEAPON_CHARACTERISTICS: {
  [key in TWeaponType]: { [key in keyof TDamageType]?: { from: number; to: number } };
} = {
  twohandedHammer: {
    crushingDamage: {
      from: 13,
      to: 20,
    },
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
    stabbingDamage: {
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
