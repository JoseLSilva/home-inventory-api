import { Schema } from 'mongoose';

export const InventoryLocationSchema = new Schema(
	{
		name: { type: String, trim: true },
		description: { type: String, trim: true },
		image_url: { type: String, trim: true },
	},
	{
		timestamps: { createdAt: 'created:at', updatedAt: 'updated_at' },
		versionKey: false,
	},
);
