import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

export const selNames = { names:{ select:{ id:false,relation:false,slug:true,name:true,lang:false,note:false } } }
export const selRels = {
  children: { select:{ slug:true, name:true } },
  parents: { select:{ slug:true, name:true } },
  partneredTo: { select:{ slug:true, name:true } },
  siblingsTo: { select:{ slug:true, name:true } },
};

export const selOne = {
    slug:true, name:true, description:true,
    ...selNames,
    ...selRels
}

export const selMul = { 
    slug:true, name:true,
    ...selRels
}