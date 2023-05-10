const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      //type: DataTypes.UUID,
      //defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
 
    released: {
      type: DataTypes.STRING,
    },

    rating:{
      type: DataTypes.FLOAT
    },

    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },

    genre: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    screenshots: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },

    requeriments_en: {
      type: DataTypes.JSON(DataTypes.STRING),
      // allowNull: true,
    },

    requeriments_ru: {
      type: DataTypes.JSON(DataTypes.STRING),
      // allowNull: true,
    },
  },
  { timestamp: true}
  );
};
