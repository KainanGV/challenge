import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Vehicle {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  vehicle: string;

  @Column()
  brand: string;

  @Column()
  year: number;

  @Column()
  description: string;

  @Column()
  sold: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    this.id = this.id ?? uuid();
  }
}
