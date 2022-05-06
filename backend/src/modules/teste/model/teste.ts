import { v4 } from "uuid";

class Teste {
  uuid?: string;
  name: string;

  constructor() {
    if (!this.uuid) {
      this.uuid = v4();
    }
  }
}

export { Teste };
