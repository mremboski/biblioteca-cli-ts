export interface IRepository<T> {
  all(): Promise<T[]>;
  findById(id: string): Promise<T | undefined>;
  add(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  remove(id: string): Promise<void>;
}
