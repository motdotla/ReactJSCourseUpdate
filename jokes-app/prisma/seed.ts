import { PrismaClient } from "@prisma/client";
import { getJokes } from "./helpers";

const db = new PrismaClient();

(async function seed() {
  await Promise.all(
    getJokes().map((joke) => {
      return db.joke.create({ data: joke });
    })
  );
})();
