"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlarmUtils = void 0;

class AlarmUtils {
  static getNextAlarm(time, nextDay, weekDays) {
    const nowBr = new Date(new Date().setUTCHours(-1));
    const nowSys = new Date().getTime();
    const timeAlarm = new Date(`${nowBr.getFullYear()}-${nowBr.getMonth() + 1}-${nowBr.getDate()} ${time}`).getTime(); // return next util day

    if (nowSys >= timeAlarm) {
      if (nextDay) {
        const nextDate = new Date(timeAlarm);
        nextDate.setDate(nextDate.getDate() + 1);
        return nextDate;
      }

      const weekDayNow = new Date(timeAlarm).getDay();
      const weekDaysNumbers = this.converArrayWeekPTtoNumber(weekDays);
      let nextDayNumber = 0;
      let nextDayDiference = 0;
      weekDaysNumbers.forEach(weekDayNumber => {
        const difference = weekDayNumber - weekDayNow;

        if (difference > 0) {
          if (difference < nextDayDiference || nextDayDiference === 0) {
            nextDayDiference = difference;
            nextDayNumber = weekDayNumber;
          }
        }
      });

      if (nextDayDiference === 0) {
        nextDayNumber = Math.min(...weekDaysNumbers);
        nextDayDiference = nextDayNumber - weekDayNow + 7;
      }

      const nextDate = new Date(timeAlarm);
      nextDate.setDate(nextDate.getDate() + nextDayDiference);
      return nextDate;
    } // return alarm for today


    return new Date(timeAlarm);
  }

  static converArrayWeekPTtoNumber(weekDays) {
    return weekDays.map(weekDay => {
      return this.convertWeekNamePtToNumber(weekDay);
    });
  }

  static convertWeekNamePtToNumber(weekName) {
    switch (weekName) {
      case "DOM":
        return 6;

      case "SEG":
        return 0;

      case "TER":
        return 1;

      case "QUA":
        return 2;

      case "QUI":
        return 3;

      case "SEX":
        return 4;

      default:
        return 5;
    }
  }

}

exports.AlarmUtils = AlarmUtils;