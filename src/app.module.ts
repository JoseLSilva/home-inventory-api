import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SizeModule } from './size/size.module';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShapeModule } from './shape/shape.module';
import { ConfigAppModule } from './config/config.app.module';
import { MongodbConfigService } from './config/database/mongodb/mongodb.config.service';
import { InventoryLocationModule } from './inventory-location/inventory-location.module';

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
		InventoryLocationModule,
		ConfigAppModule,
		ShapeModule,
		SizeModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
