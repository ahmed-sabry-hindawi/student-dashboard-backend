import {
  IsString,
  IsDate,
  IsNumber,
  IsNotEmpty,
  Min,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  readonly course: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly topic: string;

  @IsDate()
  @Type(() => Date)
  readonly dueDate: Date;

  @IsNumber()
  @Min(1)
  readonly duration: number;

  @IsNumber()
  @Min(0)
  readonly totalMarks: number;
}
