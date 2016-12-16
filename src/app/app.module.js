import angular from 'angular';

import {WaIdleComponent} from './wa-idle/wa-idle.component';
import {WaCounterComponent} from './wa-counter/wa-counter.component';
import {WaRecruitComponent} from './wa-recruit/wa-recruit.component';
import {WaStaffComponent} from './wa-staff/wa-staff.component';
import {WaEmployeComponent} from './wa-employe/wa-employe.component';
import {EmployeService} from './wa-staff/employe.service';

angular
    .module("waGame", [])

    .service("EmployeService", EmployeService)

    .component("waIdle", WaIdleComponent)
    .component("waCounter", WaCounterComponent)
    .component("waRecruit", WaRecruitComponent)
    .component("waStaff", WaStaffComponent)
    .component("waEmploye", WaEmployeComponent)

