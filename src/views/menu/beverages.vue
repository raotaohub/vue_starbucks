<template>
  <div class="">
    <!-- v-show 这里传递的是一个方法isShow，携带一个参数menu，-->
    <div class="p-3" v-for="(menu,key) in menuNavFilter" :key="key" v-show="isShow(menu)">
      <p class="h5 ml-3">
        {{menu.menuCN}}
      </p>
      <!-- 用bootstrap  -->
      <ul class="row mt-4 m-0">
        <!-- 默认每个占3/12 小屏幕时占6/12   -->
        <li class="text-center col-lg-3 col-sm-6 thumbnail" v-for="(item,index) in menuFilter" :key="index" v-show="item.SubTypes ==menu.menuEN">
          <a class="">
            <img class="preview circle" :src="'/static/image/menu-page/beverages/'+item.ProductImage">
            <p class="mt-2"><b>
                {{item.ProductName}}
              </b></p>
          </a>
        </li>
      </ul>
      <hr class="hr">
    </div>

    <div></div>
    <div></div>
  </div>
</template>

<script>
import '../../assets/css/menustyle.css'

export default {
  methods: {
    isShow(menu) {
      if (this.$store.state.menuType == "all") {
        return true;
      } else {
        return menu.menuEN == this.$store.state.menuType;
      }
    },
  },
  computed: {
    menuFilter() {
      const { menuNavFilter, beveragesList } = this;
      if (this.$store.state.menuType !== "all") {
        return beveragesList.filter(
          (item) => item.SubTypes == this.$store.state.menuType
        );
      } else {
        return beveragesList;
      }
    },
  },
  data() {
    return {
      menuNavFilter: [
        {
          menuEN: "icecream",
          menuCN: "咖啡融合冰淇淋",
        },
        {
          menuEN: "coldextra",
          menuCN: "星巴克冷萃咖啡系列",
        },
        {
          menuEN: "espresso",
          menuCN: "手工调制浓缩咖啡",
        },
        {
          menuEN: "frappu",
          menuCN: "星冰乐",
        },
        {
          menuEN: "mixology",
          menuCN: "星巴克玩味冰调™",
        },
        {
          menuEN: "gas-coldextra",
          menuCN: "气致™冷萃咖啡",
        },
        {
          menuEN: "chocolate",
          menuCN: "经典巧克力饮品",
        },
        {
          menuEN: "chawana",
          menuCN: "茶瓦纳",
        },
      ],
      beveragesList: [
        {
          ProductID: "020010001",
          ProductName: "阿馥奇朵™",
          ProductImage: "affogato.jpg",
          Category: "Beverages",
          SubTypes: "icecream",
        },
        {
          ProductID: "020010002",
          ProductName: "麦芽雪冷萃™",
          ProductImage: "cold-brew-malt.jpg",
          Category: "Beverages",
          SubTypes: "icecream",
        },
        {
          ProductID: "020010003",
          ProductName: "冷萃浮乐朵™",
          ProductImage: "cold-brew-float.jpg",
          Category: "Beverages",
          SubTypes: "icecream",
        },
        {
          ProductID: "020010004",
          ProductName: "气致™冷萃浮乐朵™",
          ProductImage: "instore-nitro-cold-brew-float.jpg",
          Category: "Beverages",
          SubTypes: "icecream",
        },
        {
          ProductID: "020020001",
          ProductName: "冷萃冰咖啡",
          ProductImage: "cold-brew.jpg",
          Category: "Beverages",
          SubTypes: "coldextra",
        },
        {
          ProductID: "020020002",
          ProductName: "轻甜奶油冷萃",
          ProductImage: "vanilla-flavor-sweet-cream-cold-brew.jpg",
          Category: "Beverages",
          SubTypes: "coldextra",
        },
        {
          ProductID: "020020003",
          ProductName: "绵云冷萃",
          ProductImage: "cold-foam-cold-brew.jpg",
          Category: "Beverages",
          SubTypes: "coldextra",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179108"),
          ProductID: "020030001",
          ProductName: "美式咖啡（热/冷）",
          ProductImage: "caffe-americano.jpg",
          Category: "Beverages",
          SubTypes: "espresso",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179109"),
          ProductID: "020030002",
          ProductName: "拿铁（热/冷）",
          ProductImage: "caffe-latte.jpg",
          Category: "Beverages",
          SubTypes: "espresso",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179110"),
          ProductID: "020030003",
          ProductName: "摩卡（热/冷)",
          ProductImage: "caffe-mocha.jpg",
          Category: "Beverages",
          SubTypes: "espresso",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179111"),
          ProductID: "020030004",
          ProductName: "卡布奇诺（热/冷）",
          ProductImage: "cappuccino.jpg",
          Category: "Beverages",
          SubTypes: "espresso",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179112"),
          ProductID: "020030005",
          ProductName: "焦糖玛奇朵（热/冷）",
          ProductImage: "caramel-macchiato.jpg",
          Category: "Beverages",
          SubTypes: "espresso",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179113"),
          ProductID: "020030006",
          ProductName: "浓缩咖啡",
          ProductImage: "espresso.jpg",
          Category: "Beverages",
          SubTypes: "espresso",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179114"),
          ProductID: "020030007",
          ProductName: "馥芮白™",
          ProductImage: "flat-white.jpg",
          Category: "Beverages",
          SubTypes: "espresso",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179115"),
          ProductID: "020030008",
          ProductName: "榛果风味拿铁（热/冷）",
          ProductImage: "hazelnut-flavored-latte.jpg",
          Category: "Beverages",
          SubTypes: "espresso",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179116"),
          ProductID: "020030009",
          ProductName: "香草风味拿铁（热/冷）",
          ProductImage: "vanilla-flavored-latte.jpg",
          Category: "Beverages",
          SubTypes: "espresso",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179117"),
          ProductID: "020040001",
          ProductName: "焦糖浓缩咖啡星冰乐",
          ProductImage: "caramel-espresso-frappuccino.jpg",
          Category: "Beverages",
          SubTypes: "frappu",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179118"),
          ProductID: "020040002",
          ProductName: "抹茶星冰乐",
          ProductImage: "green-tea-frappuccino.jpg",
          Category: "Beverages",
          SubTypes: "frappu",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179119"),
          ProductID: "020040003",
          ProductName: "芒果西番莲果茶星冰乐",
          ProductImage: "mango-passion-tea.jpg",
          Category: "Beverages",
          SubTypes: "frappu",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179120"),
          ProductID: "020040004",
          ProductName: "摩卡星冰乐",
          ProductImage: "mocha-frappuccino.jpg",
          Category: "Beverages",
          SubTypes: "frappu",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179121"),
          ProductID: "020040005",
          ProductName: "摩卡可可碎片星冰乐",
          ProductImage: "mocha-java-chip-frappuccino.jpg",
          Category: "Beverages",
          SubTypes: "frappu",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179122"),
          ProductID: "020040006",
          ProductName: "香草风味星冰乐",
          ProductImage:
            "vanilla-flavored-cream-frappuccino-blended-beverage.jpg",
          Category: "Beverages",
          SubTypes: "frappu",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179123"),
          ProductID: "020050001",
          ProductName: "气致™冷萃咖啡",
          ProductImage: "nitro-cold-brew.jpg",
          Category: "Beverages",
          SubTypes: "gas-coldextra",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179124"),
          ProductID: "020060001",
          ProductName: "经典巧克力饮品（热/冷）",
          ProductImage: "signature-chocolate-beverage.jpg",
          Category: "Beverages",
          SubTypes: "chocolate",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179125"),
          ProductID: "020070001",
          ProductName: "红茶拿铁（热/冷）",
          ProductImage: "black-tea-latte.jpg",
          Category: "Beverages",
          SubTypes: "chawana",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179126"),
          ProductID: "020070002",
          ProductName: "抹茶拿铁（热/冷）",
          ProductImage: "green-tea-latte.jpg",
          Category: "Beverages",
          SubTypes: "chawana",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179127"),
          ProductID: "020070003",
          ProductName: "茶瓦纳™ 冰摇柚柚蜂蜜红茶",
          ProductImage: "iced-shaken-honey-ruby-grapefruit-black-tea.jpg",
          Category: "Beverages",
          SubTypes: "chawana",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179128"),
          ProductID: "020070004",
          ProductName: "冰摇红莓黑加仑茶",
          ProductImage: "blackcurrant-raspberry.jpg",
          Category: "Beverages",
          SubTypes: "chawana",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179129"),
          ProductID: "020070005",
          ProductName: "冰摇芒果花草茶",
          ProductImage: "iced-shaken-mango-herbal-juiced-tea.jpg",
          Category: "Beverages",
          SubTypes: "chawana",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179130"),
          ProductID: "020070006",
          ProductName: "茶瓦纳™ 冰摇桃桃绿茶/冰摇桃桃乌龙茶",
          ProductImage: "iced-shaken-peach-green-tea.jpg",
          Category: "Beverages",
          SubTypes: "chawana",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179130"),
          ProductID: "020070007",
          ProductName: "梨光清润路芭茶",
          ProductImage: "pear-rooibos-tea.png",
          Category: "Beverages",
          SubTypes: "chawana",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179130"),
          ProductID: "020070008",
          ProductName: "橘香柚柚花草茶",
          ProductImage: "pear-rooibos-tea.png",
          Category: "Beverages",
          SubTypes: "chawana",
        },

        {
          // _id: ObjectId("5c8f398c04599d0f57179136"),
          ProductID: "020080006",
          ProductName: "气炫冰山美式",
          ProductImage: "sparkling-espresso-tonic.jpg",
          Category: "Beverages",
          SubTypes: "mixology",
        },

        {
          // _id: ObjectId("5c8f398c04599d0f57179138"),
          ProductID: "020080008",
          ProductName: "橙柚派对",
          ProductImage: "triple-citrus.jpg",
          Category: "Beverages",
          SubTypes: "mixology",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179134"),
          ProductID: "020080004",
          ProductName: "醋意桃桃",
          ProductImage: "peach-shrub-fizz.jpg",
          Category: "Beverages",
          SubTypes: "mixology",
        },
        {
          // _id: ObjectId("5c8f398c04599d0f57179133"),
          ProductID: "020080003",
          ProductName: "酸柠浮冷萃",
          ProductImage: "cold-brew-lemon-sour.jpg",
          Category: "Beverages",
          SubTypes: "mixology",
        },
      ],
    };
  },
};
</script>

<style >

</style>