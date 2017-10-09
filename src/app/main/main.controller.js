export class MainController {
  constructor($timeout,$state) {
    'ngInject';
    console.log($state);
    this._state = $state;
    console.log('main');
    this.routes = [
      {
        route: 'app.foaas',
        name: 'FOAAS'
      }, {
        route: 'app.maps',
        name: 'Maps'
      }
    ];

  }

  goToRoute(route) {
    console.log(route);
    this._state.go(route);
  }

}
