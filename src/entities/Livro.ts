import { BaseEntity } from '../core/BaseEntity.js';
import { nonEmpty } from '../utils/validators.js';

export class Livro extends BaseEntity {
  private _titulo: string;
  private _autor: string;
  private _ano: number;
  private _disponivel: boolean;

  constructor(id: string, titulo: string, autor: string, ano: number, disponivel = true){
    super(id);
    this._titulo = nonEmpty('Título', titulo);
    this._autor = nonEmpty('Autor', autor);
    this._ano =  ano;
    this._disponivel = disponivel;
  }

  get titulo(){ return this._titulo; }
  set titulo(v: string){ this._titulo = nonEmpty('Título', v); }
  get autor(){ return this._autor; }
  set autor(v: string){ this._autor = nonEmpty('Autor', v); }
  get ano(){ return this._ano; }
  set ano(v: number){ this._ano =  v; }
  get disponivel(){ return this._disponivel; }
  set disponivel(v: boolean){ this._disponivel = v; }

  toJSON(){ return { id: this.id, createdAt: this.createdAt, titulo: this._titulo, autor: this._autor, ano: this._ano, disponivel: this._disponivel }; }
  static fromJSON(o: any){ return new Livro(o.id, o.titulo, o.autor, o.ano, o.disponivel); }

  toLine(): string { return `${this.titulo} — ${this.autor} (${this.ano}) [${this.disponivel?'Disponível':'Emprestado'}]`; } 
}
