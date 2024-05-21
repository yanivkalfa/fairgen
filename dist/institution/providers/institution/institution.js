"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionProvider = void 0;
const institution_entity_1 = require("../../entities/institution.entity");
const consts_1 = require("../../../config/consts");
exports.InstitutionProvider = [
    {
        provide: consts_1.INSTITUTION_REPOSITORY,
        useValue: institution_entity_1.default,
    },
];
//# sourceMappingURL=institution.js.map