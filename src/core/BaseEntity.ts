export abstract class BaseEntity {
  constructor(public readonly id: string, public createdAt: Date = new Date()) {}
  abstract toJSON(): Record<string, unknown>;
}
