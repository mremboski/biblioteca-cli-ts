import { Livro } from '../entities/Livro.js';
import { uid } from '../utils/id.js';
export class LivroService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async listar() { return (await this.repo.all()).map(Livro.fromJSON); }
    async criar(data) {
        const livro = new Livro(uid(), data.titulo, data.autor, data.isbn, data.ano, true);
        await this.repo.add(livro.toJSON());
        return livro;
    }
    async atualizar(id, patch) {
        const all = await this.repo.all();
        const idx = all.findIndex(l => l.id === id);
        if (idx === -1)
            throw new Error('Livro não encontrado');
        const ent = Livro.fromJSON(all[idx]);
        if (patch.titulo)
            ent.titulo = patch.titulo;
        if (patch.autor)
            ent.autor = patch.autor;
        if (patch.isbn)
            ent.isbn = patch.isbn;
        if (typeof patch.ano === 'number')
            ent.ano = patch.ano;
        all[idx] = ent.toJSON();
        await this.repo['writeJSON']?.(all); 
        await this.repo.update(all[idx]);
    }
    async remover(id) { await this.repo.remove(id); }
    async marcarDisponibilidade(id, disponivel) {
        const all = await this.repo.all();
        const item = all.find(l => l.id === id);
        if (!item)
            throw new Error('Livro não encontrado');
        item.disponivel = disponivel;
        await this.repo.update(item);
    }
}
