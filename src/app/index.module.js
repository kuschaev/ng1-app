/* global malarkey:false, moment:false */
import foaas from './foaas/foaas.module';
import maps from './maps/maps.module';

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

console.log(foaas);
angular.module('ng1', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', foaas.name, maps.name])

  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController);
