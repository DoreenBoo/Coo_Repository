import { createApp } from 'vue';
import App from './App.vue';

import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css'

import router from './router/index';  // 引入路由配置

import "@/assets/text/text.css"; // 引入你的 CSS 文件

const app = createApp(App);

// 注册 ElementPlusIconsVue 中的所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// 使用 ElementPlus
app.use(ElementPlus);

// 使用 Vue Router
app.use(router);

// 挂载到 DOM
app.mount('#app');


