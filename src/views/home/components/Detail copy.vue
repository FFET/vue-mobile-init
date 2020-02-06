<template>
  <div class="areaStat">
    <div class="detail-header">
      <div>地区</div>
      <div>确诊</div>
      <div>死亡</div>
      <div>治愈</div>
    </div>
    <div v-for="(item, i) in data" :key="i">
      <div class="detail-item">
        <div>
          <i @click="fnDisplay(i)">1</i>
          {{ item.provinceShortName }}
        </div>
        <div>{{ item.confirmedCount }}</div>
        <div>{{ item.deadCount }}</div>
        <div>{{ item.curedCount }}</div>
      </div>
      <div v-if="item.flag">
        <div v-for="(subItem, j) in item.cities" :key="j" class="detail-sub-item">
          <div>{{ subItem.cityName }}</div>
          <div>{{ subItem.confirmedCount }}</div>
          <div>{{ subItem.deadCount }}</div>
          <div>{{ subItem.curedCount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    data: Array
  },
  computed: {},
  methods: {
    fnDisplay(index) {
      const data = this.data.map((element, i) => {
        element.flag = index === i;
        return element;
      });
      console.log(data);
      this.$emit("update:data", data);
      // this.data = data;
    }
  }
};
</script>

<style lang="less" scoped>
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
.detail-item,
.detail-sub-item {
  font-size: 0.32rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.25rem;
  > div {
    flex: 1;
    text-align: center;
  }
}

.detail-item {
  background-color: #f7f7f7;
}

.detail-sub-item {
  margin-left: 0.3rem;
}
</style>
