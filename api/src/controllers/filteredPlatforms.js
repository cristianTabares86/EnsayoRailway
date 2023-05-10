
const { Videogame } = require("../db"); // Fuente de datos de videojuegos
const { Op } = require('sequelize');


// Endpoint para filtrar por plataformas

  async function filteredPlatforms (platform){ // Obtener el parámetro "plataforma" de la consulta
    console.log("estoy en el controller")
    let filterByPlatform = await Videogame.findAll({
        where: {
            platforms: {
                [Op.contains]: [platform]
              }
        }
      });
  return filterByPlatform
}


module.exports = { filteredPlatforms }