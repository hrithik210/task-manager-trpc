import { prisma } from "@/lib/prisma"


export const createContext =() => {
    return {prisma}
};

export type Context = Awaited<typeof createContext>;