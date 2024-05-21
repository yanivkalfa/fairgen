import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
export declare const databaseProviders: {
    inject: (typeof ConfigService)[];
    provide: string;
    useFactory: (config: ConfigService) => Promise<Sequelize>;
}[];
