import { injected } from "brandi";
import { Firestore } from "./firestore-package";
import { TOKENS } from "./di";
import { ItemRepository } from "./domain/item";

export type FirestoreDataItem = {
  id: number;
  name: string;
};

export class FirestoreItemRepository implements ItemRepository {
  firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  public async getItem(id: number): Promise<FirestoreDataItem> {
    return {
      id: 1,
      name: "test",
    };
  }
}

injected(FirestoreItemRepository, TOKENS.Firestore);
