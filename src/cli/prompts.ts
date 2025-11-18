import inquirer from 'inquirer';

export const menuPrincipal = () => inquirer.prompt<{menu:string}>([{
  type: 'list', name: 'menu', message: 'Biblioteca CLI - escolha uma opção:',
  choices: [
    {name: 'Livros - Cadastrar', value: 'LIVRO_CAD'},
    {name: 'Livros - Listar', value: 'LIVRO_LIST'},
    {name: 'Livros - Atualizar', value: 'LIVRO_UPD'},
    {name: 'Livros - Remover', value: 'LIVRO_DEL'},
    new inquirer.Separator(),
    {name: 'Membros - Cadastrar', value: 'MEMBRO_CAD'},
    {name: 'Membros - Listar', value: 'MEMBRO_LIST'},
    {name: 'Membros - Atualizar', value: 'MEMBRO_UPD'},
    {name: 'Membros - Remover', value: 'MEMBRO_DEL'},
    new inquirer.Separator(),
    {name: 'Empréstimo - Realizar', value: 'EMP_NOVO'},
    {name: 'Empréstimo - Listar Ativos', value: 'EMP_ATIVOS'},
    {name: 'Empréstimo - Devolver', value: 'EMP_DEV'},
    {name: 'Empréstimo - Histórico', value: 'EMP_HIST'},
    new inquirer.Separator(),
    {name: 'Sair', value: 'SAIR'}
  ]
}]);

export const promptLivro = () => inquirer.prompt([
  { name: 'titulo', message: 'Título:' },
  { name: 'autor', message: 'Autor:' },
  { name: 'ano', message: 'Ano:', validate: (v:string)=> isNaN(Number(v))?'Informe número':true, filter: (v:string)=> Number(v) }
]);

export const promptLivroId = () => inquirer.prompt([{ name: 'id', message: 'ID do livro:' }]);

export const promptLivroPatch = () => inquirer.prompt([
  { name: 'titulo', message: 'Novo título (vazio para não alterar):' },
  { name: 'autor', message: 'Novo autor (vazio para não alterar):' },
  { name: 'ano', message: 'Novo ano (vazio para não alterar):', filter:(v:string)=> v?Number(v):undefined }
]);

export const promptMembro = () => inquirer.prompt([
  { name: 'nome', message: 'Nome:' },
  { name: 'matricula', message: 'Matrícula:' },
  { name: 'telefone', message: 'Telefone:' },
  { name: 'endereco', message: 'Endereço:' }
]);
export const promptMembroId = () => inquirer.prompt([{ name: 'id', message: 'ID do membro:' }]);
export const promptMembroPatch = () => inquirer.prompt([
  { name: 'nome', message: 'Novo nome (vazio p/ manter):' },
  { name: 'matricula', message: 'Nova matrícula (vazio p/ manter):' },
  { name: 'telefone', message: 'Novo telefone (vazio p/ manter):' },
  { name: 'endereco', message: 'Novo endereço (vazio p/ manter):' }
]);

export const promptEmprestimo = () => inquirer.prompt([
  { name: 'livroId', message: 'ID do Livro:' },
  { name: 'membroId', message: 'ID do Membro:' },
  { name: 'dias', message: 'Dias de empréstimo (padrão 7):', default: 7, filter:(v:string)=> Number(v) }
]);
export const promptEmprestimoId = () => inquirer.prompt([{ name: 'id', message: 'ID do Empréstimo:' }]);
