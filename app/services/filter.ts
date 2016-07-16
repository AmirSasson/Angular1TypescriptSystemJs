
export namespace Application.Filters {
    export function myFilter(myValService: string) {
        return function (input: string) {
            //  filter stuff here
            return `${input} + Filter: ${myValService}`;
        };
    }
}