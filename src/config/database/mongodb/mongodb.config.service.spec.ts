import { Test, TestingModule } from '@nestjs/testing';
import { MongodbConfigService } from './mongodb.config.service';
import { ConfigModule } from '@nestjs/config';
import mongodbConfig from './mongodb.config';

describe('MongodbConfigService', () => {
	let service: MongodbConfigService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [ConfigModule.forRoot({ load: [mongodbConfig] })],
			providers: [MongodbConfigService],
		}).compile();

		service = module.get<MongodbConfigService>(MongodbConfigService);
	});

	it('should be a string', () => {
		expect(typeof service.URI).toBe('string');
	});
});
