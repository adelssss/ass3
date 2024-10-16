# Blog API

## Description
This is a CRUD API for managing blog posts. The API allows users to create, read, update, and delete blog entries. Each blog post consists of a title, body, author, and timestamps.

## Features
- Create new blog posts
- Retrieve all blog posts
- Fetch a single blog post by ID
- Update existing blog posts
- Delete blog posts

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)

## Installation

### Prerequisites
- Node.js installed on your machine
- MongoDB server running

### Steps to Set Up
1. Initialize project
2. Install npm packages:
-npm i express
-npm i dotenv
-npm i mongoose
-npm i body-parser
-npm install --save-dev nodemon
3.Install  MongoDB database
4.Connect MongoDB database with Express.js:
-Create a dotenv file in the root directory
-Create a server.js
-Run app using npm start
5.Create folder structure
-Create blogModel.js file inside model folder
-Create blogController.js file inside controller folder
-Create blogRoute.js file inside route folder
6.Install Postman:
-sign in
7.POST data into MongoDB
8.GET all blogs data from MongoDB
9.Get a single blog data from MongoDB
10.UPDATE data from MongoDB
11.DELETE data from MongoDB
12.API will be available at :
http://localhost:3000/api/blog
## API Endpoints
-Create a blog post
Endpoint:(http://localhost:3000/api/blog/create)
Requested body:
{
  "title": "Blog Title",
  "body": "Blog content goes here.",
  "author": "Author Name"
  "createdAt":"Created time"
}
Response:
Status 200: Returns the created blog post object.
Status 400: If a blog post with the same title and author already exists.


-Get all blogs posts
Endpoint:(http://localhost:3000/api/blog/getAllBlogs)
Response:
Status 200: Returns an array of blog posts.
Status 404: If no blog posts are found.

-Get a single blog post using ID
Endpoint:(http://localhost:3000/api/blog/get/ID)
Response:
Status 200: Returns the blog post object for the specified ID.
Status 404: If the blog post is not found.

-Update a blog post
Endpoint:(http://localhost:3000/api/blog/update/ID)
Requested body: {
  "title": "Updated Blog Title",
  "body": "Updated content goes here."
}
Response:
Status 201: Returns the updated blog post object.
Status 404: If the blog post is not found.

-Delete a blog post:
Endpoint:(http://localhost:3000/api/blog/delete/ID)
Response:
Status 200: Returns a success message.
Status 404: If the blog post is not found.
## Testing
-You can manually test the API using Postman and check the changes in MongoDB.
