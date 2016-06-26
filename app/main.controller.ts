import {TextFetcher} from "./services/some-service"

export class MainController {
    static $inject = ['TextFetcher'];
    message: string = "Hello AngularJS, TypeScript & SystemJS";
    constructor(private _fetcher: TextFetcher) {
        this.message += ` From Fetcher: ${this._fetcher.getTxt()}` ;
    }
}