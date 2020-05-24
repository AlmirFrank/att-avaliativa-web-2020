import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { Cliente } from "src/customer/cliente.entity";

@Entity("pedidos")

export class Pedido {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Número do Pedido', type: 'varchar', length: 15 })
  orderNumber: string;

  @Column({ name: 'Data do Pedido', type: 'date' })
  orderDate: Date;

  @Column({ name: 'Valor Total', type: 'varchar' })
  total: number;

  @ManyToOne(type => Cliente, customer => customer.pedido)
  customer: Cliente[];

}