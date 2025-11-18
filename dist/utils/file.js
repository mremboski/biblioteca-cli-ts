import { promises as fs } from 'fs';
export async function ensureFile(path, fallback) {
    try {
        await fs.access(path);
    }
    catch {
        await fs.writeFile(path, JSON.stringify(fallback, null, 2));
    }
}
export async function readJSON(path, fallback) {
    try {
        const data = await fs.readFile(path, 'utf-8');
        return JSON.parse(data);
    }
    catch {
        await ensureFile(path, fallback);
        return fallback;
    }
}
export async function writeJSON(path, data) {
    await fs.writeFile(path, JSON.stringify(data, null, 2));
}
