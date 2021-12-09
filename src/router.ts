import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import Markdown from "./components/Markdown.vue"
import {h} from "vue";
const history = createWebHashHistory();
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
export const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", component: DocDemo },
        {path:"intro", component: md('intro')},
        {path:"get-start", component: md('get-start')},
        {path:"install", component: md('install')},
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
