import './wa-employe.component.css';

class WaEmployeControler {

    affectable() {
        console.log(this.travailleursDisponibles);
        return this.tempsPerdu < this.employe.prix || this.travailleursDisponibles === 0;
    }

    affecter() {
        this.onAffectation({$event: this.employe});
    }

}

export const WaEmployeComponent = {
    template: require('./wa-employe.component.html'),
    controller: WaEmployeControler,
    bindings: {
        employe: '<',
        tempsPerdu: '<',
        travailleursDisponibles: '<',
        onAffectation: '&'
    }
};