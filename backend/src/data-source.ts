import { DataSource } from "typeorm";

import { Vehicle } from "./entities/Vehicle";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/main.sqlite",
  synchronize: true,
  logging: true,
  entities: [Vehicle],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("AppDataSource is success");
  })
  .catch(error => console.log(error));
