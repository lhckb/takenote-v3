import { DataSource } from "typeorm";

const database = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "takenote",
  entities: ["src/models/*.ts"],
  migrations: ["src/migrations/*.ts"]
});

export default database;