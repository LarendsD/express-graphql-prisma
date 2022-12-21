import { UserResolver } from '../resolvers/UserResolver';
import * as tg from 'type-graphql';
import { TaskResolver } from '../resolvers/TaskResolver';

export const getGraphQLSchema = async () => {
  return tg.buildSchema({
    resolvers: [UserResolver, TaskResolver],
  })
}