# Simple Microservice API

This is a simple app to manage products in storage. 

## Tech chosen for this task

Node.js and Express.js 

## Getting started
This application requires Node.js and Express.js to be installed. Please follow [this to install Node.js](https://nodejs.org/en/download/package-manager/) and [to install Express.js](https://expressjs.com/en/starter/installing.html)

After installation, to start the app, run in terminal:
`npm start`

**Note**
* A dummy json file is used instead of a real database for simplicity.

* Working version of the app is deployed at: <https://pure-retreat-63467.herokuapp.com/api/>

## API
API consists of 5 endpoints:

**GET /products** Get all products

**GET /products/id** Get a spefic product data by id. Query example for product with id = '2':
`products/2`

**POST /products** Add a product. Body example:
`{"productName": "Tomato", "quantity": 5, "id": 2361}`

**PUT /products/id** Update a product data by id. Query example: `products/3` & Body example: 
`{"productName": "Watermelon", "quantity": 5}`

**DELETE /products/id** Remove a product by id. Query example: `products/3`

API can be testing using tool like [https://www.postman.com/](Postman)