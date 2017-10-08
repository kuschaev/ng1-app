import {MController} from './maps.controller';
import {MService} from './maps.service';

let maps =  angular.module('maps', ['ngMap']).service('MService',MService).controller('MController',MController);
export default maps;
