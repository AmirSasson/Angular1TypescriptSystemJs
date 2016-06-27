
import {TextFetcher} from "../services/some-service"

export class View1Controller {
    static $inject = ['TextFetcher'];
    message: string = "View1 !!! AngularJS, TypeScript & SystemJS";
    constructor(private _fetcher: TextFetcher) {
        this.message += ` View1!! From Fetcher: ${this._fetcher.getTxt()}` ;
    }
}