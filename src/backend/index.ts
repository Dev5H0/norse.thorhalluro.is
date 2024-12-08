import { Elysia } from 'elysia'
import { apiJson } from './api';

export const api = new Elysia({ prefix:'api' })
    .use(apiJson)
;

export type Api = typeof api;
