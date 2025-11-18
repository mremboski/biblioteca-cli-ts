export class DomainError extends Error {
    constructor(msg) { super(msg); this.name = 'DomainError'; }
}
export class NotFoundError extends Error {
    constructor(entity, id) { super(id ? `${entity} com id ${id} não encontrado.` : `${entity} não encontrado.`); this.name = 'NotFoundError'; }
}
export class ValidationError extends Error {
    constructor(msg) { super(msg); this.name = 'ValidationError'; }
}
