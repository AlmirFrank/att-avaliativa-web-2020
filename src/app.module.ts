import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { OrderController } from './order/order.controller';
import { ProductController } from './product/product.controller';
import { CustomerService } from './customer/customer.service';
import { OrderService } from './order/order.service';
import { ProductService } from './product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './product/produto.entity';
import { Pedido } from './order/pedido.entity';
import { Cliente } from './customer/cliente.entity';
import { ItemPedido } from './order-item/itemPedido.entity';
import { OrderItemController } from './order-item/order-item.controller';
import { OrderItemService } from './order-item/order-item.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Aranha0600',
      database: 'web-avaliation',
      entities: [
        Cliente,
        Pedido,
        ItemPedido,
        Produto,
      ],

      synchronize: true,
      logging: true,

    }),

    TypeOrmModule.forFeature([
      Cliente,
      Pedido,
      ItemPedido,
      Produto,
    ])

  ],
  
  controllers: [AppController, CustomerController, OrderController, ProductController, OrderItemController],
  providers: [AppService, CustomerService, OrderService, ProductService, OrderItemService],
})
export class AppModule {}
