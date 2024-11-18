import { Module } from '@nestjs/common';
import { ConferencesService } from './conferences.service';
import { ConferencesController } from './conferences.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConferenceSchema } from './schemas/conference.schema';
import { RegistrationSchema } from './schemas/registration.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Conference', schema: ConferenceSchema },
    { name: 'Registration', schema: RegistrationSchema }
  ])
],
 
  providers: [ConferencesService],
  controllers: [ConferencesController]
})
export class ConferencesModule {}
