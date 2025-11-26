import { BaseEntity } from '../core/BaseEntity.js';
import { nonEmpty } from '../utils/validators.js';

export abstract class Pessoa extends BaseEntity {
  protected _nome: string;
  protected _telefone: string;
  protected _endereco: string;
  constructor(id: string, nome: string, telefone: string, endereco: string){
    super(id);
    this._nome = nonEmpty('Nome', nome);
    this._telefone = nonEmpty('Telefone', telefone);
    this._endereco = nonEmpty('Endereço', endereco);
  }
  get nome(){ return this._nome; } set nome(v: string){ this._nome = nonEmpty('Nome', v); }
  get telefone(){ return this._telefone; } set telefone(v: string){ this._telefone = nonEmpty('Telefone', v); }
  get endereco(){ return this._endereco; } set endereco(v: string){ this._endereco = nonEmpty('Endereço', v); }

  abstract toDisplay(): string; 
}
