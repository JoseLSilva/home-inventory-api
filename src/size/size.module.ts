import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SizeController } from './size.controller';
import { SizeSchema } from './schemas/size.schema';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Size', schema: SizeSchema }])],
	providers: [SizeService],
	controllers: [SizeController],
})
export class SizeModule {}
