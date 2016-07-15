import * as angular from 'angular';
import {IUrlRouterProvider, IStateProvider } from 'angular-ui-router';
import {MainController} from './main.controller';
import {TextFetcher} from "./services/some-service"
import {TextFetcher2} from "./services/some-service2"
import {Application} from "./services/service-in-module"
import * as AppFilters from "./services/filter"
import {View1Controller} from './view1/view1'
import {View2Controller} from './view2/view2'
import {SomeComponent, SomeComponentController} from './components/some-component'

Promise.all([
    System.import('angular-ui-router'),
    System.import('components'),
    //add more dependencies if needed here:
    //System.import('module 3'),
    //System.import('module 4'),
    //...
    
])
    .then(() => {
        var appModule = angular
            .module('app', ['ui.router', 'app.component'])
            .controller('MainController', MainController)
            .controller('View1Controller', View1Controller)
            .controller('View2Controller', View2Controller)
            .factory("TextFetcher", () => { return new TextFetcher() })
            .factory("ServiceInModule", ($http: ng.IHttpService, $location: ng.ILocationService) => { return new Application.Services.ServiceInModule($http, $location) })
            .factory("TextFetcher2", () => TextFetcher2)
            .filter("myFilter", AppFilters.Application.Filters.myFilter)


            .value('myValService', "YO!!");

        appModule
            .config(['$urlRouterProvider', '$stateProvider', function (route: IUrlRouterProvider, stateProvider: IStateProvider) {
                route.otherwise("/state1/");


                stateProvider
                    .state('state1', {
                        url: "/state1/:detail",
                        templateUrl: 'app/view1/view1.html',
                        controller: 'View1Controller as vm'
                    })

                    .state('state2', {
                        url: "/state2",
                        templateUrl: 'app/view2/view2.html',
                        controller: View2Controller,
                        
                    })

                     .state('state3', {
                        url: "/state3/:detail/:viewId",
                        templateUrl: 'app/view1/view1.html',
                        controller: 'View1Controller as vm'//same view as View1
                    })
                     .state('state4', {
                        url: "/state4",
                        template:'<some-component></some-component>',                        
                    })
            }])

        // Bootstrap the angular app module
        angular
            .bootstrap(document.documentElement, ['app']);
    });