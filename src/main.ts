import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Alert, Tabs, Form, Input, Button, Select, Card, Row, Col, Cascader } from "ant-design-vue";

const app = createApp(App);

router.beforeEach((to, from, next) => {
  if (to.path !== "/login") {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
app.use(router);

[Alert, Tabs, Form, Input, Button, Select, Card, Row, Col, Cascader].map(item => app.use(item));

app.mount("#app");
