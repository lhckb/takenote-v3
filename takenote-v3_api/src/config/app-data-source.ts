import { DataSource } from "typeorm";

const database = new DataSource({
  type: "postgres",
  host: "takenote-v3_db",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  entities: ["src/models/*.ts"],
  migrations: ["src/migrations/*.ts"]
});

export default database;