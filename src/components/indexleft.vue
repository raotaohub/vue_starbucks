<template>
  <nav class="nav nav-left">
    <!-- 两个 article 标签 ，一个用来展示没有点击汉堡包(下拉霸)的视图，一个显示点击汉堡包(下拉霸)的视图   -->
    <article class="homeactive" v-show="!$store.state.isActive">
      <header class="header">
        <!-- 2020-10-18 这里为了避免 router-link-active 选中路由后 自动添加类 所以改用a标签了;
        当然也可以自己定义一个类都可以；
        ***2020-10-19   此条废除，还是改回router-link 因为使用该标签可以避免页面刷新提高性能。详见官网第一句话~~***
        -->
        <router-link to="/" class="logo">
          <img src="@/assets/image/logo.svg" />
        </router-link>
        <router-link to="/stores" class="stores"
          ><span class="primary">门店</span></router-link
        >
        <router-link to="/account" class="account"
          ><span class="primary">我的账户</span></router-link
        >
        <router-link to="/menu" class="menu"
          ><span class="primary">菜单</span></router-link
        >
        <!-- 下拉霸 -->
        <button
          class="hamburger hamburgertoogle btn btn-outline-white"
          @click="menuShow"
        ></button>
        <div class="clearfix"></div>
      </header>
      <!-- 我套了两个 body类 样式为 宽高 100%，发现没啥区别 套一个也行，不过这样好在dom树里看起来以下是一个整体，因此我套它-->
      <div class="body">
        <!-- 起始页面 home  -->
        <!-- v-show 通过判断当前路由地址，决定是否显示这坨 div，好处是本页一套代码PC端通吃，坏处本页臃肿。 -->
        <div class="body" v-show="this.$route.path == '/'">
          <div class="account-entry">
            <div class="display-happy">
              <span>心情惬意，来杯咖啡吧 ☕</span>
            </div>
            <account-component></account-component>
          </div>
        </div>
        <!-- 门店 stores -->
        <div class="body" v-show="this.$route.path == '/stores'">
          <div class="account-entry">
            <div class="display-happy">
              <span class="display-happy">好无语</span>
            </div>
            <ul class="tabs-wrapper">
              <li></li>
            </ul>
          </div>
        </div>
        <!-- 菜单 /menu-->
        <div class="body" v-show="this.$route.path == '/menu'">
          <div class="account-entry">
            <div class="display-happy">
              <span class="display-happy">菜单</span>
            </div>
            <ul
              class="tabs-wrapper"
              v-for="(item, index) in newMenuList.fitst_menu"
              :key="index"
            >
              <li>
                <!-- append 可以自动嵌套上一级路由地址，这样我模拟数据的path就不用写一长串了 顺便多用一个api 学习。  -->
                <router-link
                  @click="addMenuClass(index)"
                  :class="{ menuactive: index == menuClass }"
                  :to="item.path"
                  append
                  >{{ item.title }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- 菜单>>饮料 -->
        <div class="body" v-show="this.$route.path == '/menu/beverages'">
          <div class="account-entry">
            <div class="mb-3">
              <router-link to="/menu"
                ><span class="h4"> 👈 菜单</span></router-link
              >
            </div>
            <div class="display-happy">
              <span class="display-happy">饮料</span>
            </div>
            <ul
              class="tabs-wrapper"
              v-for="(item, index) in second_meun.beverages"
              :key="index"
            >
              <li
                @click="
                  addMenuClass(index)
                  filterMenu(item.SubTypes)
                "
              >
                <!-- 我在/router/index.js 中说了由于孙子页面是列表筛选，所以我不用路由，不过由于我需要a标签鼠标移入时的小手掌，因此这里我用a标签 同时删除herf；
                如果看到这里的话，发现我是要取消a标签的默认行为 ’跳转‘ ,相关知识衍生为 阻止冒泡事件，取消其他标签的默认行为 如form表单等，可以运用到这里试试看，
                写在这里，防止代码后续进展要用到这些知识。 -->
                <a :class="{ menuactive: index == menuClass }">{{
                  item.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 菜单>>美食-->
        <div class="body" v-show="this.$route.path == '/menu/food'">
          <div class="account-entry">
            <div class="mb-3">
              <router-link to="/menu"
                ><span class="h4"> 👈 菜单</span></router-link
              >
            </div>
            <div class="display-happy">
              <span class="display-happy">饮料</span>
            </div>
            <ul
              class="tabs-wrapper"
              v-for="(item, index) in second_meun.food"
              :key="index"
            >
              <li
                @click="
                  addMenuClass(index)
                  filterMenu(item.SubTypes)
                "
              >
                <a :class="{ menuactive: index == menuClass }">{{
                  item.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 菜单>>咖啡产品-->
        <div class="body" v-show="this.$route.path == '/menu/coffee'">
          <div class="account-entry">
            <div class="mb-3">
              <router-link to="/menu"
                ><span class="h4"> 👈 菜单</span></router-link
              >
            </div>
            <div class="display-happy">
              <span class="display-happy">饮料</span>
            </div>
            <ul
              class="tabs-wrapper"
              v-for="(item, index) in second_meun.coffee"
              :key="index"
            >
              <li
                @click="
                  addMenuClass(index)
                  filterMenu(item.SubTypes)
                "
              >
                <a :class="{ menuactive: index == menuClass }">{{
                  item.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 菜单>>商品-->
        <div class="body" v-show="this.$route.path == '/menu/merchandise'">
          <div class="account-entry">
            <div class="mb-3">
              <router-link to="/menu"
                ><span class="h4"> 👈 菜单</span></router-link
              >
            </div>
            <div class="display-happy">
              <span class="display-happy">饮料</span>
            </div>
            <ul
              class="tabs-wrapper"
              v-for="(item, index) in second_meun.merchandise"
              :key="index"
            >
              <li
                @click="
                  addMenuClass(index)
                  filterMenu(item.SubTypes)
                "
              >
                <a :class="{ menuactive: index == menuClass }">{{
                  item.title
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- account的默认页 登录 -->
        <div class="body" v-show="this.$route.path === '/account'">
          <div class="account-entry">
            <div class="display-happy">
              <span class="display-happy">登录或创建一个新账户🌟</span>
            </div>
            <ul
              class="tabs-wrapper"
              v-for="(item, index) in accountList"
              :key="index"
            >
              <li @click="addMenuClass(index)">
                <router-link
                  :class="{ menuactive: index == menuClass }"
                  :to="item.path"
                  >{{ item.title }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- account>>注册 -->
        <div class="body" v-show="this.$route.path === '/account/register'">
          <div class="account-entry">
            <div class="display-happy">
              <span class="display-happy">登录或创建一个新账户🌟</span>
            </div>
            <ul
              class="tabs-wrapper"
              v-for="(item, index) in accountList"
              :key="index"
            >
              <li @click="addMenuClass(index)">
                <router-link
                  :class="{ menuactive: index == menuClass }"
                  :to="item.path"
                  >{{ item.title }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- account>>关于星巴克俱乐部 -->
        <div
          class="body"
          v-show="this.$route.path === '/account/starbucks-rewards'"
        >
          <div class="account-entry">
            <div class="display-happy">
              <span class="display-happy">登录或创建一个新账户🌟</span>
            </div>
            <ul
              class="tabs-wrapper"
              v-for="(item, index) in accountList"
              :key="index"
            >
              <li @click="addMenuClass(index)">
                <router-link
                  :class="{ menuactive: index == menuClass }"
                  :to="item.path"
                  >{{ item.title }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
    <!-- 这里是第二个article标签处，主要显示点击汉堡包后的导航栏， -->
    <article class="homeclose" v-show="$store.state.isActive">
      <header class="header">
        <!-- 这里为了避免 router-link-active 选中路由后 自动添加类 所以改用a标签了，2020-10-19废它-->
        <router-link to="/" class="logo">
          <img @click="menuShow" src="@/assets/image/logo.svg" />
        </router-link>
        <!-- 下拉霸 -->
        <button
          class="hamburger hamburgerclose btn btn-outline-white"
          @click="menuShow"
        ></button>
        <div class="clearfix"></div>
      </header>
      <div class="account-entry">
        <ul v-for="(item, index) in hamburgerList" :key="index">
          <li class="pt-1" @click="menuShow">
            <router-link class="h5 font-weight-bold" :to="item.path">{{
              item.title
            }}</router-link>
          </li>
        </ul>
        <hr />
        <div class="account-components">
          <router-link to="/account">
            <!-- <img src="@/assets/icons/icon-account.svg" /> -->
            <button
              type="button"
              class="sign-smile btn text-success mr-4"
              @click="menuShow"
            >
              登录
            </button>
          </router-link>
          <router-link to="/account/register">
            <button
              type="button"
              class="logon-smile btn btn-outline-success"
              @click="menuShow"
            >
              注册
            </button>
          </router-link>
        </div>
        <footer class="d-block mt-3">
          <ul class="d-block text-secondary">
            <li class="d-inline-block">English |</li>
            <li class="d-inline-block">隐私政策 |</li>
            <li class="d-inline-block">使用条款</li>
          </ul>
        </footer>
      </div>
    </article>
  </nav>
</template>

<script>
import '../assets/css/init.css'
import '../assets/css/index.css'
import '../assets/css/common-font.css'
import accountComponent from './commons/accountComponent.vue'
export default {
  components: {
    accountComponent,
  },
  data() {
    return {
      hamburgerList: [
        {
          title: '门店',
          path: '/stores',
        },
        {
          title: '星享俱乐部',
          path: '',
        },
        {
          title: '菜单',
          path: '/menu',
        },
        {
          title: '星巴克移动应用',
          path: '',
        },
        {
          title: '星礼卡',
          path: '',
        },
        {
          title: '星巴克甄选™',
          path: '',
        },
        {
          title: '咖快™ - 在线点 到店取',
          path: '',
        },
        {
          title: '专星送™',
          path: '',
        },
        {
          title: '咖啡星讲堂',
          path: '',
        },
        {
          title: '上海烘焙工坊',
          path: '',
        },
        {
          title: '关于星巴克',
          path: '',
        },
        {
          title: '帮助中心',
          path: '',
        },
      ],
      // 菜单的数据
      newMenuList: {
        // 一级菜单
        fitst_menu: [
          { title: '季度精选', path: '' },
          { title: '饮料', path: 'beverages' },
          { title: '美食', path: 'food' },
          { title: '咖啡产品', path: 'coffee' },
          { title: '商品', path: 'merchandise' },
        ],
      },
      second_meun: {
        beverages: [
          { path: '/menu/beverages', id: '1', title: '全部', SubTypes: 'all' },
          {
            path: '/menu/beverages',
            id: '2',
            title: '星巴克玩味冰调™',
            SubTypes: 'mixology',
          },
          {
            path: '/menu/beverages',
            id: '3',
            title: '手工调制浓缩咖啡',
            SubTypes: 'espresso',
          },
          {
            path: '/menu/beverages',
            id: '4',
            title: '星冰乐®',
            SubTypes: 'frappu',
          },
          {
            path: '/menu/beverages',
            id: '5',
            title: '茶瓦纳™',
            SubTypes: 'chawana',
          },
          {
            path: '/menu/beverages',
            id: '6',
            title: '经典巧克力饮品',
            SubTypes: 'chocolate',
          },
          {
            path: '/menu/beverages',
            id: '7',
            title: '咖啡融合冰淇淋',
            SubTypes: 'icecream',
          },
          {
            path: '/menu/beverages',
            id: '8',
            title: '星巴克冷萃咖啡系列',
            SubTypes: 'coldextra',
          },
          {
            path: '/menu/beverages',
            id: '9',
            title: '气致™冷萃咖啡',
            SubTypes: 'gas-coldextra',
          },
        ],
        food: [
          { path: '/menu/food', id: '1', title: '全部', SubTypes: 'all' },
          { path: '/menu/food', id: '2', title: '烘焙', SubTypes: 'bakery' },
          {
            path: '/menu/food',
            id: '3',
            title: '蛋糕&甜品',
            SubTypes: 'dessert',
          },
          {
            path: '/menu/food',
            id: '4',
            title: '三明治、帕尼尼、卷',
            SubTypes: 'sandwich',
          },
          { path: '/menu/food', id: '5', title: '酸奶', SubTypes: 'yoghurt' },
          { path: '/menu/food', id: '6', title: '其他美食', SubTypes: 'other' },
          // { path: "/menu/food", id: "7", title: "早安新一天" ,SubTypes:''},
        ],
        coffee: [
          { path: '/menu/coffee', id: '1', title: '全部', SubTypes: 'all' },
          {
            path: '/menu/coffee',
            id: '2',
            title: '咖啡豆',
            SubTypes: 'baking-M',
          },
          {
            path: '/menu/coffee',
            id: '3',
            title: '星巴克VIA® 免煮咖啡',
            SubTypes: 'via-black',
          },
          {
            path: '/menu/coffee',
            id: '4',
            title: '星巴克臻选™咖啡',
            SubTypes: 'selection',
          },
          {
            path: '/menu/coffee',
            id: '5',
            title: 'Origami™',
            SubTypes: 'origami',
          },
        ],
        merchandise: [
          {
            path: '/menu/merchandise',
            id: '1',
            title: '全部',
            SubTypes: 'all',
          },
          {
            path: '/menu/merchandise',
            id: '2',
            title: '常规产品',
            SubTypes: 'ordinary',
          },
          {
            path: '/menu/merchandise',
            id: '3',
            title: '甄选产品',
            SubTypes: 'premium',
          },
        ],
      },
      accountList: [
        {
          path: '/account',
          title: '登录',
        },
        {
          path: '/account/register',
          title: '注册',
        },
        {
          path: '/account/starbucks-rewards',
          title: '关于星巴克俱乐部',
        },
      ],

      // 状态
      loading: false,
      menuClass: 0,
    }
  },
  created() {
    // 导航完成后获取数据
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route.path': 'fetchData',
  },
  methods: {
    fetchData() {
      // 路由地址一旦变动 menuClass归零
      this.menuClass = 0
      // 这里可以执行axios
      this.loading = true
      // 重置菜单筛选的标识
      this.$store.dispatch('filterMenu', 'all')
      console.log('路由已变更', this.$route.path)
    },
    /* 给菜单中选中的元素添加一个类 由于这里我舍弃使用route自带的active类 所以我需要自定定义一个方法来添加类;
     舍弃的原因在于它会给其他不需要的router-link也加上class。简而言之就是和实际需求尝试冲突了，且不好处理。 
     此处的逻辑是：
     1.首先定义 menuClass = 0；由于v-for总是从下标是0的元素开始遍历，因此第一个元素默认具有该类，例如菜单中的 ’季度精选‘ 这个标签;
     2.当点击被遍历的其他的元素时，比如点击’饮料‘，它的下标为index=1，因此将index通过点击事件回调函数的参，传递给该方法内，执行 :index(1)赋值给menuClass;
     3.该 html标签体内 动态类的实践(:class="{'xxx':xxx?'xxx'}") 则会获取到下标 index == 1 == menuClass 为ture ，OK给它添加类，其他元素因为自身index != menuClass 所以移除了该类
     4.当路由地址发生变化，则执行一个   fetchData 方法，将menuClass 归 0；完成整个逻辑。
     将括号内的内容看成我的注解 结合代码来看你会很明了我的意思~。
     */
    addMenuClass(index) {
      this.menuClass = index
    },
    // 分发
    menuShow() {
      this.$store.dispatch('menuShow')
    },
    // 分发
    filterMenu(index) {
      this.$store.dispatch('filterMenu', index)
    },
  },
}
</script>

<style>
</style>