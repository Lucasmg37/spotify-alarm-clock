import { container } from "tsyringe";

import { ExecuteAlarmUseCase } from "./ExecuteAlarmUseCase";

class ExecuteAlarmController {
  async handle(): Promise<void> {
    const executeAlarmUseCase = container.resolve(ExecuteAlarmUseCase);
    await executeAlarmUseCase.execute();
  }
}

export { ExecuteAlarmController };
