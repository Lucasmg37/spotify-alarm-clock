import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 } from "uuid";

import { Alarm } from "./Alarm";

@Entity("alarm_calls")
class AlarmCalls {
  @PrimaryColumn()
  uuid: string;

  @Column()
  alarmUuid: string;

  @Column()
  time: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  finished: boolean;

  @ManyToOne(() => Alarm, (alarm) => alarm.alarmCalls)
  alarm: Alarm;

  constructor(uuid) {
    if (!uuid) {
      this.uuid = v4();
    }
  }
}

export { AlarmCalls };
