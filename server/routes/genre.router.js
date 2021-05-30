const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres: SELECT * FROM "genres";

  const query = `SELECT * FROM "genres" ORDER BY "name" ASC;`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })

});

router.get('/detail/:id', (req, res) => {
  movie = req.params;
  // console.log('detail for movie genre', genre);
  const query = `
  SELECT "genres"."id", "genres"."name"
  FROM "genres"
  JOIN "movies_genres" ON ("genres"."id" = "movies_genres"."genre_id")
  JOIN "movies" ON ("movies"."id" = "movies_genres"."movie_id")
  WHERE "movies"."id" = $1;`;
  pool.query(query, [movie.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Error: GET genre details');
      res.sendStatus(500);
    })
})


module.exports = router;