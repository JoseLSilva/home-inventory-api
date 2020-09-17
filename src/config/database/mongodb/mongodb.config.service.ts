import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongodbConfigService {
	constructor(private readonly configService: ConfigService) {}

	/**
	 * Get mongodb port
	 *
	 * @readonly
	 * @private
	 * @type {number}
	 * @memberof MongodbConfigService
	 */
	private get PORT(): number {
		return this.configService.get<number>('mongodb.port');
	}

	/**
	 * Get mongodb host
	 *
	 * @readonly
	 * @private
	 * @type {string}
	 * @memberof MongodbConfigService
	 */
	private get HOST(): string {
		return this.configService.get<string>('mongodb.host');
	}

	/**
	 * Get the prefix of mongodb
	 *
	 * @readonly
	 * @private
	 * @type {string}
	 * @memberof MongodbConfigService
	 */
	private get PREFIX(): string {
		return this.configService.get<string>('mongodb.prefix');
	}

	/**
	 * Get the mongodb url structure
	 *
	 * @readonly
	 * @type {string}
	 * @memberof MongodbConfigService
	 */
	get URI(): string {
		return `${this.PREFIX}://${this.HOST}:${this.PORT}`;
	}
}
