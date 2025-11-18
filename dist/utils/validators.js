import { ValidationError } from '../core/errors.js';
export const nonEmpty = (label, v) => {
    if (!v || !v.trim())
        throw new ValidationError(`${label} não pode ser vazio.`);
    return v.trim();
};
export const positiveInt = (label, n) => {
    if (!Number.isInteger(n) || n <= 0)
        throw new ValidationError(`${label} deve ser inteiro positivo.`);
    return n;
};
export const isbnLike = (v) => {
    const s = v.replace(/[- ]/g, '');
    if (s.length < 8)
        throw new ValidationError(`ISBN inválido.`);
    return v;
};
