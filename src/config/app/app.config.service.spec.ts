import { Test, TestingModule } from '@nestjs/testing';
import { AppConfigService } from './app.config.service';
import { ConfigModule } from '@nestjs/config';
import appConfig from './app.config';

describe('AppConfigService', () => {
	let service: AppConfigService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [ConfigModule.forRoot({ load: [appConfig] })],
			providers: [AppConfigService],
		}).compile();

		service = module.get<AppConfigService>(AppConfigService);
	});

	it('should be number', () => {
		expect(typeof service.PORT).toBe('number');
	});
});
