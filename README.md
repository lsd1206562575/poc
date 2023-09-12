# poc
This is a full-stack user management application. The project is divided into two parts:

poc-ui: A front-end application built using React.js and Bootstrap 5.
poc-server: A back-end REST API built with Spring Boot, Spring Data JPA, and MySQL.

## poc-ui

The front-end application is designed with a focus on User Experience. It provides an easy-to-use interface for managing users. Bootstrap 5 is used for the styling, providing a modern, responsive design. The application includes functionality to add, update, view and and delete users.

### Installation
1. Install [Node.js and npm](https://nodejs.org/en/download/) (npm is included with Node.js) on your machine.
2. Navigate to the `poc-ui` directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the application.
5. Open your browser to `http://localhost:3000` to view the application.

## poc-server

The back-end REST API is implemented using Spring Boot and Spring Data JPA with a MySQL database. It provides CRUD operations for a `User` model. The application includes a repository for data access, and a controller for handling HTTP requests.

### Installation

1. Ensure you have a MySQL database running. You can update your database name, MySQL username, and password in the `application.properties` file in the `src/main/resources` directory.
2. Import the `poc-server` directory as a Maven project in your IDE.
3. Run the application from your IDE.
4. The API will be available at `http://localhost:8080`.

## Usage

The front-end application communicates with the back-end API to login, create, read, update, and delete users.

### Website
![image](https://github.com/lsd1206562575/poc/assets/41049653/7af39ab1-0a74-46cb-8da9-f4f0928ff9b1)

![image](https://github.com/lsd1206562575/poc/assets/41049653/dae33bda-1a0b-4125-8d99-3bc34d3c452e)

![image](https://github.com/lsd1206562575/poc/assets/41049653/616b5b36-33eb-4952-93d9-917848d385be)

![image](https://github.com/lsd1206562575/poc/assets/41049653/8b3d745c-2361-4e01-8da3-9f8c8c817bbd)

### CRUD operations

![image](https://github.com/lsd1206562575/poc/assets/41049653/afbb0c54-656c-44b7-b4cd-993da96f75d9)

![image](https://github.com/lsd1206562575/poc/assets/41049653/9cc65d62-77d5-45e0-abfc-92a28ec29fa8)

![image](https://github.com/lsd1206562575/poc/assets/41049653/33f0b42e-cd6c-4c92-be8d-a8ec7bcc0423)

![image](https://github.com/lsd1206562575/poc/assets/41049653/abfbf669-ea83-4df5-ba4c-ce5c02f40558)

![image](https://github.com/lsd1206562575/poc/assets/41049653/f2d44800-d1f5-4ada-860d-ffdc9dda7f70)

![image](https://github.com/lsd1206562575/poc/assets/41049653/2d0a3b68-8102-4a99-b29d-d5205b4c1332)

## Authentication using JWT on Frontend

![image](https://github.com/lsd1206562575/poc/assets/41049653/18527434-8ebc-4f9f-a9ee-1da946a00bd5)

![image](https://github.com/lsd1206562575/poc/assets/41049653/99e4509d-d1a3-459d-b4e6-f3cb9fd1befe)

## Authentication using JWT on Backend

![image](https://github.com/lsd1206562575/poc/assets/41049653/33621e97-a325-4b55-b0c6-34a8d8d411e4)

![image](https://github.com/lsd1206562575/poc/assets/41049653/6f882ab3-ecb4-41b4-aff4-d9d2b3e0f6b8)



