import { v4 } from "uuid";

class Teste {
  uuid?: string;
  name: string;
  lastName?: string;

  constructor() {
    if (!this.uuid) {
      this.uuid = v4();
    }
  }
}

export { Teste };
