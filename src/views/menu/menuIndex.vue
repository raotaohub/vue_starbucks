<template>
  <div class="menuindex text-center">
    <div v-for="(item,index) in menuPageList" :key="index">
      <section>
        <div class="carousel-index">
          <a :href="item.path">
            <img :src="item.img" :alt="item.title" :class="{'menuimg':item.title !== '用心荟萃'}">
          </a>
        </div>
        <div class="p-5">
          <h3>{{item.title}}</h3>
          <p class="text-secondary" v-html="item.content" style="padding:0 20px;font-size:16px">
          </p>
        </div>
      </section>
    </div>
    <section class="new-product" id="new-product">
      <h3>所有新品</h3>
      <div class="wrapper">
        <div style="height: 305px;width: 240px;" class="item" v-for="(item,index) in newProductList" :key="index">
          <img class="p-2" :src="item.img">
          <p class="mt-2 h5">{{item.title}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuPageList: [
        {
          path: "#new-product",
          img: require("@/assets/image/menu-page/aut3-1-pc.jpg"),
          title: "用心荟萃",
          content: `这个秋天，我们用心荟萃4种明星萃型。<br> 全新爱尔兰风情雪绒冷萃，经典爱尔兰奶油风味融入冷萃咖啡基底，<br> 香草风味奶油与可可香气美妙衬托沁滑冷萃咖啡。<br> 更有爱尔兰风情雪绒咖啡，采用经典原萃，口感平衡顺滑。<br> 海盐焦糖风味馥芮白™采用精萃浓缩咖啡，清新海盐咸香美妙融合焦糖焦甜。<br> 枫糖可芮奇诺以满萃为基底，馥郁焦香，佐以进口枫糖糖浆，余韵悠长。`,
        },
        {
          path: "#new-product",
          img: require("@/assets/image/menu-page/aut3-2-pc.jpg"),
          title: "尝一口金秋",
          content: `全新花生咖啡慕斯蛋糕，花生与咖啡的碰撞，<br> 香气怡人的花生混合着咖啡慕斯，口感馥郁清香，回味悠长，感受这一口美妙！<br> 咖啡豆乳味慕斯蛋糕，绵密豆乳味咖啡豆造型慕斯，<br> 点缀Q弹的咖啡果冻颗粒，淋上巧克力味酱，整体风味清甜的焦香，绵密爽滑。`,
        },
        {
          path: "#new-product",
          img: require("@/assets/image/menu-page/aut3-3-pc.jpg"),
          title: "与星巴克女神共举杯",
          content: `纯色勾勒美人鱼身形，突显皇冠和贝壳的金色，<br> 简单的撞色演绎出原始星巴克女神的形象，经典隽永，邀你共同举杯。`,
        },
        {
          path: "#new-product",
          img: require("@/assets/image/menu-page/aut3-7-pc.jpg"),
          title: "万圣开“星”鬼",
          content: `万圣节前夜，在闭店的南瓜星巴克门店中，<br> 小熊发现平常熟悉的机器们不再是没有生命的机器。<br> 开始变得活蹦乱跳，并且和万圣节的新伙伴们开始了属于自己的万圣节狂欢。<br> 这个万圣节，和星杯一起做个开“星”鬼。`,
        },
        {
          path: "#new-product",
          img: require("@/assets/image/menu-page/aut3-4-pc.jpg"),
          title: "与星巴克女神同行",
          content: `本季我们用更加艺术的方式来渲染出星巴克女神优雅的形象，体现星巴克的文化与内涵。<br> 星礼包同时搭配一个多功能手拿手拿包，实用便携。`,
        },
        {
          path: "#new-product",
          img: require("@/assets/image/menu-page/aut3-5-pc.jpg"),
          title: "别样秋意",
          content: `坐落在哥伦比亚中北部的安第斯山脉中心地带<br> 那里有着桑坦德崎岖的地形、肥沃的土地和深深的河谷。<br> 咖啡种植在这里代代相承，女性在这一过程中扮演着重要的角色。<br> 当地的女性充满热情，开拓进取，融合了社区意识和对独立的热爱。<br> 这种精神被注入到她们生产的咖啡中，正是您手中这杯醇香四溢的哥伦比亚桑坦德咖啡。`,
        },
        {
          path: "#new-product",
          img: require("@/assets/image/menu-page/aut3-6-pc.jpg"),
          title: "拨云见日",
          content: `这是我们第四次骄傲地推出星巴克臻选品质的云南咖啡豆。<br> 来自晴开、佐园两农场的咖啡，凭借稳定的优良品质，今年再次回归。<br> 佐园农场咖啡豆具有酸橙般的风味，<br> 伴随绿色草本植物般的香气，尾韵如巧克力般的顺滑口感。<br> 而晴开农场咖啡豆雪松般的香气中，带有巧克力的醇厚、回甘以及坚果般的甜感。`,
        },
      ],
      newProductList: [
        {
          img: require("@/assets/image/menu-page/new-product (2).jpg"),
          title: "爱尔兰奶油冷萃",
        },
        {
          img: require("@/assets/image/menu-page/new-product (3).jpg"),
          title: "枫糖可芮奇诺",
        },
        {
          img: require("@/assets/image/menu-page/new-product (4).jpg"),
          title: "海盐焦糖馥芮白",
        },
        {
          img: require("@/assets/image/menu-page/new-product (5).jpg"),
          title: "咖啡豆乳味慕斯蛋糕",
        },
        {
          img: require("@/assets/image/menu-page/new-product (6).jpg"),
          title: "花生咖啡慕斯蛋糕",
        },
        {
          img: require("@/assets/image/menu-page/new-product (7).jpg"),
          title: "哥伦比亚桑坦德咖啡豆",
        },
        {
          img: require("@/assets/image/menu-page/new-product (8).jpg"),
          title: "星礼卡",
        },
        {
          img: require("@/assets/image/menu-page/new-product (9).jpg"),
          title: "星巴克臻选™中国云南 晴开农场咖啡豆",
        },
        {
          img: require("@/assets/image/menu-page/new-product (1).jpg"),
          title: "星巴克臻选™中国云南 佐园农场咖啡豆",
        },
      ],
    };
  },
};
</script>

<style>
.menuindex {
  margin-bottom: -24px;
}
.wrapper {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  width: 100%;
}

.new-product {
  padding: 40px 24px 0;
  background: rgba(0, 0, 0, 0.05);
}
.new-product > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.menuimg {
  height: auto;
  width: calc(100% - 40px);
  display: inline-block;
}
.item {
  padding: 12px;
}
.item img {
  width: 100%;
}
.item p {
  width: 100%;
}
</style>