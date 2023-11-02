import { injected } from "brandi";
import { DomainItem, ItemRepository } from "./domain/item";
import { HttpClient } from "./http-client";
import { TOKENS } from "./di";

export class HttpItemRepository implements ItemRepository {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async getItem(id: number): Promise<DomainItem> {
    await this.http.GET();
    return {
      id: id,
      name: "test",
    };
  }
}

injected(HttpItemRepository, TOKENS.HttpClient);
