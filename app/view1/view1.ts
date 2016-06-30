
import {TextFetcher} from "../services/some-service"
import {IUrlRouterProvider, IStateProvider , IStateParamsService} from 'angular-ui-router';

export class View1Controller {
    static $inject = ['TextFetcher','$stateParams']; 
    message: string = "View1Controller";
    constructor(private _fetcher: TextFetcher, private _stateParams :IStateParamsService) {
        
        this.message += ` ${this._fetcher.getTxt()} stateParam: ${this._stateParams['detail']}` ;
    }
}