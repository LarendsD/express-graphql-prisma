import cookieParser from "cookie-parser";
import express from "express";
import { getLoaders } from "./loaders";

const init = async () => {
  const app = express();
  const loaders = await getLoaders();

  app.use(cookieParser());
  app.use("/graphql", loaders.connection);

  const port = 3000;
  app.listen(port, () => {
    console.log(`App listen at ${port}`);
  });
};

init();
