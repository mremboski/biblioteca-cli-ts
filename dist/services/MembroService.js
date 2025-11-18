import { Membro } from '../entities/Membro.js';
import { uid } from '../utils/id.js';
export class MembroService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async listar() { return (await this.repo.all()).map(Membro.fromJSON); }
    async criar(data) {
        const m = new Membro(uid(), data.nome, data.matricula, data.telefone, data.endereco);
        await this.repo.add(m.toJSON());
        return m;
    }
    async atualizar(id, patch) {
        const all = await this.repo.all();
        const idx = all.findIndex(x => x.id === id);
        if (idx === -1)
            throw new Error('Membro não encontrado');
        const m = Membro.fromJSON(all[idx]);
        if (patch.nome)
            m.nome = patch.nome;
        if (patch.matricula)
            m.matricula = patch.matricula;
        if (patch.telefone)
            m.telefone = patch.telefone;
        if (patch.endereco)
            m.endereco = patch.endereco;
        await this.repo.update(m.toJSON());
        return m;
    }
    async remover(id) { await this.repo.remove(id); }
}
