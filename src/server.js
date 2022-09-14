import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  createEmployesHandler,
  deleteEmployesHandler,
  getAllEmployesHandler,
  updateEmployesHandler,
} from "./backend/controllers/NotesController";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  const server = new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      user: Model,
      employes: Model,
    },

    seeds(server) {
      server.logging = false;
      users.forEach((item) =>
        server.create("user", {
          ...item,
          employes: [],
        })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // notes routes (private)
      this.get("/employes", getAllEmployesHandler.bind(this));
      this.post("/employes", createEmployesHandler.bind(this));
      this.post("/employes/:employeeId", updateEmployesHandler.bind(this));
      this.delete("/employes/:employeeId", deleteEmployesHandler.bind(this));
    },
  });
  return server;
}