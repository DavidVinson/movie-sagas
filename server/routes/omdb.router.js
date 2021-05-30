const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');

// http://www.omdbapi.com/?t=jaws+2
// http://www.omdbapi.com/?i=tt3896198&apikey=4a75c35
router.get('/:search', (req, res) => {
    let searchTitle = req.params.search;
    console.log(searchTitle);
    console.log(process.env.OMBD_API_KEY);
    axios.get(`http://www.omdbapi.com/?t=${searchTitle}&apikey=${process.env.OMBD_API_KEY}
    `).then((response) => {
        console.log(response.data);
        res.send(response.data);
    }).catch((error) => {
        console.log('Error in GET omdb api', error);
        res.sendStatus(500);
    })

})


module.exports = router;

/*
router.get('/detail/:id', (req, res) => {
  movie = req.params;
  // console.log('detail for movie', movie);
  const query = `
  SELECT "movies"."id" AS "movieId", "movies"."title", "movies"."poster", "movies"."description"
  FROM "movies"
  WHERE "movies"."id" = $1;`;
  pool.query(query, [movie.id])
  .then((result) => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('Error: GET movie details');
    res.sendStatus(500);
  })
})

*/