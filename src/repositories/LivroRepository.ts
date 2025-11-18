import { JsonRepository } from './JsonRepository.js';
import { Livro } from '../entities/Livro.js';

export class LivroRepository extends JsonRepository<ReturnType<Livro['toJSON']>> {
  constructor(path: string){ super(path); }
}
