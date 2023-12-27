const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("ecommerce", "root", "Ahsan075@", {
  host: "localhost",
  port: 5000,
  dialect: "mysql",
  logging: false,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./models/user")(sequelize, DataTypes);
db.contact = require("./models/contact")(sequelize, DataTypes, Model);

sequelize.sync();

module.exports = db;
