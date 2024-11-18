import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

// Define the registration schema as a subdocument
@Schema()
export class Registration {
    @Prop([{
        participation_type: { type: String, required: true },
        early_bird_price: { type: Number, required: true },
        mid_term_price: { type: Number, required: true },
        late_registration_price: { type: Number, required: true },
        early_bird_end_date: { type: Date, required: true },
        mid_term_end_date: { type: Date, required: true },
        late_registration_end_date: { type: Date, required: true },
      }]) // Array of participation types
      registration_types: {
        participation_type: string;
        early_bird_price: number;
        mid_term_price: number;
        late_registration_price: number;
        early_bird_end_date: Date;
        mid_term_end_date: Date;
        late_registration_end_date: Date;
      }[];
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
