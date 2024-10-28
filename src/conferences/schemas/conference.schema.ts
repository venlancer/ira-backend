// conferences/schemas/conference.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Conference extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  short_title: string;

  @Prop()
  description: string;

  @Prop()
  detail_description: string;

  @Prop()
  organised_by: string;

  @Prop()
  venue: string;

  @Prop({ required: true, unique: true })
  id: string;

  @Prop()
  @Prop([{ name: String, img: String, ph_no: String, short_desc: String }])  // Array of speaker objects
  speakers: { name: string; img: string; ph_no: string; short_desc: string }[];

  @Prop([{ dateTime: String, descr: String }])  // Array of schedule objects
  schedule: { dateTime: string; description: string }[];
}

export const ConferenceSchema = SchemaFactory.createForClass(Conference);
