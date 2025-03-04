import { HttpException, Injectable, NotFoundException, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReviewDocument, ReviewModel } from './review.model/review.model';
import { Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ProductService } from '../product/product.service';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel.name) private reviewModel: Model<ReviewDocument>,
    private readonly productService: ProductService
  ) {
  }

  async create(dto: CreateReviewDto){
    const {productId} = dto;
    const product = await this.productService.getOne(productId);
    if(!product){
      throw new NotFoundException(`Product with id=${productId} not found`)
    }
    return this.reviewModel.create(dto)
  }
  async getAll(): Promise<ReviewModel[]>{
    return this.reviewModel.find();
  }

  async getByProductId(productId: string): Promise<ReviewModel[]>{
    return this.reviewModel.find({productId: new Types.ObjectId(productId)});
  }
}
