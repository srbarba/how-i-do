import type { InjectionKey, Ref } from 'vue'

export const OrdersSearchTermKey = Symbol('OrdersSearchTerm') as InjectionKey<
  Ref<string>
>
