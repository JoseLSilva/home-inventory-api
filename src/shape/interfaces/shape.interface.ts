import { Document, Types } from 'mongoose';

export interface IShape extends Document {
	readonly _id: Types.ObjectId;
	readonly name: string;
	readonly created_at: Date;
	readonly updated_at: Date;
}
