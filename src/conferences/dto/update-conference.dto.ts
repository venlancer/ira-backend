// conferences/dto/update-conference.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateConferenceDto } from './create-conference.dto';

export class UpdateConferenceDto extends PartialType(CreateConferenceDto) {}
