import {
	Res,
	Get,
	Put,
	Body,
	Post,
	Param,
	Query,
	Delete,
	HttpCode,
	HttpStatus,
	Controller,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateInventoryLocationDto } from './dto/create-inventory-location.dto';
import { InventoryLocationService } from './inventory-location.service';

@Controller('inventory-location')
export class InventoryLocationController {
	constructor(private inventoryLocationService: InventoryLocationService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async createInventoryLocation(
		@Body() createInventoryLocation: CreateInventoryLocationDto,
		@Res() res: Response,
	): Promise<Response> {
		const new_inventory_location = await this.inventoryLocationService.create(
			createInventoryLocation,
		);
		return res.json({
			new_inventory_location,
			message: 'Inventory Location successfully created',
			status_code: HttpStatus.CREATED,
		});
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	async getAllInventoryLocation(
		@Query('order') order: string,
		@Res() res: Response,
	): Promise<Response> {
		const inventory_locations = await this.inventoryLocationService.readAll(
			order,
		);
		return res.json({
			inventory_locations,
			message: 'Inventory Location found',
			status_code: HttpStatus.OK,
		});
	}

	@Get(':inventoryLocationID')
	@HttpCode(HttpStatus.OK)
	async getInventoryLocation(
		@Param('inventoryLocationID') inventoryLocationID: string,
		@Res() res: Response,
	): Promise<Response> {
		const inventory_location = await this.inventoryLocationService.readOne(
			inventoryLocationID,
		);
		return res.json({
			inventory_location,
			message: 'Inventory Location found',
			status_code: HttpStatus.OK,
		});
	}

	@Put(':inventoryLocationID')
	@HttpCode(HttpStatus.OK)
	async updateInventoryLocation(
		@Param('inventoryLocationID') inventoryLocationID: string,
		@Body() updateInventoryLocationDto: CreateInventoryLocationDto,
		@Res() res: Response,
	): Promise<Response> {
		const updated_inventory_location = await this.inventoryLocationService.update(
			inventoryLocationID,
			updateInventoryLocationDto,
		);
		return res.json({
			updated_inventory_location,
			message: 'Inventory Location successfully updated',
			status_code: HttpStatus.OK,
		});
	}

	@Delete(':inventoryLocationID')
	@HttpCode(HttpStatus.OK)
	async deleteInventoryLocation(
		@Param('inventoryLocationID') inventoryLocationID: string,
		@Res() res: Response,
	): Promise<Response> {
		const deleted_inventory_location = await this.inventoryLocationService.delete(
			inventoryLocationID,
		);
		return res.json({
			deleted_inventory_location,
			message: 'Inventory Location successfully deleted',
			status_code: HttpStatus.OK,
		});
	}
}
