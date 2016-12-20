import './wa-staff.component.css';

class WaStaffControler {
    constructor(EmployeService) {
        'ngInject';
        this.EmployeService = EmployeService;
    }

    $onInit() {
        this.EmployeService.getEmployes()
            .then((employes) => {
                this.employes = employes;
            })
    }

    peutAffecter(employe) {
        return (this.travailleursDisponibles > 0 && this.tempsPerdu >= employe.prix)
            || employe.nombre > 0;
    }

    noMoreStaff() {
        return this.travailleursDisponibles === 0;
    }

    affect($event) {
        this.onAffectation({$event: {prix: $event.prix, bonusClick: $event.bonusClick}});
        $event.nombre++;
        $event.prix = this._augmenterPrix($event.nombre, $event.prix);
        $event.debauche = this._augmenterPrix($event.nombre, $event.debauche);
    }

    debauche($event) {
        console.log($event);
        this.onDebaucher({$event: {debauche: $event.debauche, bonusClick: $event.bonusClick}});
        $event.prix = this._baisserPrix($event.nombre, $event.prix);
        $event.debauche = this._baisserPrix($event.nombre, $event.debauche);
        $event.nombre--;
    }

    _augmenterPrix(nombre, prix) {
        return Math.floor(prix * Math.pow(1.1, nombre));
    }

    _baisserPrix(nombre, prix) {
        return Math.ceil(prix / Math.pow(1.1, nombre));
    }
}

export const WaStaffComponent = {
    template: require('./wa-staff.component.html'),
    controller: WaStaffControler,
    bindings: {
        travailleursDisponibles: '<',
        tempsPerdu: '<',
        onAffectation: '&',
        onDebaucher: '&'

    }
};