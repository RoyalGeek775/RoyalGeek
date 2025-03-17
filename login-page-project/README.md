# Login Page Project

## Overview
This project is a simple login page application built with React. It allows users to sign up, log in, and reset their passwords using a personal question. The application includes validation to ensure user input is correct and secure.

## Features
- User Registration: Users can create an account by providing their email, password, and a personal question for password recovery.
- User Login: Users can log in using their email and password.
- Forgot Password: Users can reset their password by answering their personal question.
- Input Validation: The application validates user input during sign-up and login processes.

## Project Structure
```
login-page-project
├── src
│   ├── components
│   │   ├── Login.js
│   │   ├── SignUp.js
│   │   ├── ForgotPassword.js
│   │   └── Validation.js
│   ├── styles
│   │   └── styles.css
│   └── index.html
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd login-page-project
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the development server, run:
```
npm start
```
Open your browser and go to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.