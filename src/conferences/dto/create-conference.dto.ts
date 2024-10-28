// conferences/dto/create-conference.dto.ts
import { IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class SpeakerDto {
  @IsString()
  name: string;

  @IsString()
  img: string;

  @IsString()
  ph_no: string;

  @IsString()
  short_desc: string;
}

class ScheduleDto {
  @IsString()
  dateTime: string;

  @IsString()
  descr: string;
}

export class CreateConferenceDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  short_title?: string;

  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  detail_description?: string;

  @IsString()
  @IsOptional()
  organised_by?: string;

  @IsString()
  @IsOptional()
  venue?: string;

  @IsString()
  id: string;

  @IsString()
  @IsOptional()
  date?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SpeakerDto)
  speakers: SpeakerDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ScheduleDto)
  schedule: ScheduleDto[];
}
