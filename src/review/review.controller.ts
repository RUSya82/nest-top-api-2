import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model/review.model';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {
  }
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>){

  }
  @Get('product/:productId')
  async getByProduct(@Param('productId') productId: string){

  }
}
