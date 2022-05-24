import { Router } from "express";

import { CreateAlarmController } from "../modules/alarm/useCases/createAlarm/CreateAlarmController";

const alarmRoutes = Router();

const createAlarm = new CreateAlarmController();

alarmRoutes.post("/", createAlarm.handle);

export { alarmRoutes };
