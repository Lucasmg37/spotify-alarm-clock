import cron from "node-cron";

import { ExecuteAlarmController } from "./modules/alarm/useCases/executeAlarm/ExecuteAlarmController";

const executeAlarmController = new ExecuteAlarmController();

// cron.schedule("* * * * *", () => {
//   console.log("⏲️ Executando a tarefa a cada 1 minuto");
//   executeAlarmController.handle();
// });

export { cron };
