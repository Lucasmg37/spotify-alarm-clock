import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetDevicesUseCase } from "./GetDevicesUseCase";

class GetDevicesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user } = req;

    const getDevicesUseCase = container.resolve(GetDevicesUseCase);
    const devices = await getDevicesUseCase.execute(user.id);

    return res.send(devices);
  }
}

export { GetDevicesController };
