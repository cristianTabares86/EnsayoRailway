const { Router } = require("express");
const axios = require("axios")

// Importar todos los routers;
const router = Router();
const getGamesNameRouter = require("./getGamesName");
const postGamesRouter = require("./postGames");
const getGamesIdRouter = require("./getGamesId");
const getGenresRouter = require("./getGenres");
const deleteGameRouter = require("./deleteGame");
const putGameRouter = require("./putGame");
const sortedGames = require("./sortedGames")
const filteredPlatforms = require("./filteredPlatforms")
const createUser = require("./createUser.js")
const { Videogame, Genre } = require("../db");



const createBulkDB = async (req, res) => {
  try {
    // const response = await axios.get(
    //     "https://api.rawg.io/api/games?page_size=10&key=6df927ecdff443ffa74507df2223a6ad&page_size=40"); // ? solicita los datos a la api externa
    //console.log(response.data)
    let games1 = await axios.get("https://api.rawg.io/api/games?key=6df927ecdff443ffa74507df2223a6ad&page=1");
    let games2 = await axios.get("https://api.rawg.io/api/games?key=6df927ecdff443ffa74507df2223a6ad&page=2");
    let games3 = await axios.get("https://api.rawg.io/api/games?key=6df927ecdff443ffa74507df2223a6ad&page=3");
    let games4 = await axios.get("https://api.rawg.io/api/games?key=6df927ecdff443ffa74507df2223a6ad&page=4");
    let games5 = await axios.get("https://api.rawg.io/api/games?key=6df927ecdff443ffa74507df2223a6ad&page=5");
    let games6 = await axios.get("https://api.rawg.io/api/games?key=6df927ecdff443ffa74507df2223a6ad&page=6");
    let games7 = await axios.get("https://api.rawg.io/api/games?key=6df927ecdff443ffa74507df2223a6ad&page=7");
    let games8 = await axios.get("https://api.rawg.io/api/games?key=6df927ecdff443ffa74507df2223a6ad&page=8");
    const gamesTotal = games1.data.results.concat(games2.data.results, games3.data.results, games4.data.results, games5.data.results, games6.data.results, games7.data.results, games8.data.results );
    const gamesDB = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    const response = gamesTotal.concat(gamesDB);
    const allGames = response.map((game) => ({
      //? trae los datos unificando el formato
      id: game.id,
      name: game.name,
      rating: game.rating,
      platforms: game.platforms.map((platform) => platform.platform.name),
      released: game.released,
      image: game.background_image,      
      genre: game.genres.map((genre) => genre.name),
      screenshots: game.short_screenshots.map((screen) => screen.image),
      requeriments_en: game.platforms
      .filter((requeriment) => requeriment.requirements_en !== null)
      .map((requeriment) => requeriment.requirements_en),
      requeriments_ru: game.platforms
      .filter((requeriment) => requeriment.requirements_en !== null)
      .map((requeriment) => requeriment.requirements_ru),
      price: (Math.random() * (100 - 45 )).toFixed(2),
    }));
    const savedGames = await Videogame.bulkCreate(allGames);
    return res.status(200).json(savedGames);
} catch (error) {
    return res
    .status(500)
    .json({ message: "Error interno del servidor" + error.message });
}
};

// const validate = (req, res, next) => {
//     const { name, genre } = req.body
//     if( !name || !genre ) { res.status(400).json({error: "Faltan datos obligatortios"})
//     next();
//     }
//     }


// Configurar los routers
router.use("/games", getGamesNameRouter);
router.use("/games/update", putGameRouter);
router.use("/games", postGamesRouter);
router.use("/games/createBulkDB", createBulkDB);
router.use("/games", getGamesIdRouter);
router.use("/games", deleteGameRouter);

router.use("/games/order", sortedGames);
router.use("/genres", getGenresRouter);
router.use("/user", createUser);

router.use("/games/filteredPlatform", filteredPlatforms);


module.exports = router;

