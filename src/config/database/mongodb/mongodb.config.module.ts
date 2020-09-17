import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongodbConfigService } from './mongodb.config.service';

@Module({
	providers: [ConfigService, MongodbConfigService],
	exports: [MongodbConfigService],
})
export class MongodbConfigModule {}
