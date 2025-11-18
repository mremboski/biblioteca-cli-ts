import { Pessoa } from './Pessoa.js';
import { nonEmpty } from '../utils/validators.js';
export class Membro extends Pessoa {
    _matricula;
    constructor(id, nome, matricula, telefone, endereco) {
        super(id, nome, telefone, endereco);
        this._matricula = nonEmpty('Matrícula', matricula);
    }
    get matricula() { return this._matricula; }
    set matricula(v) { this._matricula = nonEmpty('Matrícula', v); }
    toJSON() { return { id: this.id, createdAt: this.createdAt, nome: this.nome, matricula: this.matricula, telefone: this.telefone, endereco: this.endereco }; }
    static fromJSON(o) { return new Membro(o.id, o.nome, o.matricula, o.telefone, o.endereco); }
    toDisplay() { return `${this.nome} (matrícula ${this.matricula})`; }
}
