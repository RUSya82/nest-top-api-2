import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReviewModel } from './review.model/review.model';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {
  }

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateReviewDto){
    console.log('review/create');
    return this.reviewService.create(dto)
  }
  @Get('product/:productId')
  async getByProduct(@Param('productId') productId: string){

  }

  @Get()
  getAll(){
    return this.reviewService.getAll();
  }
}
