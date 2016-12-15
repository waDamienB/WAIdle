import './wa-counter.component.css';

class WaCounterController {

    pertedetemp() {
        this.onPerte({$event: 1});
    }

}

export const WaCounterComponent = {
    template: require('./wa-counter.component.html'),
    controller: WaCounterController,
    bindings: {
        tempsPerdu: '<',
        onPerte: '&'
    }
};