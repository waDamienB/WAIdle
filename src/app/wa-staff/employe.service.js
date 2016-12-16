const API_URL = "http://localhost:3000/emploi";

export class EmployeService {

    constructor($http) {
        'ngInject';
        this.$http = $http;
    }

    getEmployes() {
        return this.$http({
            method: 'GET',
            url: API_URL
        })
            .then((response) => {
                return response.data;
            })
            .catch(this.handleError);
    }

    handleError(pError) {
        console.error(pError.status, pError.statusText);
    }
}