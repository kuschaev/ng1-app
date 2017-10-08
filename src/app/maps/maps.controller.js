export class MController {
  constructor($timeout, NgMap, $mdSidenav) {
    'ngInject';
    this._mdSidenav = $mdSidenav;
    console.log('MController');
    console.log(NgMap);
    this.address = 'Kyiv';
    NgMap.getMap().then((map) => {
      this.map = map;
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });

  }

  openLN() {
    this._mdSidenav('left').open();
  }

}
