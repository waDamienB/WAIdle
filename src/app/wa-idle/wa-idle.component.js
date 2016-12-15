import './wa-idle.component.css';

class WaIdleController {

    $onInit() {
        this.tempsPerdu = 0;

        this.placesDisponibles = 3;
        this.travailleursDisponibles = 0;

        this.travailleurs = 0;
        this.prixTravailleur = 10;

        this.employes = [
            {
                poste: 'Développeur',
                prix: 25,
                image: 'dev.png',
                nombre: 0
            },
            {
                poste: 'Chef de Projet',
                prix: 2000,
                image: 'cproj.jpg',
                nombre: 0
            },
            {
                poste: 'Chef de Produit',
                prix: 5000000,
                image: 'cp.png',
                nombre: 0
            }
        ];
    }

    affect(pEmploye) {
        var employe = this.employes.find((employe) => pEmploye.poste === employe.poste);
        employe.nombre++;
        this.tempsPerdu -= employe.prix;
        employe.prix = this._calculerPrix(employe.nombre, employe.prix);
        this.travailleursDisponibles--;
    }

    peutRecruiter() {
        return this.placesDisponibles > 0 && this.tempsPerdu >= this.prixTravailleur;
    }

    perdreTemps($event) {
        this.tempsPerdu += $event;
    }

    peutAffecter(employe) {
        return this.travailleursDisponibles > 0 && this.tempsPerdu >= employe.prix;
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