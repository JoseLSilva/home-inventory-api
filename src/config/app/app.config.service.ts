import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
	constructor(private readonly configService: ConfigService) {}

	/**
	 * Get the applicarion port
	 *
	 * @readonly
	 * @type {number}
	 * @memberof AppConfigService
	 */
	get PORT(): number {
		return this.configService.get<number>('app.port');
	}
}
