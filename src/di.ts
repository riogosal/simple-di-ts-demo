import { Container, token } from "brandi";
import { ItemRepository } from "./domain/item";
import { Firestore } from "./firestore-package";
// import { FirestoreItemRepository } from "./Item.firestore";
import { HttpClient } from "./http-client";
import { HttpItemRepository } from "./Item.http";

export const TOKENS = {
  ItemRepository: token<ItemRepository>("ItemRepository"),
  Firestore: token<Firestore>("Firestore"),
  HttpClient: token<HttpClient>("HttpClient"),
};

export type Item = {
  id: number;
  name: string;
};

export const container = new Container();

container
  .bind(TOKENS.ItemRepository)
  .toInstance(HttpItemRepository)
  .inSingletonScope();

// container.bind(TOKENS.Firestore).toInstance(Firestore).inSingletonScope();

container.bind(TOKENS.HttpClient).toInstance(HttpClient).inSingletonScope();
