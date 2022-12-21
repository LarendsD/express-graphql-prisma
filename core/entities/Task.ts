import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Task {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field((type) => Date)
  expires: Date;

  @Field((type) => Boolean, { defaultValue: false })
  isReady?: boolean;

  @Field((type) => Date)
  created_at?: Date;

  @Field((type) => Date)
  updated_at?: Date;
}
