import "reflect-metadata";
import { Resolver, Query, Mutation, Arg, Ctx, Int } from "type-graphql";
import { Context } from "../database";
import { Task } from "../entities/Task";
import { TaskCreateInput } from "../inputs/Task/task-create.input";
import { TaskUpdateInput } from "../inputs/Task/task-update.input";

@Resolver(Task)
export class TaskResolver {
  @Mutation((returns) => Task)
  async createTask(
    @Arg("data") data: TaskCreateInput,
    @Ctx() ctx: Context
  ): Promise<Task> {
    return ctx.prisma.task.create({
      data: {
        name: data.name,
        description: data.description,
        expires: data.expires,
      },
    });
  }

  @Query(() => [Task])
  async allTasks(@Ctx() ctx: Context): Promise<Task[]> {
    return ctx.prisma.task.findMany();
  }

  @Query(() => Task)
  async getTask(
    @Arg("id", (type) => Int) id: number,
    @Ctx() ctx: Context
  ): Promise<Task | null> {
    return ctx.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  @Mutation(() => Task)
  async updateTask(
    @Arg("id", (type) => Int) id: number,
    @Arg("data") data: TaskUpdateInput,
    @Ctx() ctx: Context
  ): Promise<Task> {
    return ctx.prisma.task.update({
      where: {
        id,
      },
      data,
    });
  }

  @Mutation((returns) => Task, { nullable: true })
  async deleteTask(@Arg("id", (type) => Int) id: number, @Ctx() ctx: Context) {
    return ctx.prisma.task.delete({ where: { id } });
  }
}
