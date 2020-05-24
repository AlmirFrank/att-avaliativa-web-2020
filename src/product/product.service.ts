import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>) {

    }

    save(produto: Produto) {
      return this.repository.save(produto);

    }

    findAll() {
      return this.repository.find();

    }

    findById(id: number) {
      this.repository.findOne(id);
      
    }
    
}
