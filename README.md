
# Admin Dashboard - Product, Business and Sales Tracking
## Project Overview

This web application is an excellent tool for efficiently managing and organizing product inventory, customer information, transaction details, sales data, and performance metrics.




## Installation

Install my-project with npm

```bash
  npm install
```
Initialize Databases

```bash
  cd server 
```
In index.js uncomment all the database insertions,and run the server. 

Note: Comment all the database insertions to avoid,duplicate data in MongoDB.

Run Server

```bash
  cd server
  npm run dev
```

Run Client

```bash
  cd server
  npm run start
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

Server .env file

`MONGO_URL= 'Your Mongo Databse URL'`

`PORT=5001`

Client .env

REACT_APP_BASE_URL=http://localhost:5001

