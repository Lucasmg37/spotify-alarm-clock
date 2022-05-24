import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 } from "uuid";

import { Alarm } from "./Alarm";

@Entity("alarm_device")
class AlarmDevice {
  @PrimaryColumn()
  uuid: string;

  @Column()
  serviceDevice: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  name: string;

  @Column()
  reference_id: string;

  @OneToMany(() => Alarm, (alarm) => alarm.alarmDevice)
  alarms: Alarm[];

  constructor(uuid) {
    if (!uuid) {
      this.uuid = v4();
    }
  }
}

export { AlarmDevice };
