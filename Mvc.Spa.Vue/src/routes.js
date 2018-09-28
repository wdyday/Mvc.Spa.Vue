import App from './App.vue';
import Login from './pages/Login.vue';

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
  { path: '/', component: App, name: '首页' },
  { path: '/Dispatch/PlanSchedule', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/login', component: Login }
];

export default routes;
