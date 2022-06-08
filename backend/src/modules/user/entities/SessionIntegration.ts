import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 } from "uuid";

import { User } from "./User";

@Entity("session_integration")
class SessionIntegration {
  @PrimaryColumn()
  uuid?: string;

  @Column()
  userUuid: string;

  @Column()
  integration: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  token?: string;

  @Column()
  refreshToken?: string;

  @ManyToOne(() => User, (user) => user.sessionIntegrations)
  user: User;

  constructor() {
    if (!this.uuid) {
      this.uuid = v4();
    }
  }
}

export { SessionIntegration };
