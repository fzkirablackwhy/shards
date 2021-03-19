import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { DummyState } from '@/store/modules/dummy'

declare module '*.vue' {
  // eslint-disable-next-line prettier/prettier
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    dummy: DummyState
    armor: TArmor<TArmorType, TMetalMaterial | TLeatherMaterial> | null;
    weapon: TWeapon<TWeaponType, TMetalMaterial>
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
