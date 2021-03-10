<template>
  <div class="login">
    <a-card>
      <div class="login-logo">
        <img src="../assets/logo.png" />
      </div>
      <a-form>
        <a-form-item label="用户名" v-bind="validateInfos.title">
          <a-input v-model:value="modelRef.title" placeholder="请输入标题" />
        </a-form-item>
        <a-form-item label="密码" v-bind="validateInfos.link">
          <a-input v-model:value="modelRef.link" placeholder="请输入密码" />
        </a-form-item>
        <a-form-item label="">
          <a-button type="primary" block @click.prevent="onSubmit">登陆</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useForm } from "@ant-design-vue/use";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    console.log(router);
    const modelRef = reactive({
      title: "",
      description: "",
      link: ""
    });

    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: "请输入标题"
        }
      ],
      desc: [
        {
          required: true,
          message: "请填写文章描述"
        }
      ]
    });
    const { resetFields, validateInfos } = useForm(modelRef, rulesRef);
    const onSubmit = () => {
      localStorage.setItem("token", "token");
      router.push("/");
    };
    return {
      validateInfos,
      resetFields,
      modelRef,
      onSubmit
    };
  }
});
</script>
<style lang="less" scoped>
.login-logo {
  width: 64px;
  height: 64px;
  display: block;
  margin: 0 auto;
  img {
    height: 64px;
    width: 64px;
  }
}
:deep(.ant-form-item) {
  margin-bottom: 12px !important;
}
</style>
