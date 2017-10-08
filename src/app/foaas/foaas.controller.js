export class FController {
  constructor($timeout, $http, $mdSidenav) {
    'ngInject';
    this._mdSidenav = $mdSidenav;
    this._http = $http;
    console.log('FController');
    this.who = '';
    this.from = '';
    this.fuckOffObject = {};
  }

  offWrapper() {
    console.log(this.who);
    console.log(this.from);
    if (this.who && this.from) {
      this.fuckOff(this.who, this.from)
    }

  }

  fuckOff(who, from) {
    let query = 'http://foaas.com/off/' + who + '/' + from;
    this._http.get(query, {}).then((response) => {
      console.log(response);
      this.fuckOffObject = response.data;
    }, () => {
      console.log('error');
    });
  }

  openLN() {
    this._mdSidenav('left').open();
  }
}
