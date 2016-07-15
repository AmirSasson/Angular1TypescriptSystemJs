import * as angular from 'angular';
import {TextFetcher} from "../services/some-service"
//  import {} from 'an'

//var mod = angular.module('app.comp', []);

export class SomeComponent implements ng.IComponentOptions {

    //    public bindings: any;
    public controller: any;
    public templateUrl: string;
    //template = `<h1>Component Template! {{vm.msg}}</h1>`;
    public controllerAs = 'vm';    
    constructor() {
        /*      this.bindings = {};
                  textBinding: '@',
                  dataBinding: '<',
                  functionBinding: '&'
              };*/
        this.controller = SomeComponentController;
        this.templateUrl = 'app/Components/some-component.html';
    }

}

export class SomeComponentController {
    public vm = this;
    public msg: string;

    constructor() {
        
        this.msg = 'SomeComponentController msg ';
    }
}

//mod.component('someComponent', new SomeComponent());