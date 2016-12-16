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

    affect(pEmploye) {
        this.onAffectation({$event: {prix: pEmploye.prix, bonusClick: pEmploye.bonusClick}});
        pEmploye.nombre++;
        pEmploye.prix = this._calculerPrix(pEmploye.nombre, pEmploye.prix);
    }

    _calculerPrix(nombre, prix) {
        return Math.floor(prix * Math.pow(1.1, nombre));
    }


}

export const WaStaffComponent = {
    template: require('./wa-staff.component.html'),
    controller: WaStaffControler,
    bindings: {
        travailleursDisponibles: '<',
        tempsPerdu: '<',
        onAffectation: '&'

    }
};