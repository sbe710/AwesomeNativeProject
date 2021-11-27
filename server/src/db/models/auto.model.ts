import { model, Schema } from 'mongoose';

interface IAuto {
    autoNumber: string;
    autoName: string;
}

const schema = new Schema<IAuto>(
    {
        autoNumber: { type: String, required: true },
        autoName: { type: String, required: true },
    },
    { versionKey: false }
);

export const AutoModel = model<IAuto>('Auto', schema);
