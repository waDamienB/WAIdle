import './wa-recruit.component.css';

class WaRecruitController {

    recrutement() {
        this.onRecruit({ $event: 1 });
    }

}

export const WaRecruitComponent = {
    template: require('./wa-recruit.component.html'),
    controller: WaRecruitController,
    bindings: {
        prixTravailleur: '<',
        onRecruit: '&'
    }
};