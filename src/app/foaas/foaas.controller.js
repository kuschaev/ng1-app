export class FController {
  constructor($timeout, $http, $mdSidenav) {
    'ngInject';
    this._mdSidenav = $mdSidenav;
    this._http = $http;
    console.log('FController');
    this.who = '';
    this.from = '';
    this.goFYObject = {};
  }

  fyWrapper() {
    console.log(this.who);
    console.log(this.from);
    if (this.who && this.from) {
      this.goFY(this.who, this.from)
    }

  }

  goFY(who, from) {
    let query = 'http://foaas.com/gfy/' + who + '/' + from;
    this._http.get(query, {}).then((response) => {
      console.log(response);
      this.goFYObject = response.data;
    }, () => {
      console.log('error');
    });
  }
/*
  clearInputs() {
    this.who = '';
    this.from = '';
  }
*/
  openLN() {
    this._mdSidenav('left').open();
  }

}
