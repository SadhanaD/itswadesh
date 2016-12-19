import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import counties from './counties';

export class MainController {
  /*@ngInject*/
  constructor() {
    this.counties = counties;
    this.county = counties[0];
  }
}

export default angular.module('afApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
