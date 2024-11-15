import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { MongoIdPipe } from '../common/pipes/mongo-id.pipe';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('quizzes')
@UseGuards(JwtAuthGuard, RolesGuard)
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @Roles('admin', 'teacher')
  create(@Body(ValidationPipe) createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  findAll() {
    return this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.quizService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateQuizDto: UpdateQuizDto,
  ) {
    return this.quizService.update(id, updateQuizDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.quizService.remove(id);
  }
}
