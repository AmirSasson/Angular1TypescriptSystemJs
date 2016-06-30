import {TextFetcher} from "./services/some-service"

export class MainController {
    static $inject = ['TextFetcher'];
    message: string = "Hello Seed!";
    constructor(private _fetcher: TextFetcher) {
        this.message += ` ${this._fetcher.getTxt()}` ;
    }
}