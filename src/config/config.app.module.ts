import { Module } from '@nestjs/common';
import appConfig from './app/app.config';
import { ConfigModule } from '@nestjs/config';
import { AppConfigModule } from './app/app.config.module';

@Module({
	imports: [ConfigModule.forRoot({ load: [appConfig] }), AppConfigModule],
})
export class ConfigAppModule {}
