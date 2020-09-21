import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IShape } from './interfaces/shape.interface';
import { CreateShapeDto } from './dto/create-shape.dto';

@Injectable()
export class ShapeService {
	constructor(@InjectModel('Shape') private shapeModel: Model<IShape>) {}

	async create(createShapeDto: CreateShapeDto): Promise<IShape> {
		const createdShape = new this.shapeModel(createShapeDto);
		return await createdShape.save();
	}

	async readAll(order?: string): Promise<IShape[]> {
		return await this.shapeModel
			.find()
			.sort({ created_at: order === 'desc' ? -1 : 1 });
	}

	async readOne(_id: string): Promise<IShape> {
		const shape = await this.shapeModel.findOne({ _id });
		return shape;
	}

	async update(_id: string, updateShape: CreateShapeDto): Promise<IShape> {
		const updatedShape = await this.shapeModel.findOneAndUpdate(
			{ _id },
			updateShape,
			{ new: true },
		);
		return updatedShape;
	}

	async delete(_id: string): Promise<IShape> {
		const deletedShape = await this.shapeModel.findByIdAndDelete({ _id });
		return deletedShape;
	}
}
