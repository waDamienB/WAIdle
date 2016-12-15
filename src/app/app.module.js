import angular from 'angular';

import {WaIdleComponent} from './wa-idle/wa-idle.component';
import {WaCounterComponent} from './wa-counter/wa-counter.component';
import {WaRecruitComponent} from './wa-recruit/wa-recruit.component';
import {WaEmployeComponent} from './wa-employe/wa-employe.component';

angular
    .module("waGame", [])

    .component("waIdle", WaIdleComponent)
    .component("waCounter", WaCounterComponent)
    .component("waRecruit", WaRecruitComponent)
    .component("waEmploye", WaEmployeComponent)

