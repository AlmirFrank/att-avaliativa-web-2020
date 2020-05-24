import { Controller, Post, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Produto } from './produto.entity';

@Controller('product')
export class ProductController {

  constructor(private readonly product: ProductService) { }

  @Post()
  save(product: Produto) {
    return this.product.save(product)

  }

  @Get()
  FindAll() {

    return this.product.findAll();

  }

  @Get(":id")
  FindById(id: number) {
    return this.product.findById(id);

  }

}
