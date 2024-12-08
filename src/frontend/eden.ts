import { treaty } from '@elysiajs/eden';
import type { Api } from '../backend';

export const eden = treaty<Api>('localhost:3000');
export const TEden = eden
