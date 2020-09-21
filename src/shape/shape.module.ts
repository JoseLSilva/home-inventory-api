import { Module } from '@nestjs/common';
import { ShapeService } from './shape.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ShapeController } from './shape.controller';
import { ShapeSchema } from './schemas/shape.schema';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Shape', schema: ShapeSchema }]),
	],
	providers: [ShapeService],
	controllers: [ShapeController],
})
export class ShapeModule {}
