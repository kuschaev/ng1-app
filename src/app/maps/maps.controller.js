export class MController {
  constructor($timeout, NgMap, $mdSidenav) {
    'ngInject';
    this._mdSidenav = $mdSidenav;
    console.log('MController');
    console.log(NgMap);
    this.address = 'Troieshchyna';
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

  getRandomLocation() {
    /*
    Need to do this properly. Right now throws:
    InvalidValueError: setTitle: not a string
    js?callback=lazyLoadCallback:43
    */
    this.address = new google.maps.LatLng( (Math.random()*(85*2)-85), (Math.random()*(180*2)-180) );
    this.map.setZoom(6);
  }

  getRayonLocation() {
    this.address = 'Troieshchyna';
    this.map.setZoom(13);
  }

}
