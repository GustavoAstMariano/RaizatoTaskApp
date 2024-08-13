import Vue from 'vue';
import Router from 'vue-router';
import TaskList from '../components/TaskList.vue';
import TaskDetails from '../components/TaskDetails.vue';
import TaskForm from '../components/TaskForm.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/tasks/:id',
      name: 'TaskDetails',
      component: TaskDetails
    },
    {
      path: '/create',
      name: 'TaskForm',
      component: TaskForm
    },
    {
      path: '/edit/:id',
      name: 'EditTask',
      component: TaskForm
    }
  ]
});
