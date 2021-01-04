import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/machine-room',
      component: ()=> import('../components/Index'),
      children:[
        {
          path: '/machine-room',
          name: 'machine-room',
          component: ()=> import('../components/machine-room')
        },
        {
          path: '/machine-info',
          name: 'machine-info',
          component: ()=> import('../components/machine-info')
        },
        {
          path: '/student',
          name: 'student',
          component: ()=> import('../components/student')
        },
      ]
    }
  ]
})
