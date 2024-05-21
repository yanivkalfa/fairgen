"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityProvider = void 0;
const consts_1 = require("../../../config/consts");
const facility_entity_1 = require("../../entities/facility.entity");
exports.FacilityProvider = [
    {
        provide: consts_1.FACILITY_REPOSITORY,
        useValue: facility_entity_1.default,
    },
];
//# sourceMappingURL=facility.js.map