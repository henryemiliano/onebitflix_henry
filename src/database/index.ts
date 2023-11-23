import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "onebitflix_development",
  username: "henry",
  password: "2042",
  define: {
    underscored: true,
  },
});
