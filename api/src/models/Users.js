const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false // desabilita la auto-incrementacion
      },
      
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      userAdmin: {
        type: DataTypes.BOOLEAN,
        default: true,
      },

      correo: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      imagen: {
        type: DataTypes.STRING,
      },
      nrocontacto: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};