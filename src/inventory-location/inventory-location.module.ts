import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryLocationService } from './inventory-location.service';
import { InventoryLocationController } from './inventory-location.controller';
import { InventoryLocationSchema } from './schemas/inventory-location.schema';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'InventoryLocation',
				schema: InventoryLocationSchema,
				collection: 'inventory-locations',
			},
		]),
	],
	controllers: [InventoryLocationController],
	providers: [InventoryLocationService],
})
export class InventoryLocationModule {}
