// conferences/conferences.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConferenceDto } from './dto/create-conference.dto';
import { UpdateConferenceDto } from './dto/update-conference.dto';
import { Conference } from './schemas/conference.schema';

@Injectable()
export class ConferencesService {
  constructor(@InjectModel(Conference.name) private conferenceModel: Model<Conference>) {}

  async create(createConferenceDto: CreateConferenceDto): Promise<Conference> {
    const createdConference = new this.conferenceModel(createConferenceDto);
    return createdConference.save();
  }

  async findAll(): Promise<Conference[]> {
    return this.conferenceModel.find().exec();
  }

  async findOne(id: string): Promise<Conference> {
    return this.conferenceModel.findById(id).exec();
  }

  async update(id: string, updateConferenceDto: UpdateConferenceDto): Promise<Conference> {
    return this.conferenceModel.findByIdAndUpdate(id, updateConferenceDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Conference> {
    return this.conferenceModel.findByIdAndDelete(id).exec();
  }
}
