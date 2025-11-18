import { promises as fs } from 'fs';
import { readJSON, writeJSON, ensureFile } from '../utils/file.js';
import { IRepository } from './IRepository.js';

export class JsonRepository<T extends { id: string }> implements IRepository<T> {
  constructor(private path: string){
    ensureFile(this.path, []);
  }
  async all(): Promise<T[]> { return await readJSON<T[]>(this.path, []); }
  async findById(id: string): Promise<T | undefined> { return (await this.all()).find(i => i.id === id); }
  async add(entity: T): Promise<void> { const data = await this.all(); data.push(entity); await writeJSON(this.path, data); }
  async update(entity: T): Promise<void> { const data = await this.all(); const i = data.findIndex(x => x.id === entity.id); if(i===-1) throw new Error('ID não encontrado'); data[i] = entity; await writeJSON(this.path, data); }
  async remove(id: string): Promise<void> { const data = await this.all(); const nd = data.filter(x => x.id !== id); await writeJSON(this.path, nd); }
}
