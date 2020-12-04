/*  
  vuex 的核心管理对象模块 ,向外暴露一个store
  state,      // 包含多个对象状态的数据
  mutations,  // 包含更新state的函数对象
  action,     // 包含对应事件回调函数的对象
  getters,    // 包含多个getter计算属性函数的对象
*/
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    // 这个用以配合MENUSHOW方法，来控制indexLeft的汉堡包的开合
    isActive: false,
    // 这个是配合筛选菜单的
    menuType: 'all',
  },

  mutations: {
    MENUSHOW(state) {
      state.isActive = !state.isActive;
    },
    // 更改菜单标识
    FILTERMENU(state, value) {
      state.menuType = value
      // console.log(value)
      console.log(state.menuType)
    }
  },

  actions: {
    //action可以直接执行异步的代码
    menuShow({ commit, state }) {
      commit('MENUSHOW')
    },
    filterMenu({ commit, state }, value) {
      commit('FILTERMENU', value)
    }

  },

  getters: {

  },
})