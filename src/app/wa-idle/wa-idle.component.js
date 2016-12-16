import './wa-idle.component.css';

class WaIdleController {

    constructor($interval) {
        'ngInject';
        this.$interval = $interval;
    }

    $onInit() {
        this.tempsPerdu = 0;

        this.placesDisponibles = 3;
        this.travailleursDisponibles = 0;

        this.bonusEmployes = 0;

        this.travailleurs = 0;
        this.prixTravailleur = 10;

        this.autoClicker();
    }

    peutRecruiter() {

        return (this.placesDisponibles > 0 && this.tempsPerdu >= this.prixTravailleur)
            || this.travailleurs > 0 || this.bonusEmployes > 0;
    }

    perdreTemps($event) {
        this.tempsPerdu += $event;
    }

    affectation($event) {
        this.tempsPerdu -= $event.prix;
        this.bonusEmployes += $event.bonusClick;
        this.travailleursDisponibles--;
    }

    autoClicker() {
        this.$interval(() => {
            this.tempsPerdu += this.bonusEmployes
        }, 1000);
    }

    recruit($event) {
        this.travailleurs += $event;
        this.tempsPerdu -= this.prixTravailleur;
        this.placesDisponibles--;
        this.travailleursDisponibles++;
        this.prixTravailleur = this._calculerPrix(this.travailleurs, this.prixTravailleur);

    }

    _calculerPrix(nombre, prix) {
        return Math.floor(prix * Math.pow(1.1, nombre));
    }

}

export const WaIdleComponent = {
    template: require('./wa-idle.component.html'),
    controller: WaIdleController
};


// WEBPACK FOOTER //
// ./src/app/wa-idle/wa-idle.component.js