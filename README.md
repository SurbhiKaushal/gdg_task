# GDG Notes API

Backend API project for SRM Google Developers Club recruitment.

## Features

- User Registration & Login
- Password hashing with bcrypt
- JWT Authentication
- Notes CRUD (Create, Read, Update, Delete)
- Role-based Access Control (User/Admin)
- Search notes by title
- Pagination for notes listing
- Swagger API documentation
- Environment configuration via `.env`

## Installation

1. Clone the repository:

git clone <your-repo-url>
Navigate to project folder:

cd gdg-notes-api
Install dependencies:

npm install
Create .env file in the root directory:

PORT=5000
JWT_SECRET=your_jwt_secret
REFRESH_SECRET=your_refresh_secret
Run the server:

node server.js
Server will run at: http://localhost:5000

API Endpoints
Auth
POST /api/auth/register – Register a new user
POST /api/auth/login – Login user and get JWT token
POST /api/token – Refresh JWT token

Notes
POST /api/notes – Create note (authenticated)
GET /api/notes – Get notes (authenticated, search & pagination supported)
PUT /api/notes/:id – Update note (users can update their own, admin can update any)
DELETE /api/notes/:id – Delete note (users can delete their own, admin can delete any)

Swagger Documentation
http://localhost:5000/api-docs
Example Request (Postman)
Create Note
Headers:

Authorization: Bearer <YOUR_TOKEN>
Content-Type: application/json
Body:

{
"title": "My first note",
"content": "This is the content"
}
License
This project is for SRM GDG recruitment purpose.
