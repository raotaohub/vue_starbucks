<template>
  <div class="">

    <div class="p-3" v-for="(menu,key) in menuNavFilter" :key="key" v-show="isShow(menu)">
      <p class="h5 ml-3">
        {{menu.menuCN}}
      </p>
      <!-- 用bootstrap  -->
      <ul class="row mt-4 m-0">
        <!-- 默认每个占3/12 小屏幕时占6/12   -->
        <li class="text-center col-lg-3 col-sm-6 thumbnail" v-for="(item,index) in menuFilter" :key="index" v-show="item.SubTypes ==menu.menuEN">
          <a class="">
            <img class="preview circle" :src="'/static/image/menu-page/merchandise/'+item.ProductImage">
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
      const { menuNavFilter, merchandiseList } = this;
      if (this.$store.state.menuType !== "all") {
        return merchandiseList.filter(
          (item) => item.SubTypes == this.$store.state.menuType
        );
      } else {
        return merchandiseList;
      }
    },
  },
  data() {
    return {
      menuNavFilter: [
        {
          menuEN: "ordinary",
          menuCN: "常规产品",
        },
        {
          menuEN: "premium",
          menuCN: "臻选产品",
        },
      ],
      merchandiseList: [
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179101"),
          ProductID: "050010001",
          ProductName: "12oz 烫金品牌黑色马克杯",
          ProductImage: "12oz-black-gilded-brand-mug.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179102"),
          ProductID: "050010002",
          ProductName: "银色/白色亮面品牌桌面杯",
          ProductImage: "12oz-silver-white-brand-handle-mug.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179103"),
          ProductID: "050010003",
          ProductName: "12oz 彰显本色黑色/深灰不锈钢桌面杯",
          ProductImage: "12oz-true-essence-stainless-steel-bottle.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179104"),
          ProductID: "050010004",
          ProductName: "12oz 纯白磨砂玻璃杯",
          ProductImage: "12oz-white-frosted-glass-cup.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179105"),
          ProductID: "050010005",
          ProductName: "12oz 烫金品牌白色马克杯",
          ProductImage: "12oz-white-gilded-brand-mug.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179106"),
          ProductID: "050010006",
          ProductName: "16oz 烫金品牌黑色马克杯",
          ProductImage: "16oz-black-gilded-brand-mug.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179107"),
          ProductID: "050010007",
          ProductName: "16oz 原木黑色拎绳不锈钢保温杯",
          ProductImage:
            "16oz-black-wooden-stainless-steel-bottle-with-strap.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179108"),
          ProductID: "050010008",
          ProductName: "16oz 彰显本色黑色/深灰不锈钢随行杯",
          ProductImage: "16oz-true-essence-stainless-steel-travel-bottle.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179109"),
          ProductID: "050010009",
          ProductName: "16oz 烫金品牌白色马克杯",
          ProductImage: "16oz-white-gilded-brand-mug.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179110"),
          ProductID: "050010010",
          ProductName: "3oz 烫金品牌黑色试尝杯",
          ProductImage: "3oz-black-gilded-brand-mug.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179111"),
          ProductID: "050010011",
          ProductName: "3oz 烫金品牌白色试尝杯",
          ProductImage: "3oz-white-gilded-brand-mug.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179112"),
          ProductID: "050010012",
          ProductName: "500ml 黑色Logo水瓶",
          ProductImage: "500ml-black-logo-water-bottle.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179113"),
          ProductID: "050010013",
          ProductName: "500ml 白色Logo水瓶",
          ProductImage: "500ml-white-logo-water-bottle.jpg",
          Category: "Merchandise",
          SubTypes: "ordinary",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179114"),
          ProductID: "050020001",
          ProductName: "12oz 纯黑/古铜亮面品牌桌面杯",
          ProductImage: "12oz-black-bronze-brand-handle-mug.jpg",
          Category: "Merchandise",
          SubTypes: "premium",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179115"),
          ProductID: "050020002",
          ProductName: "16oz 香槟金品牌不锈钢桌面杯",
          ProductImage: "16oz-champagne-gold-brand-stainless-steel-cup.jpg",
          Category: "Merchandise",
          SubTypes: "premium",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179116"),
          ProductID: "050020003",
          ProductName: "500ml 金色Logo水瓶",
          ProductImage: "500ml-gold-logo-water-bottle.jpg",
          Category: "Merchandise",
          SubTypes: "premium",
        },
        {
          // "_id" : ObjectId("5c8f39ad04599d0f57179117"),
          ProductID: "050020004",
          ProductName: "9oz 臻选玻璃杯",
          ProductImage: "9oz-reserve-glass-cup.jpg",
          Category: "Merchandise",
          SubTypes: "premium",
        },
      ],
    };
  },
};
</script>

<style>
</style>