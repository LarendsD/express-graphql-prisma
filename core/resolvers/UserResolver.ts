import "reflect-metadata";
import { Resolver, Query, Mutation, Arg, Ctx, Int } from "type-graphql";
import { User } from "../entities/User";
import { Context } from "../database";
import { UserCreateInput } from "../inputs/User/user-create.input";
import { UserUpdateInput } from "../inputs/User/user-update.input";

@Resolver(User)
export class UserResolver {
  /*@Mutation((returns) => String)
  async signUpUser(
    @Arg("data") data: UserSignUpInput,
    @Ctx() ctx: Context
  ): Promise<string> {

  }*/

  @Mutation((returns) => User)
  async createUser(
    @Arg("data") data: UserCreateInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    return ctx.prisma.user.create({
      data: {
        email: data.email,
        login: data.login,
        password: data.password,
      },
    });
  }

  @Query(() => [User])
  async allUsers(@Ctx() ctx: Context): Promise<User[]> {
    return ctx.prisma.user.findMany();
  }

  @Query(() => User)
  async getUser(
    @Arg("id", (type) => Int) id: number,
    @Ctx() ctx: Context
  ): Promise<User | null> {
    return ctx.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  @Mutation(() => User)
  async updateUser(
    @Arg("id", (type) => Int) id: number,
    @Arg("data") data: UserUpdateInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    return ctx.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  @Mutation((returns) => User, { nullable: true })
  async deleteUser(@Arg("id", (type) => Int) id: number, @Ctx() ctx: Context) {
    return ctx.prisma.user.delete({ where: { id } });
  }
}
