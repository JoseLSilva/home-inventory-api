import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ISize } from './interfaces/size.interface';
import { CreateSizeDto } from './dto/create-size.dto';

@Injectable()
export class SizeService {
	constructor(@InjectModel('Size') private sizeModel: Model<ISize>) {}

	async create(createSizeDto: CreateSizeDto): Promise<ISize> {
		const newSize = new this.sizeModel(createSizeDto);
		return await newSize.save();
	}

	async readAll(order?: string): Promise<ISize[]> {
		return await this.sizeModel
			.find()
			.sort({ created_at: order === 'desc' ? -1 : 1 });
	}

	async readOne(_id: string): Promise<ISize> {
		const size = await this.sizeModel
			.findOne({ _id })
			.populate('shape_id', 'name');
		return size;
	}

	async update(_id: string, updateSize: CreateSizeDto): Promise<ISize> {
		return await this.sizeModel.findOneAndUpdate({ _id }, updateSize, {
			new: true,
		});
	}

	async delete(_id: string): Promise<ISize> {
		return await this.sizeModel.findOneAndDelete({ _id });
	}
}
