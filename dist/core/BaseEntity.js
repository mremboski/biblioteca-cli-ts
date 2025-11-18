export class BaseEntity {
    id;
    createdAt;
    constructor(id, createdAt = new Date()) {
        this.id = id;
        this.createdAt = createdAt;
    }
}
