# Movie Saga 

## Description

_Duration: weekend project_

Web app to display a listing of movies. The user will be able to search movies from the Open Movie Database (OMDB). The user will be able to add a genre to a movie. The user will be able to add a new movie to the database.


## Installation

The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries

1. Create a database named `saga_movies_weekend`
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly.
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!


## Development Setup Instructions

This app uses an OMBD_API_KEY which will be used in the environment variables. The user will have to sign up to get a key from 
[omdb](https://www.omdbapi.com/).

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  OMBD_API_KEY=your key
  ```

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`


## Deployment

1. Create a new Heroku project
2. Link the Heroku project to the project GitHub Repo
3. Create an Heroku Postgres database 
4. Connect to the Heroku Postgres database from Postico
5. Create the necessary tables
6. Add an environment variable for `OMDB_API_KEY`
7. In the deploy section, select manual deploy

## Built With
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [Postgresql](https://www.postgresql.org/)

## Acknowledgement
Thanks to [Emerging Digital Academy](https://www.emergingacademy.org/) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [davidvinson018@gmail.com](www.google.com)

