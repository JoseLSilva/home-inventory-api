import { Document, Types } from 'mongoose';

export interface IInventoryLocation extends Document {
	readonly _id: Types.ObjectId;
	readonly name: string;
	readonly description: string;
	readonly image_url: string;
	readonly created_at: Date;
	readonly updated_at: Date;
}
