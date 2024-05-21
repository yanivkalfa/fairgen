import { Sequelize } from 'sequelize-typescript';
import * as path from 'path';
import { ConfigService } from '@nestjs/config';
import { SEQUELIZE } from 'src/config/consts';

export const databaseProviders = [
  {
    inject: [ConfigService],
    provide: SEQUELIZE,
    useFactory: async (config: ConfigService) => {
      /* if we want to use postgress
      import url from 'url';
      const db = url.format({
        protocol: 'postgres',
        slashes: true,
        hostname: config.get('DATABASE_HOST'),
        port: config.get('DATABASE_PORT'),
        pathname: config.get('DATABASE_NAME'),
        auth: `${config.get('DATABASE_NAME')}:${config.get('DATABASE_PASSWORD')}`
      });
      const sequelize = new Sequelize(
        db,
        {
          dialect: 'postgres',
          models: [__dirname + '/models'],
          logging: false
        }
      );
      */

      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './database.sqlite3',
        database: 'fairgenDb',
        models: [path.resolve(__dirname, '../../**/*.entity.{ts,js}')],
        dialectOptions: {
          useUTC: true,
        },
        timezone: '+00:00', 
      });

      await sequelize.sync({force: false});

      return sequelize;
    },
  },
];