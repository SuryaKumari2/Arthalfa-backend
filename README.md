# Product Management API

This is a simple RESTful API for managing a list of products. It allows users to create, update, delete, and fetch products. The API is built using Node.js, Express, and MongoDB with Mongoose as the ODM.

## Features
- Create a new product.
- Fetch a list of all products.
- Fetch a product by its ID.
- Update an existing product.
- Delete a product by its ID.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **CORS**: Middleware to allow cross-origin requests.
- **Body-Parser**: Middleware to parse incoming request bodies.
- **dotenv**: For environment variable management.

## Prerequisites
- **Node.js** installed 
- **MongoDB** installed and running (MongoDB Atlas)
- **Postman** installed to check APIs

## Installation
1. **Clone the Repository**
   https://github.com/SuryaKumari2/Arthalfa-backend.git
2. **Initialize the Project**
   npm init
3. **Install the Dependencies**
   npm i express mongoose nodemon cors body-parser dotenv

4. **Environment variables**
   use your MONGO_URI in .dotenv file
