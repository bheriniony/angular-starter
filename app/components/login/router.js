import template from './login.tpl.html';
export default
/* @ngInject */
function($stateProvider){
  $stateProvider
    .state('login',{
      url: '/login',
      controller: 'LoginController as ctrl',
      template: template
    })
}
