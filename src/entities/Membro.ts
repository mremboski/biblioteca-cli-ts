import { Pessoa } from './Pessoa.js';
import { nonEmpty } from '../utils/validators.js';

export class Membro extends Pessoa {
  private _matricula: string;
  constructor(id: string, nome: string, matricula: string, telefone: string, endereco: string){
    super(id, nome, telefone, endereco);
    this._matricula = nonEmpty('Matrícula', matricula);
  }
  get matricula(){ return this._matricula; }
  set matricula(v: string){ this._matricula = nonEmpty('Matrícula', v); }
  override toJSON(){ return { id: this.id, createdAt: this.createdAt, nome: this.nome, matricula: this.matricula, telefone: this.telefone, endereco: this.endereco }; }
  static fromJSON(o: any){ return new Membro(o.id, o.nome, o.matricula, o.telefone, o.endereco); }
  override toDisplay(): string { return `${this.nome} (matrícula ${this.matricula})`; }
}
