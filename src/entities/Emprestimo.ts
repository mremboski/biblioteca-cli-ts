import { BaseEntity } from '../core/BaseEntity.js';

export type EmprestimoStatus = 'ATIVO' | 'DEVOLVIDO';

export class Emprestimo extends BaseEntity {
  constructor(
    id: string,
    public livroId: string,
    public membroId: string,
    public dataEmprestimo: string, // ISO
    public dataDevolucaoPrevista: string, // ISO
    public status: EmprestimoStatus = 'ATIVO',
    public dataDevolvido?: string
  ){
    super(id);
  }
  toJSON(){ return { id: this.id, createdAt: this.createdAt, livroId: this.livroId, membroId: this.membroId, dataEmprestimo: this.dataEmprestimo, dataDevolucaoPrevista: this.dataDevolucaoPrevista, status: this.status, dataDevolvido: this.dataDevolvido }; }
  static fromJSON(o: any){ return new Emprestimo(o.id, o.livroId, o.membroId, o.dataEmprestimo, o.dataDevolucaoPrevista, o.status, o.dataDevolvido); }
}
