<template>
  <div id="docs-content">
    <div class="item">
      <div class="item-image">
        <img src="../assets/logo.png" />
      </div>
      <div class="item-title">
        <p>前端开发文档</p>
      </div>
    </div>
    <div class="item" @click="openWindow('http://www.baidu.com')">
      <div class="item-image">
        <img src="../assets/logo_copy.png" />
      </div>
      <div class="item-title">
        <p>后端开发文档</p>
      </div>
    </div>
    <div class="item">
      <div class="item-image">
        <img src="../assets/logo_copy_copy.png" />
      </div>
      <div class="item-title">
        <p>组件文档</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const openWindow = (url: string) => {
      window.open(url);
    };
    return {
      openWindow
    };
  }
});
</script>
<style lang="less" scoped>
#docs-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 16px;
  padding-bottom: 16px;
  .item {
    width: 100px;
    height: 120px;
    cursor: pointer;
    box-sizing: border-box !important;
    &-image {
      width: 100px;
      display: flex;
      height: 90px;
      align-items: center;
      justify-content: center;
      img {
        width: 70px;
        width: 70px;
      }
    }
    &-title {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      text-align: center;
    }
    &:nth-child(2n) {
      margin-right: 11px;
      margin-left: 11px;
    }
  }
}
</style>
