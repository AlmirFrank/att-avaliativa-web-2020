import { Injectable } from '@nestjs/common';
import { Pedido } from './pedido.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Pedido)
    private readonly repository: Repository<Pedido>) {

    }

    save(pedido: Pedido) {
      return this.repository.save(pedido);

    }

    findAll() {
      this.repository.find();

    }

    findById(id: number) {
      this.repository.findOne(id);
      
    }

}
