import { describe, it, expect, beforeEach } from 'vitest'
import { LivroRepository } from '../src/repositories/LivroRepository.js'
import { MembroRepository } from '../src/repositories/MembroRepository.js'
import { EmprestimoRepository } from '../src/repositories/EmprestimoRepository.js'
import { LivroService } from '../src/services/LivroService.js'
import { MembroService } from '../src/services/MembroService.js'
import { EmprestimoService } from '../src/services/EmprestimoService.js'
import { promises as fs } from 'fs'

const tmp = '.tmp-test'
const p = (f:string)=> `${tmp}/${f}`

async function reset(){
  await fs.rm(tmp, {recursive:true, force:true})
  await fs.mkdir(tmp, {recursive:true})
  await fs.writeFile(p('livros.json'), '[]')
  await fs.writeFile(p('membros.json'), '[]')
  await fs.writeFile(p('emprestimos.json'), '[]')
}

describe('Serviços', () => {
  beforeEach(async ()=>{ await reset() })
  it('cadastra livro, membro, empresta e devolve', async () => {
    const lr = new LivroRepository(p('livros.json'))
    const mr = new MembroRepository(p('membros.json'))
    const er = new EmprestimoRepository(p('emprestimos.json'))

    const ls = new LivroService(lr)
    const ms = new MembroService(mr)
    const es = new EmprestimoService(er, lr, mr)

    const l = await ls.criar({titulo:'Teste', autor:'Autor', isbn:'1234567890', ano:2020})
    const m = await ms.criar({nome:'Fulano', matricula:'X1', telefone:'000', endereco:'Rua Z'})

    const emp = await es.emprestar(l.id, m.id, 1)
    expect(emp.status).toBe('ATIVO')

    const ativos = await es.listarAtivos()
    expect(ativos.length).toBe(1)

    const devolvido = await es.devolver(emp.id)
    expect(devolvido.status).toBe('DEVOLVIDO')

    const ativosDepois = await es.listarAtivos()
    expect(ativosDepois.length).toBe(0)
  })
})
