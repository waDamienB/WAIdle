class WaLocationController {

    constructor(PlaceService) {
        'ngInject';
        this.PlaceService = PlaceService;
    }

    $onInit() {
        this.PlaceService.getPlaces()
            .then((places) => {
                this.places = places;
            })
    }

    peutDemenager(place) {
        return place.prix <= this.tempsPerdu;
    }

    demenagement($event) {
        this.onMoving({$event : $event});
    }

    recrute($event) {
        $event.placesPrises++;
        this.onRecrutement({$event: $event.prixEmbauche });
        $event.prixEmbauche = this._calculerPrix($event.placesPrises, $event.prixEmbauche);
    }

    _calculerPrix(nombre, prix) {
        return Math.floor(prix * Math.pow(1.1, nombre));
    }


}

export const WaLocationComponent = {
    template: require('./wa-location.component.html'),
    controller: WaLocationController,
    bindings: {
        tempsPerdu: "<",
        onMoving: "&",
        onRecrutement: '&'
    }
};