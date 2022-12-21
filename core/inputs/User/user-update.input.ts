import { IsString, IsEmail, Length, Matches, IsBoolean } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
export class UserUpdateInput {
  @Field({ nullable: true })
  @IsString()
  @IsEmail()
  @Length(5, 40)
  email?: string;

  @Field({ nullable: true })
  @IsString()
  @Length(5, 30)
  login?: string;

  @Field({ nullable: true })
  @IsString()
  @Length(6)
  @Matches(/[0-9]/)
  @Matches(/[a-z]/)
  @Matches(/[A-Z]/)
  password?: string;

  @Field({ nullable: true })
  @IsBoolean()
  isAdmin?: boolean;
}
