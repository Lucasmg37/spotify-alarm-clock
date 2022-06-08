import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 } from "uuid";

import { AlarmCalls } from "./AlarmCalls";
import { AlarmDevice } from "./AlarmDevice";
import { AlarmMedia } from "./AlarmMedia";

@Entity("alarm")
class Alarm {
  @PrimaryColumn()
  uuid: string;

  @Column()
  userUuid: string;

  @Column()
  name: string;

  @Column()
  time: string;

  @Column()
  repeat: boolean;

  @Column()
  weekDays: string;

  @Column()
  endAt: Date;

  @Column()
  active: boolean;

  @Column()
  nextAlarmDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => AlarmDevice, (alarmDevice) => alarmDevice.alarms)
  alarmDevice: AlarmDevice;

  @ManyToOne(() => AlarmMedia, (alarmMedia) => alarmMedia.alarms)
  alarmMedia: AlarmMedia;

  @OneToMany(() => AlarmCalls, (alarmCalls) => alarmCalls.alarm)
  alarmCalls: AlarmCalls[];

  setWeekDays(weekDays: string[]) {
    this.weekDays = JSON.stringify(weekDays);
  }

  getWeekDays(): string[] {
    return JSON.parse(this.weekDays);
  }

  constructor(uuid) {
    if (!uuid) {
      this.uuid = v4();
    }
  }
}

export { Alarm };
