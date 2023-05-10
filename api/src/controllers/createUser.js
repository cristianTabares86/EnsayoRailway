const { Users } = require ("../db")

async function createUser({
    id,
    name,
    userAdmin,
    correo,
    image,
    nrocontacto,
}) {
    if(!name || !userAdmin || !correo)
    throw new Error("Datos deben estar completos");

    let resultado = await Users.create({
        id,
        name,
        userAdmin,
        correo,
        image,
        nrocontacto,
    })
}

module.exports = { createUser }