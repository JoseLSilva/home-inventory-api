import { Module } from '@nestjs/common';
import appConfig from './app/app.config';
import { ConfigModule } from '@nestjs/config';
import { AppConfigModule } from './app/app.config.module';
import mongodbConfig from './database/mongodb/mongodb.config';
import { MongodbConfigModule } from './database/mongodb/mongodb.config.module';

@Module({
	imports: [
		ConfigModule.forRoot({ load: [appConfig, mongodbConfig] }),
		AppConfigModule,
		MongodbConfigModule,
	],
	exports: [MongodbConfigModule],
})
export class ConfigAppModule {}
