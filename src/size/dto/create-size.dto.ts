import { Types } from 'mongoose';

export class CreateSizeDto {
	readonly name: string;
	readonly length: number;
	readonly width: number;
	readonly height: number;
	readonly volumen: number;
	readonly shape_id: Types.ObjectId;
}
