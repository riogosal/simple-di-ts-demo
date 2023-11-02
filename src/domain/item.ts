export type DomainItem = {
  id: number;
  name: string;
};

export interface ItemRepository {
  getItem(id: number): Promise<DomainItem>;
}
