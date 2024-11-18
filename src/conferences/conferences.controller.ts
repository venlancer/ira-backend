// conferences/conferences.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ConferencesService } from './conferences.service';
import { CreateConferenceDto } from './dto/create-conference.dto';
import { UpdateConferenceDto } from './dto/update-conference.dto';
import { Registration } from './schemas/registration.schema';
import { UpdateRegistrationDto } from './dto/update-registraion.dto';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { Conference } from './schemas/conference.schema';

@Controller('conferences')
export class ConferencesController {
  constructor(private readonly conferencesService: ConferencesService) {}

  @Post()
  create(@Body() createConferenceDto: CreateConferenceDto) {
    return this.conferencesService.create(createConferenceDto);
  }

  @Get()
  findAll() {
    return this.conferencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conferencesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateConferenceDto: UpdateConferenceDto) {
    return this.conferencesService.update(id, updateConferenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conferencesService.remove(id);
  }

   // Add registration details to a conference
   @Post(':id/registration-details')
   async addRegistrationDetails(
     @Param('id') conferenceId: string,
     @Body() registrationDetails: CreateRegistrationDto[]
   ): Promise<Conference> {
     return this.conferencesService.addRegistrationDetails(conferenceId, registrationDetails);
   }
 
   // Update registration details for a conference
   @Put(':conferenceId/registration-details/:registrationId')
   async updateRegistrationDetails(
     @Param('conferenceId') conferenceId: string,
     @Param('registrationId') registrationId: string,
     @Body() updateRegistrationDto: UpdateRegistrationDto
   ): Promise<Registration> {
     return this.conferencesService.updateRegistrationDetails(conferenceId, registrationId, updateRegistrationDto);
   }
}
