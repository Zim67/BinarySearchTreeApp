# Binary Search Tree Application

This project is a Binary Search Tree application that allows users to visualize and interact with binary search trees. It includes a backend REST API built with Spring Boot and a frontend developed using React. The application demonstrates basic operations like insertion, deletion, and traversal of nodes in a binary search tree.

## Project Structure

The project is divided into two main parts:
- **Backend**: Built with Java and Spring Boot, this handles the core logic of the binary search tree operations and serves the REST API.

- **Frontend**: Developed with React, this provides the user interface for interacting with the binary search tree.


## Getting Started

### Prerequisites

- **Java 11** or later
- **Maven** for building the backend
- **Node.js** and **npm** for managing frontend dependencies
- **Git** for version control

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Zim67/BinarySearchTreeApp.git
   cd BinarySearchTreeApp

Backend Setup:

Navigate to the backend directory:
bash
Copy code
cd backend

Install the backend dependencies:
bash
Copy code
mvn clean install
Run the backend application:
bash
Copy code
mvn spring-boot:run
Frontend Setup:

Navigate to the frontend directory:
bash
Copy code
cd frontend
Install the frontend dependencies:
bash
Copy code
npm install
Start the frontend development server:
bash
Copy code
npm start
Usage
Access the Application:

Open your browser and navigate to http://localhost:3000 to access the frontend.
The backend API can be accessed at http://localhost:8080.
Available Endpoints:

GET /api/trees: Retrieve all binary search trees.
POST /api/trees: Create a new binary search tree.
GET /api/trees/{id}: Retrieve a specific tree by ID.
DELETE /api/trees/{id}: Delete a specific tree by ID.

License
This project is licensed under the MIT License - see the LICENSE file for details.


