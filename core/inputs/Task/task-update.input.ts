import { IsBoolean, IsDate, IsString, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class TaskUpdateInput {
  @Field({ nullable: true })
  @IsString()
  @Length(5, 50)
  name?: string;

  @Field({ nullable: true })
  @IsString()
  description?: string;

  @Field({ nullable: true })
  @IsDate()
  expires?: Date;

  @Field({ nullable: true })
  @IsBoolean()
  isReady?: boolean;
}
