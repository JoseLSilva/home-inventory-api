import { Document, Types } from 'mongoose';

export interface IShape extends Document {
	readonly _id: Types.ObjectId;
	readonly name: string;
	readonly createdAt: Date;
	readonly updatedAt: Date;
}
