import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ItemPedido } from './itemPedido.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderItemService {

  constructor(
    @InjectRepository(ItemPedido)
    private readonly repository: Repository<ItemPedido>) {
      
    }

    save(itemPedido: ItemPedido) {
      return this.repository.save(itemPedido);

    }

}
