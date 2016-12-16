import './wa-recruit.component.css';

class WaRecruitController {

    recrutement() {
        this.onRecruit({ $event: 1 });
    }

    pasDePlacesDisponibles() {
        return this.placesDisponibles === 0;
    }
}

export const WaRecruitComponent = {
    template: require('./wa-recruit.component.html'),
    controller: WaRecruitController,
    bindings: {
        prixTravailleur: '<',
        placesDisponibles: '<',
        onRecruit: '&'
    }
};