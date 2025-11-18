import { BaseEntity } from '../core/BaseEntity.js';
import { nonEmpty, positiveInt, isbnLike } from '../utils/validators.js';
export class Livro extends BaseEntity {
    _titulo;
    _autor;
    _isbn;
    _ano;
    _disponivel;
    constructor(id, titulo, autor, isbn, ano, disponivel = true) {
        super(id);
        this._titulo = nonEmpty('Título', titulo);
        this._autor = nonEmpty('Autor', autor);
        this._isbn = isbnLike(nonEmpty('ISBN', isbn));
        this._ano = positiveInt('Ano', ano);
        this._disponivel = disponivel;
    }
    get titulo() { return this._titulo; }
    set titulo(v) { this._titulo = nonEmpty('Título', v); }
    get autor() { return this._autor; }
    set autor(v) { this._autor = nonEmpty('Autor', v); }
    get isbn() { return this._isbn; }
    set isbn(v) { this._isbn = isbnLike(nonEmpty('ISBN', v)); }
    get ano() { return this._ano; }
    set ano(v) { this._ano = positiveInt('Ano', v); }
    get disponivel() { return this._disponivel; }
    set disponivel(v) { this._disponivel = v; }
    toJSON() { return { id: this.id, createdAt: this.createdAt, titulo: this._titulo, autor: this._autor, isbn: this._isbn, ano: this._ano, disponivel: this._disponivel }; }
    static fromJSON(o) { return new Livro(o.id, o.titulo, o.autor, o.isbn, o.ano, o.disponivel); }
    toLine() { return `${this.titulo} — ${this.autor} (${this.ano}) [${this.disponivel ? 'Disponível' : 'Emprestado'}]`; } // polimorfismo simples
}
