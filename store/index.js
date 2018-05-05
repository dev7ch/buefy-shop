import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'
import pkg from '@/store/modules/package'
import cart from '@/store/modules/cart'
import product from '@/store/modules/product'
import account from '@/store/modules/account'

const store = () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
      cart,
      product,
      pkg,
      account
    },
    mutations: {
      ...firebaseMutations
    }
  })
}

export default store
