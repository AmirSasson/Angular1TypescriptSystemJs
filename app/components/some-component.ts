import * as angular from "angular";
import {TextFetcher} from "../services/some-service";

export class SomeComponent implements ng.IComponentOptions {

    // public bindings: any;
    public controller: any;
    public templateUrl: string;
    public controllerAs: string;

    constructor() {
        /*      this.bindings = {};
                  textBinding: '@',
                  dataBinding: '<',
                  functionBinding: '&'
              };*/
        this.controllerAs = "vm";
        this.controller = SomeComponentController;
        this.templateUrl = "app/Components/some-component.html";
    }

}

export class SomeComponentController {
    public vm = this;
    public msg: string;

    constructor() {
        this.msg = "SomeComponentController msg";
    }
}

let mod = angular.module("app.component", [])
    .component("someComponent", new SomeComponent())
    .controller("SomeComponentController", SomeComponentController);
// mod.component('someComponent', new SomeComponent());