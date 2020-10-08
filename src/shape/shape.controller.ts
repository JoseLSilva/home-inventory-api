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
import { ShapeService } from './shape.service';
import { CreateShapeDto } from './dto/create-shape.dto';

@Controller('shape')
export class ShapeController {
	constructor(private readonly shapeService: ShapeService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async createShape(
		@Body() createShapeDto: CreateShapeDto,
		@Res() res: Response,
	): Promise<Response> {
		const new_shape = await this.shapeService.create(createShapeDto);
		return res.json({
			new_shape,
			message: 'Shape successfully created',
			status_code: HttpStatus.CREATED,
		});
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	async allShape(
		@Query('order') order: string,
		@Res() res: Response,
	): Promise<Response> {
		const shapes = await this.shapeService.readAll(order);
		return res.json({
			shapes,
			message: 'Shapes found',
			status_code: HttpStatus.OK,
		});
	}

	@Get(':shapeID')
	@HttpCode(HttpStatus.OK)
	async getShape(
		@Param('shapeID') shapeID: string,
		@Res() res: Response,
	): Promise<Response> {
		const shape = await this.shapeService.readOne(shapeID);
		return res.json({
			shape,
			message: 'Shape found',
			status_code: HttpStatus.OK,
		});
	}

	@Put(':shapeID')
	@HttpCode(HttpStatus.OK)
	async updateShape(
		@Param('shapeID') shapeID: string,
		@Body() updateShape: CreateShapeDto,
		@Res() res: Response,
	): Promise<Response> {
		const updated_shape = await this.shapeService.update(
			shapeID,
			updateShape,
		);
		return res.json({
			updated_shape,
			message: 'Shape successfully updated',
			status_code: HttpStatus.OK,
		});
	}

	@Delete(':shapeID')
	@HttpCode(HttpStatus.OK)
	async deleteShape(
		@Param('shapeID') shapeID: string,
		@Res() res: Response,
	): Promise<Response> {
		const deleted_shape = await this.shapeService.delete(shapeID);
		return res.json({
			deleted_shape,
			message: 'Shape successfully deleted',
			status_code: HttpStatus.OK,
		});
	}
}
