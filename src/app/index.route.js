export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      abstract:true
    }).state('app.foaas', {
      url: 'foaas',
      templateUrl: 'app/foaas/foaas.html',
      controller: 'FController',
      controllerAs: 'fCtrl'
    }).state('app.maps', {
      url: 'maps',
      templateUrl: 'app/maps/maps.html',
      controller: 'MController',
      controllerAs: 'mCtrl'
    });
  //google api code (unused): AIzaSyBVCfw3LliigqcFFzNKdcGU-wYTbrWHiwA
  $urlRouterProvider.otherwise('/maps');
}
