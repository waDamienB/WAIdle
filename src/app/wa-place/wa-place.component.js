import './wa-place.component.css';

class WaPlaceController {

    peutRecruiter() {
        return this.place.placesPrises >= this.place.placesDisponibles
            || this.tempsPerdu < this.place.prixEmbauche;
    }

    demenage() {
        this.onDemenagement({$event: this.place});
    }


    recrute() {
        this.onRecruit({$event: this.place});
    }
}

export const WaPlaceComponent = {
    template: require('./wa-place.component.html'),
    controller: WaPlaceController,
    bindings: {
        place: '<',
        tempsPerdu: '<',
        onDemenagement: '&',
        onRecruit: '&'
    }
};