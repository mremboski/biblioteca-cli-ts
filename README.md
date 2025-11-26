# Biblioteca CLI (TypeScript, POO)

Sistema **100% CLI** para gerenciar **Livros**, **Membros** e **Empréstimos** conforme o enunciado do *Trabalho final POO*.

- POO completa: **classes**, **abstratas**, **herança** (Pessoa→Membro), **polimorfismo**, **encapsulamento**, **interfaces**, **genéricos**.
- Arquitetura em camadas: `entities/`, `repositories/`, `services/`, `cli/`, `utils/`.
- Persistência: **arquivos JSON** em `data/` (conforme permitido: txt/json/csv).
- Testes: **Vitest** cobrindo regras centrais.
- CLI: menu com **inquirer** (somente console).

## Rodando
```bash
npm i
npm run dev         
npm run build && npm start  
```

## Estrutura
```
src/
  core/           # erros, base entity, tipos utilitários
  entities/       # Livro, Pessoa (abstrata), Membro, Emprestimo
  repositories/   # CRUD e persistência JSON
  services/       # Regras de negócio (emprestar/devolver/validações)
  cli/            # menus e prompts
  utils/          # helpers
data/             # livros.json, membros.json, emprestimos.json
tests/            # vitest
```




