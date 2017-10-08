import {FController} from './foaas.controller';
import {FService} from './foaas.service';

let foaas =  angular.module('foaas', []).service('FService',FService).controller('FController',FController);
export default foaas;