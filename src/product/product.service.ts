import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDocument, ProductModel } from './product.model/product.model';
import { Model, Types } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(ProductModel.name) private productModel: Model<ProductDocument>) {
  }

  async create(dto: CreateProductDto){
    return this.productModel.create(dto);
  }

  async getAll(){
    return this.productModel.find();
  }

  async delete(id){
    return this.productModel.findByIdAndDelete(id).exec();
  }

  async getOne(id){
    return this.productModel.findById(new Types.ObjectId(id));
  }
}
