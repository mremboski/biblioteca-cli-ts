import { Membro } from '../entities/Membro.js';
import { MembroRepository } from '../repositories/MembroRepository.js';
import { uid } from '../utils/id.js';

export class MembroService {
  constructor(private repo: MembroRepository){}
  async listar(): Promise<Membro[]> { return (await this.repo.all()).map(Membro.fromJSON); }
  async criar(data: {nome: string, matricula: string, telefone: string, endereco: string}): Promise<Membro> {
    const m = new Membro(uid(), data.nome, data.matricula, data.telefone, data.endereco);
    await this.repo.add(m.toJSON()); return m;
  }
  async atualizar(id: string, patch: Partial<{nome: string, matricula: string, telefone: string, endereco: string}>): Promise<Membro> {
    const all = await this.repo.all();
    const idx = all.findIndex(x => x.id === id);
    if(idx === -1) throw new Error('Membro não encontrado');
    const m = Membro.fromJSON(all[idx]);
    if(patch.nome) m.nome = patch.nome;
    if(patch.matricula) m.matricula = patch.matricula;
    if(patch.telefone) m.telefone = patch.telefone;
    if(patch.endereco) m.endereco = patch.endereco;
    await this.repo.update(m.toJSON());
    return m;
  }
  async remover(id: string){ await this.repo.remove(id); }
}
