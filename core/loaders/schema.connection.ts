import { graphqlHTTP } from "express-graphql";
import { getGraphQLSchema } from "./schema";
import { context } from "../database";

export const getConnection = async () => {
  const schema = await getGraphQLSchema();

  return graphqlHTTP({
    schema,
    context,
  });
};
