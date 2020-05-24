import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("produtos")

export class Produto {
  
  @PrimaryGeneratedColumn({type: 'int'})
  id: number;

  @Column({ name: 'Nome do Item', type: 'varchar', length: 30 })
  name: string;

  @Column({ name: 'Código', type: 'varchar', length: 10 })
  code: string;

  @Column({ name: 'Preço', type: 'int' })
  price: number;

  @Column({ name: 'Quantidade em Estoque', type: 'int' })
  stockQuantity: number;
}