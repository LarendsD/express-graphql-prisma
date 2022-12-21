import { IsEmail, IsString, Length, Matches } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
export class UserCreateInput {
  @Field()
  @IsString()
  @IsEmail()
  @Length(5, 40)
  email: string;

  @Field()
  @IsString()
  @Length(5, 30)
  login: string;

  @Field()
  @IsString()
  @Length(6)
  @Matches(/[0-9]/)
  @Matches(/[a-z]/)
  @Matches(/[A-Z]/)
  password: string;
}
