<template>
  <div class="share-article">
    <a-form>
      <a-form-item label="标题" v-bind="validateInfos.title">
        <a-input v-model:value="formData.title" placeholder="请输入标题" />
      </a-form-item>
      <a-form-item label="推荐理由" v-bind="validateInfos.description">
        <a-textarea
          v-model:value="formData.description"
          allowClear
          placeholder="请填写推荐理由"
          :auto-size="{ minRows: 2, maxRows: 5 }"
        />
      </a-form-item>
      <a-form-item label="投稿人" v-bind="validateInfos.link">
        <a-input value="MartinYin" disabled placeholder="请输入文章链接" />
      </a-form-item>
      <a-form-item label="分类" v-bind="validateInfos.link">
        <a-row type="flex" justify="space-between">
          <a-col :span="12">
            <a-cascader v-model:value="value" :options="options" placeholder="请选择分类" />
          </a-col>
          <a-col>
            <a-button type="primary">投稿</a-button>
          </a-col>
        </a-row>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, onMounted, ref } from "vue";
import { useForm } from "@ant-design-vue/use";

import { ChromTabsQuery, ChromeTabsExecuteScript, ChromeTabsSendMessage } from "../utils";

interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: "前端",
    label: "前端",
    children: [
      {
        value: "文章",
        label: "文章"
      },
      {
        value: "框架",
        label: "框架"
      },
      {
        value: "插件",
        label: "插件"
      }
    ]
  },
  {
    value: "后端",
    label: "后端",
    children: [
      {
        value: "文章",
        label: "文章"
      },
      {
        value: "框架",
        label: "框架"
      },
      {
        value: "插件",
        label: "插件"
      }
    ]
  }
];
export default defineComponent({
  setup() {
    const formData = reactive({
      title: "",
      description: "",
      link: ""
    });

    const formDataRules = reactive({
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
    const { resetFields, validate, validateInfos } = useForm(formData, formDataRules);

    onMounted(async () => {
      const tabId = await ChromTabsQuery();
      const status = await ChromeTabsExecuteScript(tabId, "./js/plugin-chrome.js");
      if (status) {
        const result = await ChromeTabsSendMessage(tabId, {
          message: "GET_TOPIC_INFO"
        });
        const { title, description, link } = result;
        formData.title = title;
        formData.description = description;
        formData.link = link;
      }
    });

    const onSubmit = () => {
      validate()
        .then(() => {
          console.log(toRaw(formData));
        })
        .catch(err => {
          console.log("error", err);
        });
    };
    return {
      validateInfos,
      resetFields,
      formData,
      onSubmit,
      value: ref<string[]>([]),
      options
    };
  }
});
</script>
<style lang="less" scoped>
.share-article {
  padding: 10px 0;
}
:deep(.ant-form-item) {
  margin-bottom: 12px !important;
}
</style>
