"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProvider = void 0;
const user_entity_1 = require("../../entities/user.entity");
const consts_1 = require("../../../config/consts");
exports.UserProvider = [
    {
        provide: consts_1.USER_REPOSITORY,
        useValue: user_entity_1.default,
    },
];
//# sourceMappingURL=user.js.map