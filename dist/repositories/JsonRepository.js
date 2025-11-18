import { readJSON, writeJSON, ensureFile } from '../utils/file.js';
export class JsonRepository {
    path;
    constructor(path) {
        this.path = path;
        // garante arquivo
        ensureFile(this.path, []);
    }
    async all() { return await readJSON(this.path, []); }
    async findById(id) { return (await this.all()).find(i => i.id === id); }
    async add(entity) { const data = await this.all(); data.push(entity); await writeJSON(this.path, data); }
    async update(entity) { const data = await this.all(); const i = data.findIndex(x => x.id === entity.id); if (i === -1)
        throw new Error('ID não encontrado'); data[i] = entity; await writeJSON(this.path, data); }
    async remove(id) { const data = await this.all(); const nd = data.filter(x => x.id !== id); await writeJSON(this.path, nd); }
}
