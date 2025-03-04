import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReviewModel } from './review.model/review.model';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { IsMongoIdPipe } from '../pipes/isMongoId.pipe';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {
  }

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateReviewDto){
    return this.reviewService.create(dto)
  }
  @Get('product/:productId')
  async getByProduct(@Param('productId', IsMongoIdPipe) productId: string){
    return this.reviewService.getByProductId(productId);
  }

  @Get()
  getAll(){
    return this.reviewService.getAll();
  }
}
