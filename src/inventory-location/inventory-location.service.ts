import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IInventoryLocation } from './interfaces/inventory-location.interface';
import { CreateInventoryLocationDto } from './dto/create-inventory-location.dto';

@Injectable()
export class InventoryLocationService {
	constructor(
		@InjectModel('InventoryLocation')
		private inventoryLocation: Model<IInventoryLocation>,
	) {}

	async create(
		createInventoryLocationDto: CreateInventoryLocationDto,
	): Promise<IInventoryLocation> {
		const newInventoryLocation = new this.inventoryLocation(
			createInventoryLocationDto,
		);
		return await newInventoryLocation.save();
	}

	async readAll(order?: string): Promise<IInventoryLocation[]> {
		return await this.inventoryLocation
			.find()
			.sort({ created_at: order === 'desc' ? -1 : 1 });
	}

	async readOne(_id: string): Promise<IInventoryLocation> {
		return await this.inventoryLocation.findOne({ _id });
	}

	async update(
		_id: string,
		updateInventoryLocation: CreateInventoryLocationDto,
	): Promise<IInventoryLocation> {
		return await this.inventoryLocation.findOneAndUpdate(
			{ _id },
			updateInventoryLocation,
			{ new: true },
		);
	}

	async delete(_id: string): Promise<IInventoryLocation> {
		return await this.inventoryLocation.findOneAndDelete({ _id });
	}
}
