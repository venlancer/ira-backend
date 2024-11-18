// conferences/dto/create-registration.dto.ts
import { IsString, IsNumber, IsDateString, IsOptional, IsArray } from 'class-validator';

export class CreateRegistrationDto {
  @IsString()
  participation_type: string; // Delegate (In-Person)

  @IsNumber()
  early_bird_price: number;

  @IsNumber()
  mid_term_price: number;

  @IsOptional()
  @IsString()
  banner_image?: string;

  @IsOptional()
  @IsArray()
  carousel?: { url: string; description: string }[];
  @IsNumber()
  late_registration_price: number;

  @IsDateString()
  early_bird_end_date: Date;

  @IsDateString()
  mid_term_end_date: Date;

  @IsDateString()
  late_registration_end_date: Date;
}
