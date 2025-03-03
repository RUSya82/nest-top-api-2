import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './product.model/product.model';
import { FindProductDto } from './dto/find-product.dto';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

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
  async get(@Param('id') id:string){

  }
  @Delete(':id')
  async delete(@Param('id') id: string){

  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: ProductModel){

  }
  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto){

  }
}
