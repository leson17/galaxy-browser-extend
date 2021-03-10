<template>
  <div class="home">
    <a-tabs class="popup-tab-box" type="card" v-model:activeKey="activeKey">
      <a-tab-pane key="1">
        <template #tab>
          <span>
            <FireOutlined />
            常用推荐
          </span>
        </template>
        <div class="no-data-tab">
          <a-alert message="暂未开发，敬请期待！" type="info" show-icon />
        </div>
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <span>
            <BankOutlined />
            好文分享
          </span>
        </template>
        <ShareArticle v-if="activeKey === '2'" />
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #tab>
          <span>
            <BookOutlined />
            前端文档
          </span>
        </template>
        <Docs />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ShareArticle from "../components/ShareArticle.vue";
import Docs from "../components/Docs.vue";
import { FireOutlined, BankOutlined, BookOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    FireOutlined,
    BankOutlined,
    BookOutlined,
    ShareArticle,
    Docs
  },
  setup() {
    return {
      activeKey: ref("2")
    };
  }
});
</script>
<style lang="less" scoped>
.home {
  .popup-tab-box {
    box-shadow: 0px 0px 10px -2px rgba(196, 196, 196, 1);
    &:deep(.ant-tabs-content) {
      > .ant-tabs-tabpane {
        background-color: #fff;
        padding: 0 16px;
      }
    }
    &:deep(.ant-tabs-bar) {
      border-color: #fff;
      margin-bottom: 0;
      .ant-tabs-tab {
        border-color: transparent;
        background: transparent;
      }
      .ant-tabs-tab-active {
        border-color: #fff;
        background: #fff;
      }
    }
  }
  .no-data-tab {
    padding: 10px 0;
  }
}
</style>
