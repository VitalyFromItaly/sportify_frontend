export type TCacheStructure = {
  expire: number,
  value: any;
};

export interface IBrowserStorage {
  get<T> (key: string, tag: string): T | null;
  set<T> (key: string, tag: string, value: any, ttl: number): T;
  remove(key: string, tag: string): this;
  clear(): this;
  checkStorageExpiryDate(): void
}
