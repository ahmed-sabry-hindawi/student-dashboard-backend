import { IsString, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateAnnouncementDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(1000)
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  readonly author: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  readonly department: string;
}
