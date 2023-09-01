# Express App

This is an Express app that uses EJS as the view engine and MongoDB as the database. The app also includes livereload for auto-refreshing during development.

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory and add the following variables:
```
PORT=<port number>
MONGODB_URL=<MongoDB connection string>
```

## Usage

1. Run `npm start` to start the server
2. Open `http://localhost:<port number>` in your browser
3. You can add new articles by visiting `/add-new-article`
4. You can view all articles by visiting `/all-articles`

## Features

- EJS view engine
- Static files served from the `public` directory
- Livereload for auto-refreshing during development
- MongoDB database connection using Mongoose
- Redirect from `/` to `/all-articles`
- Add new article page at `/add-new-article`
- All articles page at `/all-articles`
- 404 error handling