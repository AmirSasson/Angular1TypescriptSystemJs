
export module Application.Services {

    export interface IServiceInModule {
        GetAll(successCallback: Function): void;
    }

    export class ServiceInModule implements IServiceInModule {

        http: ng.IHttpService;
        location: ng.ILocationService;

        constructor($http: ng.IHttpService, $location: ng.ILocationService) {
            this.http = $http;
            this.location = $location;
        }

        GetAll(successCallback: Function): void {
            //this.http.get(this.location.absUrl()).success((data, status) => {
            this.http.get('data.json').success((data, status) => {
                successCallback(data);
            }).error(error => {
                successCallback(error);
            });
        }
    }
}