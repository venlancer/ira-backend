import { IsArray, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateRegistrationDto {
  @IsString()
  readonly conference_id?: string; // Optional conference ID to update

  @IsArray()
  @IsOptional()
  @Type(() => RegistrationTypeDto) // Apply the RegistrationTypeDto class to validate each object inside the array
  readonly registration_types?: RegistrationTypeDto[];
}

// RegistrationType DTO to validate each item in the `registration_types` array
class RegistrationTypeDto {
  @IsString()
  @IsOptional()
  participation_type?: string;

  @IsNumber()
  @IsOptional()
  early_bird_price?: number;

  @IsNumber()
  @IsOptional()
  mid_term_price?: number;

  @IsNumber()
  @IsOptional()
  late_registration_price?: number;

  @IsDate()
  @IsOptional()
  early_bird_end_date?: Date;

  @IsDate()
  @IsOptional()
  mid_term_end_date?: Date;

  @IsDate()
  @IsOptional()
  late_registration_end_date?: Date;
}
