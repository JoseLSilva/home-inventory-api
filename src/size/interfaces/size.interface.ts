import { Document, Types } from 'mongoose';

export interface ISize extends Document {
	readonly _id: Types.ObjectId;
	readonly name: string;
	readonly length: number;
	readonly width: number;
	readonly height: number;
	readonly volumen: number;
	readonly shape_id: any;
	readonly created_at: Date;
	readonly updated_at: Date;
}
