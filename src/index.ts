import { Elysia } from 'elysia';
import { api } from './backend';
import { www } from './frontend/client'
import staticPlugin from '@elysiajs/static';

export const app = new Elysia()
  .use(
    staticPlugin({
      indexHTML: false,
      prefix: '_public',
    }),
  )
  .get('/favicon.ico', () =>
    Bun.file('./public/assets/favicon-rune-filled.svg'),
  )
  .use(api)
  .use(www)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
