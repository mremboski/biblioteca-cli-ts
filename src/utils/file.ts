import { promises as fs } from 'fs';
export async function ensureFile(path: string, fallback: unknown){ 
  try { await fs.access(path); } catch { await fs.writeFile(path, JSON.stringify(fallback, null, 2)); }
}
export async function readJSON<T>(path: string, fallback: T): Promise<T>{
  try{ const data = await fs.readFile(path, 'utf-8'); return JSON.parse(data) as T; }
  catch{ await ensureFile(path, fallback); return fallback; }
}
export async function writeJSON<T>(path: string, data: T): Promise<void>{
  await fs.writeFile(path, JSON.stringify(data, null, 2));
}
