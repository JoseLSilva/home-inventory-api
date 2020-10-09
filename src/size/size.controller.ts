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
import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';

@Controller('size')
export class SizeController {
	constructor(private sizeService: SizeService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(
		@Body() createSizeDto: CreateSizeDto,
		@Res() res: Response,
	): Promise<Response> {
		const new_size = await this.sizeService.create(createSizeDto);
		return res.json({
			new_size,
			message: 'Size successfully created',
			status_code: HttpStatus.CREATED,
		});
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	async allSize(
		@Query('order') order: string,
		@Res() res: Response,
	): Promise<Response> {
		const sizes = await this.sizeService.readAll(order);
		return res.json({
			sizes,
			message: 'Sizes found',
			status_code: HttpStatus.OK,
		});
	}

	@Get(':sizeID')
	@HttpCode(HttpStatus.OK)
	async getSize(
		@Param('sizeID') sizeID: string,
		@Res() res: Response,
	): Promise<Response> {
		const size = await this.sizeService.readOne(sizeID);
		return res.json({
			size,
			message: 'Size found',
			status_code: HttpStatus.OK,
		});
	}

	@Put(':sizeID')
	@HttpCode(HttpStatus.OK)
	async updateSize(
		@Param('sizeID') sizeID: string,
		@Body() updateSize: CreateSizeDto,
		@Res() res: Response,
	): Promise<Response> {
		const updated_size = await this.sizeService.update(sizeID, updateSize);
		return res.json({
			updated_size,
			message: 'Size successfully updated',
			status_code: HttpStatus.OK,
		});
	}

	@Delete(':sizeID')
	@HttpCode(HttpStatus.OK)
	async deleteSize(
		@Param('sizeID') sizeID: string,
		@Res() res: Response,
	): Promise<Response> {
		const deleted_size = await this.sizeService.delete(sizeID);
		return res.json({
			deleted_size,
			message: 'Size successfully deleted',
			status_code: HttpStatus.OK,
		});
	}
}
