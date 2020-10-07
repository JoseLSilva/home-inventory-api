import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigAppModule } from './config/config.app.module';
import { MongodbConfigService } from './config/database/mongodb/mongodb.config.service';
import { ShapeModule } from './shape/shape.module';
import { SizeModule } from './size/size.module';

@Module({
	imports: [
		MongooseModule.forRootAsync({
			imports: [ConfigAppModule],
			useFactory: async (configMongodbService: MongodbConfigService) => ({
				uri: `${configMongodbService.URI}/home-inventory`,
				useFindAndModify: false,
			}),
			inject: [MongodbConfigService],
		}),
		ConfigAppModule,
		ShapeModule,
		SizeModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
