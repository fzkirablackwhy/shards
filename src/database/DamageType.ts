export class DamageType implements TDamageType {
  сuttingDamage = 0;
  choppingDamage = 0;
  crushingDamage = 0;
  trustDamage = 0;

  constructor(options: TDamageType) {
    Object.keys(options).forEach(key => {
      this[key as DamageTypeKeys] = options[key as DamageTypeKeys] ?? 0;
    });
  }
}
