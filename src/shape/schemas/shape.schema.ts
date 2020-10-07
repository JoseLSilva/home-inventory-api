import { Schema } from 'mongoose';

export const ShapeSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			required: [true, '{PATH} is required'],
		},
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
		versionKey: false,
	},
);
