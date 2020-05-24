import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { Pedido } from './pedido.entity';

@Controller('order')
export class OrderController {

  constructor(private readonly order: OrderService) { }

  @Post()
  save(@Body() order: Pedido) {
    return this.order.save(order)

  }

  @Get()
  FindAll() {
    return this.order.findAll();

  }

  @Get(":id")
  FindById(id: number) {
    return this.order.findById(id);

  }

}
