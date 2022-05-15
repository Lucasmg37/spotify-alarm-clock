import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity("teste")
class Teste {
  @PrimaryColumn()
  uuid?: string;

  @Column()
  name: string;

  @Column()
  lastName?: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at?: Date;

  constructor() {
    if (!this.uuid) {
      this.uuid = v4();
    }
  }
}

export { Teste };
