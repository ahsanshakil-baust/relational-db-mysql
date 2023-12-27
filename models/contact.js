module.exports = (sequelize, DataTypes, Model) => {
  class Contact extends Model {}

  Contact.init(
    {
      permanent_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      current_address: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "contacts",
    }
  );

  return Contact;
};
