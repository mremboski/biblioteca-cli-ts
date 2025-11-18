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

## Checklist de Avaliação (mapeado ao enunciado)
- **Funcionalidade (30%)**: CRUD de livros/membros, empréstimos, devoluções, listagens e histórico.
- **Organização e Estrutura (30%)**: camadas, POO, SOLID (SRP/ISP), tipagem forte.
- **Persistência (10%)**: leitura/escrita de arquivos de dados.
- **Testes e Validação (10%)**: testes para serviços e validações.
- **Interface CLI (10%)**: usabilidade via menus.
- **Documentação (10%)**: README, comentários e roteiro para vídeo.

## Roteiro Sugerido para o Vídeo (≤ 10 min)
1. Objetivo e arquitetura (30s).
2. Pilares de POO aplicados (1min): herança (Pessoa→Membro), polimorfismo (toLine/toDisplay), encapsulamento, abstração.
3. Demonstração CLI (6min): cadastrar/listar/atualizar/remover; emprestar/devolver; histórico.
4. Persistência e arquivos (1min).
5. Testes (1min) e cobertura resumida.
6. Conclusões e oportunidades de melhoria (30s): multas/renovações/relatórios/CSV/TXT opcional.

```


