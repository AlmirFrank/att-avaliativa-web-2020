import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Pedido } from "src/order/pedido.entity";

@Entity("clientes")

export class Cliente {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Nome', type: 'varchar', length: 70 })
  name: string;

  @Column({ name: 'CPF', type: 'varchar', length: 30 })
  cpf: string;

  @Column({ name: 'Endereço', type: 'varchar', length: 40 })
  address: string;
  
  @OneToMany(type => Pedido, order => order.customer)
  orders: Pedido[];
  pedido: Cliente[];

}