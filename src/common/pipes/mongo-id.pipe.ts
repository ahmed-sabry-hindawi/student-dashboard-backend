import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class MongoIdPipe implements PipeTransform<string> {
  transform(value: string) {
    if (!isValidObjectId(value)) {
      throw new BadRequestException('Invalid MongoDB ID');
    }
    return value;
  }
}
