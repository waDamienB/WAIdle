import './wa-employe.component.css';

class WaEmployeControler {

    affectable() {
        return this.tempsPerdu < this.employe.prix || this.travailleursDisponibles === 0;
    }

    debauchable() {
        return this.tempsPerdu < this.employe.prix || this.employe.nombre === 0;
    }

    affecter() {
        this.onAffectation({$event: this.employe});
    }

    debaucher() {
        this.onDebauche({$event: this.employe})
    }

}

export const WaEmployeComponent = {
    template: require('./wa-employe.component.html'),
    controller: WaEmployeControler,
    bindings: {
        employe: '<',
        tempsPerdu: '<',
        travailleursDisponibles: '<',
        onAffectation: '&',
        onDebauche: '&'
    }
};