'use strict';

import 'normalize.css/normalize.css';
import 'html5-boilerplate-npm/css/main.css';

import './app.scss';

import './vendors';

import login from './components/login/login';
//import version from './components/version/version';

angular.module('app', [
  'ui.router',
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  login.name
])
  .config(
  /* @ngInject */
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
