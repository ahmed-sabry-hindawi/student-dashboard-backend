import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Quiz extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  course: string;

  @Prop({ required: true })
  topic: string;

  @Prop({ required: true })
  dueDate: Date;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  totalMarks: number;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
