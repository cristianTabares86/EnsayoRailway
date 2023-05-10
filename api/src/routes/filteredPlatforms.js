const { Router } = require("express");
const { filteredPlatforms } = require('../controllers/filteredPlatforms')
const express = require("express");


const router = Router();
router.use(express.json());


router.get("/:platform", async (req, res) => {

    let { platform } = req.params;
    console.log(platform);

    try {
        console.log("estoy en routes")
        let resultado = await filteredPlatforms(platform);
        if (!resultado.length) {
            res.status(200).json("no se encotraron resultados");
        } else {
            res.status(200).json(resultado);
        }

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});


module.exports = router;
