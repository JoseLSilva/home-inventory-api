import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from './app.config.service';

@Module({
	providers: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
