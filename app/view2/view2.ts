
import {TextFetcher} from "../services/some-service";

export class View2Controller {
    static $inject = ["TextFetcher"];
    message: string = "View2Controller";
    constructor(private _fetcher: TextFetcher) {
       this.message += ` ${this._fetcher.getTxt()}`;
    }
} 