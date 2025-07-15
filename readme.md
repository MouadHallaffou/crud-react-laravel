# CRUD Application with React and Laravel

This project is a simple CRUD (Create, Read, Update, Delete) application built using React for the frontend and Laravel for the backend.

## Features
- Create, read, update, and delete records.
- RESTful API integration.
- Responsive design.

## Prerequisites
- Node.js
- Composer
- PHP
- MySQL

## Installation

### Backend (Laravel)
1. Clone the repository:
    ```bash
    git clone https://github.com/MouadHallaffou/crud-react-laravel.git
    cd server
    ```
2. Install dependencies:
    ```bash
    composer install
    ```
3. Configure `.env` file:
    ```bash
    cp .env.example .env
    ```
    Update database credentials in `.env`.
4. Run migrations:
    ```bash
    php artisan migrate
    ```
5. Start the server:
    ```bash
    php artisan serve
    ```

### Frontend (React)
1. Navigate to the frontend directory:
    ```bash
    cd client
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

## Usage
1. Access the application at `http://localhost:8000`.
2. Perform CRUD operations on the records.

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue.

## Contact
For any inquiries, please contact [mouadhallaffou@gmail.com].