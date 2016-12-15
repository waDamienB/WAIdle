class WaEmployeController {

}

export const WaEmployeComponent = {
    template: require('./wa-employe.component.html'),
    controller: WaEmployeController,
    bindings: {
        name: '<',
        onAffect: '&'
    }
};