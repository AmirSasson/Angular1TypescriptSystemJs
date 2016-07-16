import {TextFetcher} from "./services/some-service";
import {Application } from "./services/service-in-module";
import {ILogService} from "angular";

export class MainController {
    static $inject = ["ServiceInModule", "TextFetcher", "$log"];
    message: string = "Hello Seed!";


    constructor(private _serviceInModule: Application.Services.IServiceInModule, private _fetcher: TextFetcher, private log: ILogService) {
        this.message += ` ${this._fetcher.getTxt()}`;
        this._serviceInModule.GetAll((d) => this.message += (<any>d).version);
        this.log.info(`Ctor MainController ${this.message}`);
    }
}