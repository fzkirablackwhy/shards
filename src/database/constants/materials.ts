type TMetalMaterialCharacteristics = {
  [key in TMetalMaterial]: {
    armorEffect: TDamageType;
    weaponEffect: TDamageType;
  };
};
export const METAL_MATERIALS_CHARACTERISTICS: TMetalMaterialCharacteristics = {
  cuprum: {
    armorEffect: {
      choppingDamage: -5,
      crushingDamage: -5,
    },
    weaponEffect: {
      сuttingDamage: 3,
      crushingDamage: -10,
    },
  },
  bronze: {
    armorEffect: {
      choppingDamage: -4,
      crushingDamage: -4,
    },
    weaponEffect: {
      сuttingDamage: 5,
      crushingDamage: -7,
    },
  },
  iron: {
    armorEffect: {
      stabbingDamage: 5,
      сuttingDamage: 5,
    },
    weaponEffect: {
      stabbingDamage: 5,
      сuttingDamage: 5,
      choppingDamage: 5,
      crushingDamage: 5,
    },
  },
  steel: {
    armorEffect: {
      stabbingDamage: 7,
      сuttingDamage: 7,
    },
    weaponEffect: {
      stabbingDamage: 7,
      сuttingDamage: 7,
      choppingDamage: 7,
      crushingDamage: 7,
    },
  },
  carbon: {
    armorEffect: {
      stabbingDamage: 10,
      сuttingDamage: 15,
      choppingDamage: 5,
      crushingDamage: 5,
    },
    weaponEffect: {
      stabbingDamage: 10,
      сuttingDamage: 10,
      choppingDamage: 10,
      crushingDamage: 10,
    },
  },
};
export const LEATHER_MATERIALS_CHARACTERISTICS = {
  cow: {
    armorEffect: {
      сuttingDamage: 5,
      stabbingDamage: -10,
      crushingDamage: -5,
    },
  },
  horse: {
    armorEffect: {
      сuttingDamage: 7,
      choppingDamage: 3,
      stabbingDamage: -5,
      crushingDamage: -5,
    },
  },
  elephant: {
    armorEffect: {
      сuttingDamage: 10,
      stabbingDamage: 3,
      choppingDamage: 5,
    },
  },
} as {
  // вынести
  [key in TLeatherMaterial]: {
    armorEffect: TDamageType;
  };
};
