import { container } from "tsyringe";

import { GetMeUseCase } from "./GetMeUseCase";

class GetMeController {
  async handle(req, res): Promise<Response> {
    const { user } = req;
    const getMeUseCase = container.resolve(GetMeUseCase);
    const userData = await getMeUseCase.execute(user.id);
    return res.send(userData);
  }
}

export { GetMeController };
