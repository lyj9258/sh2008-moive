<template>
  <div class="list scroll" :style="{ height: height + 'px' }">
    <!-- <h1>电影列表</h1> -->
    <Loading v-if="loading"></Loading>
    <div>
      <div
        class="item"
        v-for="(item, index) in data"
        :key="index"
        @click="goDetail(item.filmId)"
      >
        <div class="left">
          <img v-lazy="item.poster" />
        </div>
        <div class="middle">
          <div>{{ item.name }}</div>
          <!-- <span class="item">2D</span> -->
          <div v-if="type == 1">
            <span>观众评分 </span>
            <span class="grade">{{ item.grade }}</span>
          </div>
          <div>主演:{{ item.actors | parseActors }}</div>
          <div>{{ item.nation }}| {{ item.runtime }}分钟</div>
        </div>
        <div class="right">
          <span v-if="type == 1">购票</span>
          <span v-else>预购</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// loading的导入
import Loading from "@/components/Loading";
//引入
import BScroll from "better-scroll";
import { nowPlayingListData, comingSoonListData } from "@/api/api";
export default {
  data() {
    return {
      loading: true,
      height: 0,
      //保存better-scroll实例
      bs: null,
      pageNum: 1,
      flag: true,
      data: [],
    };
  },
  props: ["list", "type"],
  components: {
    Loading,
  },
  created() {
    this.data = this.list;
    if (this.data.length > 0) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  },
  filters: {
    parseActors: function (value) {
      let actors = "";
      if (value) {
        value.forEach((element) => {
          actors += element.name + " ";
        });
      } else {
        actors = "暂无主演";
      }
      return actors;
    },
  },
  methods: {
    goDetail: function (filmId) {
      this.$router.push({ name: "detail", params: { filmId } });
    },
    getData: async function () {
      if (this.flag) {
        this.pageNum++;
        // 获取数据
        if (this.type == 1) {
          //正在热映
          var ret = await nowPlayingListData(this.pageNum);
        } else {
          //即将上映
          var ret = await comingSoonListData(this.pageNum);
        }
        if (ret.data.data.films.length < 10) {
          this.flag = false;
        }
        //将数据处理好，新增到列表中
        this.data = this.data.concat(ret.data.data.films);
      }
    },
  },
  mounted() {
    this.height = document.documentElement.clientHeight - 100;
  },
  updated() {
    this.bs = new BScroll(".scroll", {
      // 激活上滑动的事件监听
      pullUpLoad: true,
      // 激活下滑的事件监听
      pullDownRefresh: true,
      // 默认情况下使用bs后，它会禁止浏览器的点击事件
      click: true,
    });
    this.bs.on("pullingUp", () => {
      // console.log("上拉刷新");
      // 获取数据
      //本次pullup动作已经完成，继续准备下一次pullup
      this.getData();
      this.bs.finishPullUp();
    });
    this.bs.on("pullingDown", () => {
      // console.log("下拉刷新");
      // 获取数据
      //本次pulldown动作已经完成，继续准备下一次pulldown
      this.getData();
      this.bs.finishPullDown();
    });
  },
};
</script>
<style lang="scss" scoped>
.list {
  margin-bottom: 50px;

  .item {
    margin-top: 15px;
    padding-bottom: 15px;
    display: flex;
    color: #797d82;
    font-size: 13px;
    border-bottom: 1px solid #ededed;

    .left {
      width: 77px;
      height: 100px;
      margin-left: 20px;
      img {
        width: 66px;
        height: 100%;
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 55%;

      div:nth-of-type(1) {
        color: #191a1b;
        font-size: 16px;
      }

      div:nth-of-type(3) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .grade {
        color: #ffb232;
        font-size: 14px;
      }
    }

    .right {
      width: 15%;
      display: flex;
      align-items: center;
      margin-right: 20px;

      span {
        border: 1px solid #ff5f16;
        background: white;
        color: #ff5f16;
        border-radius: 2px;
        height: 25px;
        line-height: 25px;
        font-size: 13px;
        width: 50px;
        text-align: center;
      }
    }
  }
}
.scroll {
  overflow: hidden;
}
</style>