const data = {
  namespaced: true,
  state: {
    cart: [],
    adminLogin: {
      nama: 'Jokowi',
      username: 'admin',
      password: 'admin',
    }
  },
  mutations: {
    INSERT_CART(state, payload){
      state.cart.push(payload)
    }
  },
  actions: { 
    insertCart({commit}, payload){
      commit('INSERT_CART', payload)
    }
  },
  getters: {
    getOrders(state){
      if (state.cart.length > 0) {
        return state.cart
      }
    },
    dataLogin: (state) => state.adminLogin
  }
    
}

export default data