import { JsonRepository } from './JsonRepository.js';
import { Membro } from '../entities/Membro.js';

export class MembroRepository extends JsonRepository<ReturnType<Membro['toJSON']>> {
  constructor(path: string){ super(path); }
}
