import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
	prefix: process.env.MONGODB_PREFIX || 'mongodb',
	host: process.env.MONGODB_HOST || 'localhost',
	port: process.env.MONGODB_PORT || 27017,
}));
