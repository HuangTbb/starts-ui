<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>
<script lang="ts">
import { Button, openDialog } from "../../lib";
import { h } from "vue";
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title() {
          return h("strong", {}, "标题");
        },
        content() {
          return "你好";
        },
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>
