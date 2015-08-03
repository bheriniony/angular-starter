import router from './router';
import LoginController from './LoginController';

export default angular.module('app.login',[
  'ui.router'
])
  .config(router)
  .controller('LoginController',LoginController);
