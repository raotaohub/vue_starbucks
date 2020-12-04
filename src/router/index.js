import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import indexleft from '@/components/indexleft'//PC左侧导航、菜单
import indexright from '@/components/indexright'//PC右侧主要内容


// 门店
import stores from '../views/stores/stores.vue'
// 菜单
import menu from '../views/menu/menu.vue'//父组件 作为其子路由渲染出口使用
import menuIndex from '../views/menu/menuIndex.vue'//真正的menu的默认视图
import beverages from '@/views/menu/beverages.vue'
import food from '@/views/menu/food.vue'
import coffee from '@/views/menu/coffee.vue'
import merchandise from '@/views/menu/merchandise.vue'

// 我的账户
import account from '@/views/account/account.vue'//父组件 作为其子路由渲染出口使用
import accountIndex from '@/views/account/accountIndex.vue'//真正的account的默认视图
import register from '@/views/account/register.vue'// 注册
import starbucksrewards from '@/views/account/starbucks-rewards.vue' //关于星巴克俱乐部


//引入了还要声明使用。新手勿忘~
Vue.use(Router)

export default new Router({
  //将访问记录保存到 某处 ，具体不知~
  // mode: 'history',//打包上线 关闭改模式
  // linkActiveClass,       这两个配置可以配置一个 字符串 ’‘ 里面写一个类名 ，然后可以去css书写处 写 .xxx{样式} 
  // linkExactActiveClass,  当然你不配置的话直接写.linkActiveClass{样式}, .linkExactActiveClass{样式} 也可以; 
  // 两个有点区别 https://router.vuejs.org/zh/api/#linkactiveclass 去官方文档看看吧。
  // 以下配置路由
  routes: [
    {
      path: '/',
      name: 'index',
      // 左右布局 利用视图命名 ，这里我写了三个 留一个防止日后生变！
      components: {
        default: index,
        indexleft: indexleft,
        indexright: indexright
      },
      // 其他的路由都是 / 的子孙路由 这样点其他路由地址页面就不会消失 但是因此DOM树也比较庞大，
      children: [
        {
          path: '/stores',
          name: 'stores',
          component: stores
        },
        {
          path: '/menu',
          name: 'menu',
          // 由于每个 / 的子路由都有后代路由，所以每个相对而言的父路由所在的组件 仅作为子路由的出口来使用
          component: menu,
          children: [
            {
              // 因此需要多一个视图 用来渲染父路由的默认视图，可以减少一环 v-show 的判断；到@/components/indexleft.vue 文件中还有解释说明
              path: '/menu',
              name: 'menuIndex',
              component: menuIndex
            },
            { // 官网中 menu 的层级最多 ’/menu/儿子/孙子‘ 我这里只写到 /menu/儿子 
              // 在官网的孙子页面中，他们只是做一个列表筛选后的显示而已 ，后续利用一个计算属性渲染动态的数据，渲染显示即可，不需要再写页面，太冗长！
              path: 'beverages',
              name: 'beverages',
              component: beverages,
            }, {
              path: 'food',
              name: 'food',
              component: food,
            }, {
              path: 'coffee',
              name: 'coffee',
              component: coffee,
            }, {
              path: 'merchandise',
              name: 'merchandise',
              component: merchandise,
            },
          ]
        },
        {
          path: '/account',
          name: 'account',
          component: account,
          children: [
            {
              path: '/account',
              name: 'accountIndex',
              component: accountIndex,
            },
            {
              path: 'register',
              name: 'register',
              component: register,
            },
            {
              path: 'starbucks-rewards',
              name: 'starbucksrewards',
              component: starbucksrewards,
            }
          ]
        }
      ]
    },
    {
      // 访问http://localhost:8080时重定向至home，这个也可以配置到其他路由地址中。
      // 还有一个概念 alias 别名，貌似有类似的效果，可以了解一蛤
      // 『重定向』的意思是，当用户访问/a时，URL 将会被替换成/b，然后匹配路由为/b
      // /a的别名是/b，意味着，当用户访问/b 时，URL 会保持为/b，但是路由匹配则为/a，就像用户访问/a 一样。
      path: '',
      redirect: '/'
    },
  ]
})
