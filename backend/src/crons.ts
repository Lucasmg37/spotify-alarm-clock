import cron from "node-cron";

import { ExecuteAlarmController } from "./modules/alarm/useCases/executeAlarm/ExecuteAlarmController";

const executeAlarmController = new ExecuteAlarmController();

cron.schedule("* * * * *", () => {
  console.log(`⏲️ Executando tarefa ${new Date().toString()}`);
  executeAlarmController.handle();
});

export { cron };
