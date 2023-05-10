RUTAS

    BulkDB

Alojar todos los vidojuegos a la BD Postgres
POST --> https://gameshopback-pf-ek5y.onrender.com/games/createBulkDB


    GAMES
Extrae todos los video juegos de la BD postgres
GET -->  https://gameshopback-pf-ek5y.onrender.com/games


Extrae el video juego por nombre de la BD postgres
GET --> https://gameshopback-pf-ek5y.onrender.com/games?name=Tomb Raider (2013)


Extrae el video juego por ID de la BD postgres
GET --> https://gameshopback-pf-ek5y.onrender.com/games/19710

Extrae todos los video juegos de la BD postgres, los filtra y los oredna por Nombre en forma Ascendente (A - Z)
GET --> https://gameshopback-pf-ek5y.onrender.com/games/order/asc

Extrae todos los video juegos de la BD postgres, los filtra y los oredna por Nombre en forma Descendente (Z - A)
GET --> https://gameshopback-pf-ek5y.onrender.com/games/order/desc

Extrae todos los video juegos de la BD postgres, los filtra y los oredna por Rating de menor a mayor
GET --> https://gameshopback-pf-ek5y.onrender.com/games/order/ratmin

Extrae todos los video juegos de la BD postgres, los filtra y los oredna por Rating de mayor a menor
GET --> https://gameshopback-pf-ek5y.onrender.com/games/order/ratmax

Extrae todos los video juegos de la BD postgres, los filtra y los oredna por Precio de menor a mayor
GET --> https://gameshopback-pf-ek5y.onrender.com/games/order/pricemin

Extrae todos los video juegos de la BD postgres, los filtra y los oredna por Precio mayor a menor
GET --> https://gameshopback-pf-ek5y.onrender.com/games/order/pricemax


Elimina un video juego pasandole el ID
DELETE --> https://gameshopback-pf-ek5y.onrender.com/games/19710


Actualiza un video juego
PUT --> https://gameshopback-pf-ek5y.onrender.com/update/19710
Se le deve pasar por body la siguiente estructura
{
        "id": "19710",
        "name": " ensayo put",
        "released": "2013-09-17",
        "rating": 4,
        "platforms": [
            "PlayStation 5",
            "Xbox Series S/X",
            "PlayStation 4",
            "PC",
            "PlayStation 3",
            "Xbox 360",
            "Xbox One"
        ],
        "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "genre": [
            "Action",
            "Adventure"
        ]
    }


Agregar un nuevo video juego
POST --> https://gameshopback-pf-ek5y.onrender.com/games
Se le deve pasar por body la siguiente estructura

{
    "id": 19710,
        "name": " Prueba post",
        "released": "2013-09-17",
        "rating": 4,
        "platforms": [
            "PlayStation 5",
            "Xbox Series S/X",
            "PlayStation 4",
            "PC",
            "PlayStation 3",
            "Xbox 360",
            "Xbox One"
        ],
        //"image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "genre": [
            "Action",
            "Adventure"
        ]
    }




    GENEROS


Obtener Generos

GET --> https://gameshopback-pf-ek5y.onrender.com/genres