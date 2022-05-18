import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 } from "uuid";

import { SessionIntegration } from "./SessionIntegration";

@Entity("user")
class User {
  @PrimaryColumn()
  uuid?: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  isPremium: boolean;

  @Column()
  disabled: boolean;

  @Column()
  integrationData: string;

  @Column()
  image?: string;

  @Column()
  integration: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => SessionIntegration, (session) => session.user)
  sessionIntegrations: SessionIntegration[];

  constructor() {
    if (!this.uuid) {
      this.uuid = v4();
    }
  }

  public getIntegrationData(): object {
    return JSON.parse(this.integrationData);
  }

  public setIntegrationData(data: object): void {
    this.integrationData = JSON.stringify(data);
  }
}

export { User };
