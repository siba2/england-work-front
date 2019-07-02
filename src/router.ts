import Vue from 'vue'
import Router from 'vue-router'
import Employees from './views/employees/index.vue'
import Menu from './views/menu/index.vue'
import WorkHours from './views/work_hours/index.vue'
import Expenses from './views/expenses/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/employees',
      name: 'employees',
      component: Employees
    },
    {
      path: '/work-hours',
      name: 'work-hours',
      component: WorkHours
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: Expenses
    },
  ]
})
