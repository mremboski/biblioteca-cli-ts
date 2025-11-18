import { Livro } from '../entities/Livro.js';
import { LivroRepository } from '../repositories/LivroRepository.js';
import { uid } from '../utils/id.js';

export class LivroService {
  constructor(private repo: LivroRepository){}
  async listar(): Promise<Livro[]> { return (await this.repo.all()).map(Livro.fromJSON); }
  async criar(data: {titulo: string, autor: string, isbn: string, ano: number}): Promise<Livro> {
    const livro = new Livro(uid(), data.titulo, data.autor, data.ano, true);
    await this.repo.add(livro.toJSON()); return livro;
  }
  async atualizar(id: string, patch: Partial<{titulo: string, autor: string, ano: number}>): Promise<Livro> {
    const all = await this.repo.all();
    const idx = all.findIndex(l => l.id === id);
    if(idx === -1) throw new Error('Livro não encontrado');
    const ent = Livro.fromJSON(all[idx]);
    if(patch.titulo) ent.titulo = patch.titulo;
    if(patch.autor) ent.autor = patch.autor;
    if(typeof patch.ano === 'number') ent.ano = patch.ano;
    return ent;
  }
  async remover(id: string){ await this.repo.remove(id); }
  async marcarDisponibilidade(id: string, disponivel: boolean){
    const all = await this.repo.all();
    const item = all.find(l => l.id === id);
    if(!item) throw new Error('Livro não encontrado');
    item.disponivel = disponivel;
    await this.repo.update(item);
  }
}
