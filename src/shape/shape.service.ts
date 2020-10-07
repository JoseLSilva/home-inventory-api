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
		return await this.shapeModel.findOne({ _id });
	}

	async update(_id: string, updateShape: CreateShapeDto): Promise<IShape> {
		return await this.shapeModel.findOneAndUpdate({ _id }, updateShape, {
			new: true,
		});
	}

	async delete(_id: string): Promise<IShape> {
		return await this.shapeModel.findByIdAndDelete({ _id });
	}
}
