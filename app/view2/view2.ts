
import {TextFetcher} from "../services/some-service"

export class View2Controller {
    static $inject = ['TextFetcher'];
    message: string = "View2Controller !!! AngularJS, TypeScript & SystemJS";   
    constructor(private _fetcher: TextFetcher) {       
       this.message += ` View2Controller!! From Fetcher: ${this._fetcher.getTxt()}` ;
    }
} 