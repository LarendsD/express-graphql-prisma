import { PrismaClient } from "@prisma/client";
import { encrypt } from "../secure/encrypt";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
}

export const context: Context = {
  prisma,
};

prisma.$use(async (params, next) => {
  const result = await next(params);
  if (params.model === "User") {
    const password = encrypt(result.password);
    return {
      ...result,
      password,
    };
  }
  return result;
});
