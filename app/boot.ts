import * as angular from 'angular';
import {MainController} from './main.controller';
import {TextFetcher} from "./services/some-service"
import {TextFetcher2} from "./services/some-service2"
import {Application} from "./services/service-in-module"
import * as AppFilters from "./services/filter"
import * as comp from  "./services/module-composite"







// Creating main app module and MainController
angular
    .module('app', [])
    .controller('MainController', MainController)// ["TextFetcher", (tf: TextFetcher) => new MainController(tf)])
    .factory("TextFetcher", () => { return new TextFetcher() })
    .factory("Ser3", ($http: ng.IHttpService, $location: ng.ILocationService) => { return new Application.Services.MyService($http, $location) })
    .factory("TextFetcher2", () => TextFetcher2)
    .filter("myFilter", AppFilters.Application.Filters.myFilter)
    .value('myValService',"YO!!") ;


// Bootstrap the angular app module
angular
    .bootstrap(document.documentElement, ['app']);