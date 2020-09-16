import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { AppConfigService } from './config/app/app.config.service';

const logger = new Logger('Main');

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const appConfig: AppConfigService = app.get(AppConfigService);
	await app.listen(appConfig.PORT);
	logger.log(`🚀 Server ready at http://localhost:${appConfig.PORT}`);
}
bootstrap();
