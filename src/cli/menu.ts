import { menuPrincipal, promptLivro, promptLivroId, promptLivroPatch, promptMembro, promptMembroId, promptMembroPatch, promptEmprestimo, promptEmprestimoId } from './prompts.js';
import { LivroService } from '../services/LivroService.js';
import { MembroService } from '../services/MembroService.js';
import { EmprestimoService } from '../services/EmprestimoService.js';
import { Livro } from '../entities/Livro.js';
import { Membro } from '../entities/Membro.js';
import { Emprestimo } from '../entities/Emprestimo.js';

export async function loopMenu(ls: LivroService, ms: MembroService, es: EmprestimoService){
  while(true){
    const { menu } = await menuPrincipal();
    try {
      switch(menu){
        case 'LIVRO_CAD': {
          const data = await promptLivro();
          const l = await ls.criar(data);
          console.log('Criado:', l.toJSON());
          break;
        }
        case 'LIVRO_LIST': {
          const lista = await ls.listar();
          lista.forEach(l => console.log(l.id, '-', l.toLine()));
          break;
        }
        case 'LIVRO_UPD': {
          const { id } = await promptLivroId();
          const patch = await promptLivroPatch();
          const l = await ls.atualizar(id, patch);
          console.log('Atualizado:', l.toJSON());
          break;
        }
        case 'LIVRO_DEL': {
          const { id } = await promptLivroId();
          await ls.remover(id);
          console.log('Removido com sucesso.');
          break;
        }
        case 'MEMBRO_CAD': {
          const data = await promptMembro();
          const m = await ms.criar(data);
          console.log('Criado:', m.toJSON());
          break;
        }
        case 'MEMBRO_LIST': {
          const lista = await ms.listar();
          lista.forEach(m => console.log(m.id, '-', m.toDisplay()));
          break;
        }
        case 'MEMBRO_UPD': {
          const { id } = await promptMembroId();
          const patch = await promptMembroPatch();
          const m = await ms.atualizar(id, patch);
          console.log('Atualizado:', m.toJSON());
          break;
        }
        case 'MEMBRO_DEL': {
          const { id } = await promptMembroId();
          await ms.remover(id);
          console.log('Removido com sucesso.');
          break;
        }
        case 'EMP_NOVO': {
          const { livroId, membroId, dias } = await promptEmprestimo();
          const emp = await es.emprestar(livroId, membroId, dias);
          console.log('Empréstimo criado:', emp.toJSON());
          break;
        }
        case 'EMP_ATIVOS': {
          const ativos = await es.listarAtivos();
          ativos.forEach(e => console.log(e.id, '-', e.livroId, '->', e.membroId, '| previsto:', e.dataDevolucaoPrevista));
          break;
        }
        case 'EMP_DEV': {
          const { id } = await promptEmprestimoId();
          const e = await es.devolver(id);
          console.log('Devolvido:', e.toJSON());
          break;
        }
        case 'EMP_HIST': {
          const hist = await es.historico();
          hist.forEach(h => console.log(h.id, h.status, '| livro', h.livroId, '-> membro', h.membroId));
          break;
        }
        case 'SAIR':
          console.log('Até logo!');
          return;
      }
    } catch (e:any){
      console.error('Erro:', e.message ?? e);
    }
  }
}
