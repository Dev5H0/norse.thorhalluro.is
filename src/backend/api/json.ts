import { Elysia, t } from 'elysia'
import { db, selMul } from '../db'

export const apiJson = new Elysia({ prefix:'json' })
    .decorate('db', db)
    .get('/', (ctx) => ctx.db.base.findMany({ select:{ ...selMul } }))
    .get('/:slug', (ctx) => ctx.db.base.findUnique({ where:{ slug:ctx.params.slug }, select:{ ...selMul } }))
;
