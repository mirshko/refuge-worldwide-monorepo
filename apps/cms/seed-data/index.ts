import { KeystoneContext } from "@keystone-6/core/types";
import { genres } from "./data";

type GenreData = {
  name: string;
  contentfulId: string;
};

export async function insertSeedData(context: KeystoneContext) {
  console.log(`🌱 Inserting seed data`);

  const createGenre = async (genreData: GenreData) => {
    let genre = await context.query.Genre.findOne({
      where: { name: genreData.name },
      query: "id",
    });

    if (!genre) {
      await context.query.Genre.createOne({
        data: genreData,
        query: "id",
      });
    }
  };

  // const createTask = async (taskData: TaskProps) => {
  //   let persons = await context.query.Person.findMany({
  //     where: { name: { equals: taskData.assignedTo } },
  //     query: "id",
  //   });

  //   taskData.assignedTo = { connect: { id: persons[0].id } };
  //   await context.query.Task.createOne({
  //     data: taskData,
  //     query: "id",
  //   });
  // };

  for (const genre of genres) {
    console.log(`🎶 Adding genre: ${genre.name}`);
    await createGenre(genre);
  }

  // for (const task of tasks) {
  //   console.log(`🔘 Adding task: ${task.label}`);
  //   await createTask(task);
  // }

  console.log(`✅ Seed data inserted`);

  process.exit();
}
