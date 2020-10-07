import { Schema } from 'mongoose';

export const SizeSchema = new Schema(
	{
		name: String,
		length: Number,
		width: Number,
		height: Number,
		volumen: Number,
		shape_id: { type: Schema.Types.ObjectId, ref: 'Shape' },
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
		versionKey: false,
	},
);
