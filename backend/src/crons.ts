import cron from "node-cron";

import { ExecuteAlarmController } from "./modules/alarm/useCases/executeAlarm/ExecuteAlarmController";

const executeAlarmController = new ExecuteAlarmController();

cron.schedule("* * * * *", async () => {
  console.log(`⏲️ Executando tarefa ${new Date().toString()}`);
  try {
    await executeAlarmController.handle();
  } catch (error) {
    console.error("❌");
    console.error(error);
  }
});

export { cron };
