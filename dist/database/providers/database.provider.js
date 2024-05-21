"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const path = require("path");
const config_1 = require("@nestjs/config");
const consts_1 = require("../../config/consts");
exports.databaseProviders = [
    {
        inject: [config_1.ConfigService],
        provide: consts_1.SEQUELIZE,
        useFactory: async (config) => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'sqlite',
                storage: './database.sqlite3',
                database: 'fairgenDb',
                models: [path.resolve(__dirname, '../../**/*.entity.{ts,js}')],
                dialectOptions: {
                    useUTC: true,
                },
                timezone: '+00:00',
            });
            await sequelize.sync({ force: false });
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.provider.js.map