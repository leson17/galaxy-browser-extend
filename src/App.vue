<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    onMounted(() => {
      router.push("/");
    });
  }
});
</script>

<style lang="less">
html,
body {
  height: auto !important;
  width: 370px;
  box-sizing: border-box;
}
#app {
  overflow: hidden;
  width: 370px;
  box-sizing: border-box;
  background: #f5f5f5;
  padding: 8px;
}
</style>
