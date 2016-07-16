import {ILogService} from "angular";

export namespace Application.Services {

    export interface IServiceInModule {
        GetAll(successCallback: (data: any) => void): void;
    }

    export class ServiceInModule implements IServiceInModule {

        http: ng.IHttpService;
        location: ng.ILocationService;

        constructor($http: ng.IHttpService, $location: ng.ILocationService, private log: ILogService) {
            this.http = $http;
            this.location = $location;
        }

        GetAll(successCallback: (data: any) => void): void {
            // this.http.get(this.location.absUrl()).success((data, status) => {
            this.http.get("data.json").success((data, status) => {
                this.log.info(`GetAll Success: ${status}`);
                successCallback(data);
            }).error(error => {
                this.log.error(`GetAll error: ${error}`);
                successCallback(error);
            });
        }
    }
}