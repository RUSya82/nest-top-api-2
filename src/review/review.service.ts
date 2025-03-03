import { Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReviewDocument, ReviewModel } from './review.model/review.model';
import { Model } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(ReviewModel.name) private reviewModel: Model<ReviewDocument>) {
  }

  create(dto: CreateReviewDto){
    console.log(dto);
    return this.reviewModel.create(dto)
  }
  getAll(){
    return this.reviewModel.find();
  }
}
