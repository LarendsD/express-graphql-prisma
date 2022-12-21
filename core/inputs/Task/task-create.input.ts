import { IsDate, IsString, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class TaskCreateInput {
  @Field()
  @IsString()
  @Length(5, 50)
  name: string;

  @Field()
  @IsString()
  description: string;

  @Field()
  @IsDate()
  expires: Date;
}
