// conferences/conferences.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConferenceDto } from './dto/create-conference.dto';
import { UpdateConferenceDto } from './dto/update-conference.dto';
import { Conference } from './schemas/conference.schema';

import { v4 as uuidv4 } from 'uuid';
import { Registration } from './schemas/registration.schema';
import { UpdateRegistrationDto } from './dto/update-registraion.dto';
import { CreateRegistrationDto } from './dto/create-registration.dto';
@Injectable()
export class ConferencesService {
  constructor(@InjectModel(Conference.name) private conferenceModel: Model<Conference>,
  @InjectModel(Registration.name) private readonly registrationModel: Model<Registration>,
) {}

  async create(createConferenceDto: CreateConferenceDto): Promise<Conference> {
    const id = uuidv4();
    const createdConference = new this.conferenceModel({ ...createConferenceDto, id });
    debugger;
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
  // Add registration details to a specific conference
  async addRegistrationDetails(
    conferenceId: string,
    registrationDetails: CreateRegistrationDto[]
  ): Promise<Conference> {
    // Create the registration records
    const createdRegistrations = await this.registrationModel.insertMany(registrationDetails);

    // Add the registrations to the conference
    return this.conferenceModel.findByIdAndUpdate(
      conferenceId,
      { $set: { registration_details: createdRegistrations } },
      { new: true }
    ).populate('registration_details').exec();
  }

  // Update registration details for a specific conference
  async updateRegistrationDetails(
    conferenceId: string,
    registrationId: string,
    updateRegistrationDto: UpdateRegistrationDto
  ): Promise<Registration> {
    // Find and update the registration document
    return this.registrationModel.findByIdAndUpdate(
      registrationId,
      updateRegistrationDto,
      { new: true }
    ).exec();
  }
  async remove(id: string): Promise<Conference> {
    return this.conferenceModel.findByIdAndDelete(id).exec();
  }
}
