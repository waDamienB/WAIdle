import angular from 'angular';
import angularToastr from 'angular-toastr';
import LocalStorageModule from 'angular-local-storage';

import {WaIdleComponent} from './wa-idle/wa-idle.component';
import {WaCounterComponent} from './wa-counter/wa-counter.component';
import {WaRecruitComponent} from './wa-recruit/wa-recruit.component';
import {WaStaffComponent} from './wa-staff/wa-staff.component';
import {WaEmployeComponent} from './wa-employe/wa-employe.component';
import {WaLocationComponent} from './wa-location/wa-location.component';
import {WaPlaceComponent} from './wa-place/wa-place.component';

import {EmployeService} from './wa-staff/employe.service';
import {PlaceService} from './wa-location/place.service';

import {DecimalPosition} from './wa-idle/decimalPosition.filter';

import {LocalStorageConfig} from './local-storage.config';

angular
    .module("waGame", [
        angularToastr,
        LocalStorageModule
    ])

    .service("EmployeService", EmployeService)
    .service("PlaceService", PlaceService)

    .filter("decimalPosition", DecimalPosition)

    .config(LocalStorageConfig)

    .component("waIdle", WaIdleComponent)
    .component("waCounter", WaCounterComponent)
    .component("waRecruit", WaRecruitComponent)
    .component("waStaff", WaStaffComponent)
    .component("waEmploye", WaEmployeComponent)
    .component("waLocation", WaLocationComponent)
    .component("waPlace", WaPlaceComponent)