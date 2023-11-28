# Token-Based Authentication System Frontend
This is the Frontend repository for the Token-Based Authentication System project. It uses Vue.js for the frontend framework, Javascript, and HTML.

## API Repository

- You can find the API repository [here](https://github.com/ejosborn/tokenbased-authsystem-api)

## Project Status

- I'm currently taking a break on this project to learn Go, but plan on building a home landing page for the user once successfully logged-in in the near future


## Getting Started

### Installing

- Compiles and hot-reloads for development
```
npm run serve
```

- Lints and fixes files
```
npm run lint
```

## Libraries Used

- [Vue.js](https://vuejs.org/) - Frontend framework for the project

## Usage

### Register a User

- When a user is registering, the user picks a username and a password, then re-enters the password to verify the password. The frontend will then make sure both password fields match, then it will check to see if the username exists in the users database. If the username does exist, the software will tell the user to pick another username. If the username does not exist in the database, the backend will enter the information in the database and then will instruct the user to log in with their username and password.

### User Log In

- When a user logs in, the frontend would make an HTTP request to the backend and checks if the username and password are in the users database. If it is, the HTTP request returns a valid JSON Web Token so that when they log in, the system knows that it is a valid user. If the username and/or password is incorrect, an error is returned and shows the user the error.

## Author

* **Ellis Osborn** - [Ejosborn](https://github.com/ejosborn)

