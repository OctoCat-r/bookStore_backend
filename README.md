# Node.js Backend for Book Store

## Project Description

This Node.js project provides the backend functionality for a book store, including:

- CRUD APIs for books
- User authentication (login and signup)
- Payment gateway integration with Razorpay

## Technologies Used

- Node.js
- Express framework
- Vercel serverless PostgreSQL database
- Razorpay API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/OctoCat-r/bookStore_backend.git

2. Navigate to the project directory:
   ```bash
   cd bookstore_backend

3. Install dependencies:
   ```bash
   npm install -f

## SetUp

1.   Start the server
     ```bash
     nodemon index.js
     
2. Access the application: Open http://localhost:4000

# Project Details

## API Endpoints:

- List books
- Create a book
- Update a book
- Delete a book
- User registration
- User login
- Payment processing
- Search book by title genre
- search by id

## Best Practices:

- Follows RESTful API design principles
- Employs data validation and sanitization
- Implements error handling and logging
- Uses secure password storage

## Additional Information

### Database Structure:

- Table for books (id, title, authors,description, genre, price, image, rating)
- Table for users (id, username, email, password)

### Payment Gateway:

- Uses Razorpay API for secure payments


## Create a `.env` file in the project root and add the following environment variables:
### NOTE : Please use the provided PostgreSQL connection URL for optimal results


  ```env
  POSTGRES_URL= "postgres://default:wLEJ5qTbn3pP@ep-floral-lake-85666372-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb"
  RAZORPAY_ID=your_razorpay_key_id
  RAZORPAY_SECRET=your_razorpay_key_secret
  JWT_SECRET = your secret key
  PORT = deafult port








