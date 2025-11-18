import { Emprestimo } from '../entities/Emprestimo.js';
import { uid } from '../utils/id.js';
import { formatISO, addDays } from 'date-fns';
export class EmprestimoService {
    er;
    lr;
    mr;
    constructor(er, lr, mr) {
        this.er = er;
        this.lr = lr;
        this.mr = mr;
    }
    async listarAtivos() { return (await this.er.all()).filter(e => e.status === 'ATIVO').map(Emprestimo.fromJSON); }
    async historico() { return (await this.er.all()).map(Emprestimo.fromJSON); }
    async emprestar(livroId, membroId, dias = 7) {
        const livros = await this.lr.all();
        const l = livros.find(x => x.id === livroId);
        if (!l)
            throw new Error('Livro não encontrado');
        if (!l.disponivel)
            throw new Error('Livro não está disponível');
        const membros = await this.mr.all();
        const m = membros.find(x => x.id === membroId);
        if (!m)
            throw new Error('Membro não encontrado');
        const hoje = new Date();
        const emp = new Emprestimo(uid(), livroId, membroId, formatISO(hoje), formatISO(addDays(hoje, dias)), 'ATIVO');
        await this.er.add(emp.toJSON());
        l.disponivel = false;
        await this.lr.update(l);
        return emp;
    }
    async devolver(emprestimoId) {
        const all = await this.er.all();
        const idx = all.findIndex(e => e.id === emprestimoId);
        if (idx === -1)
            throw new Error('Empréstimo não encontrado');
        const emp = Emprestimo.fromJSON(all[idx]);
        if (emp.status === 'DEVOLVIDO')
            return emp;
        emp.status = 'DEVOLVIDO';
        emp.dataDevolvido = new Date().toISOString();
        await this.er.update(emp.toJSON());
        // marca livro como disponível
        const livros = await this.lr.all();
        const l = livros.find(x => x.id === emp.livroId);
        if (l) {
            l.disponivel = true;
            await this.lr.update(l);
        }
        return emp;
    }
}
