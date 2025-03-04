import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductModel } from './product.model/product.model';
import { FindProductDto } from './dto/find-product.dto';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { IsMongoIdPipe } from '../pipes/isMongoId.pipe';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {
  }
  @Post('create')
  async create(@Body() dto: CreateProductDto){
    return this.productService.create(dto)
  }

  @Get()
  async getAll(){
    return this.productService.getAll();
  }
  @Get(':id')
  async get(@Param('id', IsMongoIdPipe) id:string){
    const product = await this.productService.getOne(id);
    if(!product){
      throw new NotFoundException(`product with id=${id} not found`)
    }
    return product;
  }
  @Delete(':id')
  async delete(@Param('id', IsMongoIdPipe) id: string){
    return this.productService.delete(id);
  }

  @Patch(':id')
  async update(@Param('id', IsMongoIdPipe) id: string, @Body() body: Partial<CreateProductDto>){

  }
  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto){

  }
}
