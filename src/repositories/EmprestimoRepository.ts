import { JsonRepository } from './JsonRepository.js';
import { Emprestimo } from '../entities/Emprestimo.js';

export class EmprestimoRepository extends JsonRepository<ReturnType<Emprestimo['toJSON']>> {
  constructor(path: string){ super(path); }
}
