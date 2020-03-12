<template>
  <div>
    <div class="header">
      新型冠状病毒 2019-nCoV
      <div :style="{ fontSize: '0.25rem' }">
        截至
        <span :style="{ width: '2rem', display: 'inline-block' }">
          {{
            data.modifyTime &&
              `${new Date(data.modifyTime).getFullYear()}-${new Date(data.modifyTime).getMonth() +
                1}-${new Date(data.modifyTime).getDate()} ${new Date(
                data.modifyTime
              ).getHours()}:${new Date(data.modifyTime)
                .getMinutes()
                .toString()
                .padStart(2, "0")}`
          }}
        </span>
        全国数据统计
      </div>
    </div>
    <div>
      <ul class="number">
        <li>
          <div>较昨日{{ data.currentConfirmedIncr }}</div>
          <div>{{ data.currentConfirmedCount }}</div>
          <div>现存确诊</div>
        </li>
        <li>
          <div>较昨日{{ data.confirmedIncr }}</div>
          <div>{{ data.confirmedCount }}</div>
          <div>确诊</div>
        </li>
        <li>
          <div>较昨日{{ data.suspectedIncr }}</div>
          <div>{{ data.suspectedCount }}</div>
          <div>疑似</div>
        </li>
        <li>
          <div>较昨日{{ data.seriousIncr }}</div>
          <div>{{ data.seriousCount }}</div>
          <div>重症</div>
        </li>
        <li>
          <div>较昨日{{ data.deadIncr }}</div>
          <div>{{ data.deadCount }}</div>
          <div>死亡</div>
        </li>
        <li>
          <div>较昨日{{ data.curedIncr }}</div>
          <div>{{ data.curedCount }}</div>
          <div>治愈</div>
        </li>
      </ul>
    </div>
    <div class="des">
      <div v-for="(item, key, i) in data" :key="i">
        <!--<div v-if="key.startsWith('remark')">{{ item }}</div>-->
        <div v-if="/^(remark|note).*$/.test(key)">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    data: null
  }
};
</script>

<style lang="less" scoped>
.header {
  text-align: center;
  padding: 0.2rem;
  color: #333;
}
.number {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.3rem;
  justify-items: center;
  li {
    list-style-type: none;
    //flex: 1;
    width: 33%;
    text-align: center;
    margin-top: 10px;
  }

  li div:nth-child(1) {
    line-height: 0.5rem;
    height: 0.5rem;
    color: #f18887;
    font-size: 0.2rem;
  }
  li div:nth-child(2) {
    color: #d36857;
    font-size: 0.3rem;
  }
}

.des {
  font-size: 0.3rem;
  margin: 0.3rem 0.2rem;
  > div {
    line-height: 0.6rem;
  }
}
</style>
