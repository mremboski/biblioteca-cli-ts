import { BaseEntity } from "../core/BaseEntity.js";
export class Emprestimo extends BaseEntity {
  livroId;
  membroId;
  dataEmprestimo;
  dataDevolucaoPrevista;
  status;
  dataDevolvido;
  constructor(
    id,
    livroId,
    membroId,
    dataEmprestimo,
    dataDevolucaoPrevista,
    status = "ATIVO",
    dataDevolvido
  ) {
    super(id);
    this.livroId = livroId;
    this.membroId = membroId;
    this.dataEmprestimo = dataEmprestimo;
    this.dataDevolucaoPrevista = dataDevolucaoPrevista;
    this.status = status;
    this.dataDevolvido = dataDevolvido;
  }
  toJSON() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      livroId: this.livroId,
      membroId: this.membroId,
      dataEmprestimo: this.dataEmprestimo,
      dataDevolucaoPrevista: this.dataDevolucaoPrevista,
      status: this.status,
      dataDevolvido: this.dataDevolvido,
    };
  }
  static fromJSON(o) {
    return new Emprestimo(
      o.id,
      o.livroId,
      o.membroId,
      o.dataEmprestimo,
      o.dataDevolucaoPrevista,
      o.status,
      o.dataDevolvido
    );
  }
}
