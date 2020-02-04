<template>
  <div id="app">
    <div class="header">
      新型冠状病毒 2019-nCoV
      <div :style="{ fontSize: '0.25rem' }">
        截至
        <span :style="{ width: '1.8rem', display: 'inline-block' }">
          {{
            data.statistics.modifyTime &&
              `${new Date(data.statistics.modifyTime).getFullYear()}-${new Date(
                data.statistics.modifyTime
              ).getMonth() + 1}-${new Date(data.statistics.modifyTime).getDate()} ${new Date(
                data.statistics.modifyTime
              ).getHours()}:${new Date(data.statistics.modifyTime).getMinutes()}`
          }}
        </span>
        全国数据统计
      </div>
    </div>
    <div>
      <ul class="number">
        <li>
          <div>{{ data.statistics.confirmedCount }}</div>
          <div>确诊</div>
        </li>
        <li>
          <div>{{ data.statistics.suspectedCount }}</div>
          <div>疑似</div>
        </li>
        <li>
          <div>{{ data.statistics.confirmedIncr }}</div>
          <div>重症</div>
        </li>
        <li>
          <div>{{ data.statistics.deadCount }}</div>
          <div>死亡</div>
        </li>
        <li>
          <div>{{ data.statistics.curedCount }}</div>
          <div>治愈</div>
        </li>
      </ul>
    </div>
    <div class="areaStat">
      <div class="detail-header">
        <div>地区</div>
        <div>确诊</div>
        <div>死亡</div>
        <div>治愈</div>
      </div>
      <div v-for="(item, i) in data.areaStat" :key="i" class="detail-item">
        <div>{{ item.provinceShortName }}</div>
        <div>{{ item.confirmedCount }}</div>
        <div>{{ item.deadCount }}</div>
        <div>{{ item.curedCount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@utils/request";

export default {
  name: "app",
  components: {},
  data() {
    return {
      data: {
        areaStat: {},
        statistics: {}
      }
    };
  },
  created() {
    this.fnGetData();
  },
  methods: {
    async fnGetData() {
      const response = await request.get("https://m.shanghaim.net/napi/pneumonia/query");
      this.data = response.data.data;
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.5rem;
  color: #2c3e50;
}
.header {
  text-align: center;
  padding: 0.2rem;
}
.number {
  display: flex;
  font-size: 0.3rem;
  justify-items: center;
  li {
    list-style-type: none;
    flex: 1;
    text-align: center;
  }

  li div:nth-child(1) {
    line-height: 0.5rem;
    height: 0.5rem;
  }
}

.areaStat {
  margin-top: 0.3rem;
}
.detail-header {
  background-color: #eee;
  position: sticky;
  top: 0;
}
.detail-header {
  padding: 0.2rem 0;
}

.detail-header,
.detail-item {
  font-size: 0.32rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.25rem;
  > div {
    flex: 1;
    text-align: center;
  }
}
</style>
