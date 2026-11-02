import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient({
    log: process.env.NODE_ENV === "developoment" ? ["query", "error", "warn"] : ["error"],
});

