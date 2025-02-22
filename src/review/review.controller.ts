import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>){

  }
  @Get('product/:productId')
  async getByProduct(@Param('productId') productId: string){

  }
}
