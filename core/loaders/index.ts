import { getConnection } from "./schema.connection";

export const getLoaders = async () => {
  const connection = await getConnection();

  return { connection };
};
