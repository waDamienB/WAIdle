import './wa-idle.component.css';

class WaIdleController {

    $onInit() {
        this.tempsPerdu = 0;

        this.placesDisponibles = 3;
        this.travailleursDisponibles = 0;

        this.travailleurs = 0;
        this.prixTravailleur = 10;

        this.developpeurs = 0;
        this.prixDeveloppeur = 25;

        this.chefProjet = 0;
        this.prixChefProjet = 2000;

        this.chefProduit = 0;
        this.prixChefProduit = 5000000;
    }

    peutRecruiter() {
        return this.placesDisponibles > 0 && this.tempsPerdu >= this.prixTravailleur;
    }

    perdreTemps($event) {
        this.tempsPerdu += $event;
    }

    recruit($event) {
        this.travailleurs += $event;
        this.tempsPerdu -= this.prixTravailleur;
        this.placesDisponibles--;
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