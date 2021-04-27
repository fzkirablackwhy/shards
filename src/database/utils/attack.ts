import { DummyState, dummy } from '@/store/modules/dummy';

export const attack = ({
  weaponState,
  personState,
}: {
  weaponState: TWeapon<TWeaponType, TMetalMaterial>;
  personState: DummyState['person'];
}) => {};
