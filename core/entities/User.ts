import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  email: string;

  @Field()
  login: string;

  @Field()
  password: string;

  @Field({ defaultValue: false })
  isAdmin?: boolean;
}
