import {TextFetcher} from "./services/some-service";
import {Application } from "./services/service-in-module";

export class MainController {
    static $inject = ["ServiceInModule", "TextFetcher"];
    message: string = "Hello Seed!";


    constructor(private _serviceInModule: Application.Services.IServiceInModule, private _fetcher: TextFetcher) {
        this.message += ` ${this._fetcher.getTxt()}`;        
        this._serviceInModule.GetAll((d) => this.message += (<any>d).version);


    }
}