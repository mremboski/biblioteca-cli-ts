import { BaseEntity } from '../core/BaseEntity.js';
import { nonEmpty } from '../utils/validators.js';
export class Pessoa extends BaseEntity {
    _nome;
    _telefone;
    _endereco;
    constructor(id, nome, telefone, endereco) {
        super(id);
        this._nome = nonEmpty('Nome', nome);
        this._telefone = nonEmpty('Telefone', telefone);
        this._endereco = nonEmpty('Endereço', endereco);
    }
    get nome() { return this._nome; }
    set nome(v) { this._nome = nonEmpty('Nome', v); }
    get telefone() { return this._telefone; }
    set telefone(v) { this._telefone = nonEmpty('Telefone', v); }
    get endereco() { return this._endereco; }
    set endereco(v) { this._endereco = nonEmpty('Endereço', v); }
}
