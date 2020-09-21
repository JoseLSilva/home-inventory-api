import { Schema } from 'mongoose';

export const ShapeSchema = new Schema(
	{
		name: { type: String, trim: true, required: [true, 'Name is required'] },
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
		versionKey: false,
	},
);
