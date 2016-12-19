const API_URL = "http://localhost:3000/places";

export class PlaceService {

    constructor($http, toastr) {
        "ngInject";
        this.$http = $http;
        this.toastr = toastr;
    }

    getPlaces() {
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
        console.error(pError);
    }
}