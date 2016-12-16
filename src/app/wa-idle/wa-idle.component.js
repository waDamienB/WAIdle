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

        this._autoClicker();

        /* Succes */

        this.premiereEmbauche = false;
    }

    peutRecruiter() {
        if (this.premiereEmbauche === false) {
            return this.prixTravailleur <= this.tempsPerdu;
        } else {
            return this.premiereEmbauche;
        }
    }

    perdreTemps($event) {
        this.tempsPerdu += $event;
    }

    affectation($event) {
        if (this.tempsPerdu >= $event.prix) {
            this.tempsPerdu -= $event.prix;
            this.bonusEmployes += $event.bonusClick;
            this.travailleursDisponibles--;
        }
    }

    recruit($event) {
        if (this.tempsPerdu >= this.prixTravailleur) {
            if (this.premiereEmbauche === false) {
                this._successBonus(3, "Première embauche");
                this.premiereEmbauche = true;
            }
            this.travailleurs += $event;
            this.tempsPerdu -= this.prixTravailleur;
            this.placesDisponibles--;
            this.travailleursDisponibles++;
            this.prixTravailleur = this._calculerPrix(this.travailleurs, this.prixTravailleur);
        }
    }

    _successBonus(bonus, message) {
        this.tempsPerdu += bonus;
    }

    _autoClicker() {
        this.$interval(() => {
            this.tempsPerdu += this.bonusEmployes
        }, 1000);
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