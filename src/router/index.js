import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import User from '@/views/user/User.vue'
import Classify from '@/views/classify/Classify.vue'
import Reclassify from '@/views/classify/Reclassify.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component:Login
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      children:[
        {
          path:'/user',
          name:'User',
          component:User
        },
        {
          path:'/classify',
          name:'Classify',
          component:Classify
        },
        {
          path:'/reclassify',
          name:'Reclassify',
          component:Reclassify
        }
      ]
    }
  ]
})
