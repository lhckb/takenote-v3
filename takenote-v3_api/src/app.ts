import express from "express";
import database from "./config/app-data-source";
import router from "./router";

const app = express();
app.use(router);
app.use(express.json())
const port = 3000;

database.initialize()
.then(() => {
  app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
  });
})
.catch(err => {
  console.error("There has been an error:\n%s", err);
});

export default app;