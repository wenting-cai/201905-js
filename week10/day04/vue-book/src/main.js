// main.js 是 Vue 应用的主入口,创建VUe实例,这个文件就是创建Vue的实例,在创建实例的时候把该配置的属性都要配置,入router,store,el
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' // 导入swiper需要的样式
// 使用vue-awesome-swiper 要导入然后use
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// main.js 负责创建根实例,main.js负责创建根实例,在创建根实例的时候把router.js中的vueRouter实例传入,并且把App.vue挂载在根DOM节点上,挂载之后这些东西才会出现在页面上

// 浏览器不能识别.vue的文件,之所以我们写了之后能出现效果,是因为cli启动的dev server中包含了webpack的,而webpack会实时把我们写的.vue文件编译成html,css,js

// webpack-dev-server 启动之后 项目中的文件也被实时编译,也被打包了,但是我们看不到打包之后的内容,因为这些被打包的内容写进了内存中(RAM),浏览器拿到的也是从内存里面拿来的

// 最后开发完,文件都已经定型了不再改动了,此时执行打包的命令 npm run build , 执行命令的时候要输出物理文件,这些文件最终输出到硬盘中,再上传到服务器上,上传到服务器上以后用户就能看到了
