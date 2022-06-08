import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 } from "uuid";

import { Alarm } from "./Alarm";

@Entity("alarm_media")
class AlarmMedia {
  @PrimaryColumn()
  uuid: string;

  @Column()
  mediaType: string;

  @Column()
  mediaService: string;

  @Column()
  references_ids: string;

  @Column()
  volume: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Alarm, (alarm) => alarm.alarmMedia)
  alarms: Alarm[];

  setReferencesIds(references_ids: string[]) {
    this.references_ids = JSON.stringify(references_ids);
  }

  getReferencesIds(): string[] {
    return JSON.parse(this.references_ids);
  }

  constructor(uuid) {
    if (!uuid) {
      this.uuid = v4();
    }
  }
}

export { AlarmMedia };
