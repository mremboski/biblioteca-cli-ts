import { LivroRepository } from './repositories/LivroRepository.js';
import { MembroRepository } from './repositories/MembroRepository.js';
import { EmprestimoRepository } from './repositories/EmprestimoRepository.js';
import { LivroService } from './services/LivroService.js';
import { MembroService } from './services/MembroService.js';
import { EmprestimoService } from './services/EmprestimoService.js';
import { loopMenu } from './cli/menu.js';

const lr = new LivroRepository('data/livros.json');
const mr = new MembroRepository('data/membros.json');
const er = new EmprestimoRepository('data/emprestimos.json');

const livroService = new LivroService(lr);
const membroService = new MembroService(mr);
const emprestimoService = new EmprestimoService(er, lr, mr);

console.clear();
console.log('=== Biblioteca CLI (TypeScript) ===');
await loopMenu(livroService, membroService, emprestimoService);
