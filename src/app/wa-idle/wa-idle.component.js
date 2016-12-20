import './wa-idle.component.css';
import '../../../node_modules/angular-toastr/dist/angular-toastr.css';

class WaIdleController {

    constructor($interval, toastr) {
        'ngInject';
        this.$interval = $interval;
        this.toastr = toastr;
    }

    $onInit() {
        this.tempsPerdu = 0;
        this.travailleursDisponibles = 0;
        this.bonusEmployes = 0;

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
            this.tempsPerdu -= $event.prix;
            this.bonusEmployes += $event.bonusClick;
            this.travailleursDisponibles--;
    }

    move($event) {
        console.log($event);
    }


    recrutement($event) {
            if (this.premiereEmbauche === false) {
                this._successBonus(3, "Première embauche");
                this.premiereEmbauche = true;
            }
            this.tempsPerdu -= $event;
            this.travailleursDisponibles++;
    }

    debauche($event) {
        this.tempsPerdu -= $event.debauche;
        this.bonusEmployes -= $event.bonusClick;
        this.travailleursDisponibles++;
    }

    _successBonus(bonus, message) {
        this.tempsPerdu += bonus;
        this.toastr.success("+ " + bonus + " secondes", message);

    }

    _autoClicker() {
        this.$interval(() => {
            this.tempsPerdu += this.bonusEmployes
        }, 1000);
    }
}

export const WaIdleComponent = {
    template: require('./wa-idle.component.html'),
    controller: WaIdleController
};


// WEBPACK FOOTER //
// ./src/app/wa-idle/wa-idle.component.js