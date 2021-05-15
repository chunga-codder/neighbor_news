# Hello Neighbor

<p align="center">
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  </a>
  
  <a href="https://www.mongodb.com/">
    <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>
  </a>

  <a href="https://nodejs.org/en/">
    <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
   </a>

  <a href="https://expressjs.com/">
    <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
  </a>

  <a href="https://getbootstrap.com/">
    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
  </a>

  <a href="https://dashboard.heroku.com/">
    <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku">
  </a>

  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="MIT" />
  </a>

  <img src="https://img.shields.io/github/repo-size/kaylamuraoka/neighbor_news?style=for-the-badge" alt="GitHub repo size"/>

  <img src="https://img.shields.io/github/languages/count/kaylamuraoka/neighbor_news?style=for-the-badge" alt="GitHub language count"/>

  <img src="https://img.shields.io/github/languages/top/kaylamuraoka/neighbor_news?style=for-the-badge" alt="GitHub top language"/>

</p>

## Description

Hello Neighbor is an online community for the neighborhood where neighbors can post products they have for sale, message their neighbors, and much more! This application is a MERN full stack application that has full CRUD functionality, verifies that users are logged in and registered, and allows users to upload pictures of their products.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

In order to successfully launch this web application, you will need to have the following installed in your local working environment:

1. [**Node.js**](https://nodejs.org/en/download/), which is a run-time environment which includes everything you need to execute a program written in JavaScript. If haven't downloaded the [**Node.js**](https://nodejs.org/en/download/) source code or a pre-built installer for your platform, you will need to do so using this [**link**](https://nodejs.org/en/download/).

2. [**MongoDB**](https://www.mongodb.com/), which is a open-source document-based NoSQL database stores the user's workout information, and is used in the back-end of this application. [**Click here**](https://www.mongodb.com/try/download/community) for installation instructions

To install this application locally carry out the following steps:

1. Clone this [**project repository**](https://github.com/geoffreyjiang/neighbor_news) locally. For steps on how to clone a repository using the command line, read this section of the Github Docs [**about cloning a repository**](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository#about-cloning-a-repository).

2. Navigate to the project directory locally by the command `cd [local repository]`

3. Run the command `npm install`. Note: Make sure to delete the node_modules folder and any 'lock' files such as
   yarn.lock or package-lock.json before running `npm install` if present.

4. Check package.json file and ensure scripts are notated as below:

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "NODE_ENV=production node server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"nodemon server.js\" \"npm run client\"",
    "install": "cd client && npm install",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run build",
    "reset": "cd utils && node dbReset.js"
  }
```

4. Now run `npm run dev` to run the app in the development mode.

### The NPM dependencies used in this project are:

- [**mongodb**](https://www.mongodb.com/)

- [**express**](https://expressjs.com/): the most widely used Node.js server framework, this allows us to create our own server-side APIs.

- [**react**](https://reactjs.org/)

- [**mongoose**](https://mongoosejs.com/): a MongoDB object-document mapping, or ODM ) library for MongoDB and Node.js.

- [**bootstrap**](https://getbootstrap.com/)
- [**cloudinary**](https://cloudinary.com/documentation/react_integration)
- [**bycrptjs**](https://www.npmjs.com/package/bcrypt)
- [**axios**](npmjs.com/package/axios)
- [**jsonwebtoken**](https://www.npmjs.com/package/jsonwebtoken)
- [**dotenv**](https://www.npmjs.com/package/dotenv)

## Usage

Click this [**link**]() to view the deployed application.

In this current release users are only able to:

1. Create an account
2. Post products
3. Delete products
4. View products
5. Update account information

## License

This project is licensed under the [**MIT**](https://opensource.org/licenses/MIT) license.

## Contributing

This Hey Neighbor App was created by:

| [**Geoffrey Jiang**](https://github.com/geoffreyjiang)                                                                                                                  | [**Kayla Muraoka**](https://github.com/kaylamuraoka)        
                                     | [**clinton chunga**](https://github.com/chunga-codder)
                                     | [**Christian Suchoski**](https://github.com/huski82)                                                                                                                     | [**Jason Richards**](https://github.com/jrkrichards)                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://avatars.githubusercontent.com/u/70123826?s=400&u=1f1c91f09949453ac296e1996c9249697be84d52&v=4" width="100" height="100" alt="Github Profile Picture"> | <img src="https://avatars.githubusercontent.com/u/48099435?s=400&u=d6386c0b51a7898d7a3e27613af6446d027a7cf5&v=4=20x20" width="100" height="100" alt="Github Profile Picture"> | <img src="https://avatars.githubusercontent.com/u/69609097?s=400&u=5456e1d3291a5ca883f77bee3840071947afed6a&v=4" width="100" height="100" alt="Github Profile Picture"/> | <img src="https://avatars.githubusercontent.com/u/52109217?s=400&u=2d71407f4a7cff60c647cd6a483b43ecf339a7e6&v=4" width="100" height="100" alt="Github Profile Picture"/> |

Note: All comments and suggestions regarding improvements to this project are welcomed. To contribute to this project, clone this [**project repository**](https://github.com/geoffreyjiang/neighbor_news) locally and commit your code on a separate branch. You may then modify the code to your liking, submit well-formed pull requests and open useful issues. For steps on how to clone a repository using the command line, read this section of the Github Docs [**about cloning a repository**](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository#about-cloning-a-repository).

## Tests

There are no tests available in this release

## Questions

Please use the contact information below if you would like to reach out to us regarding any questions.

Geoffrey Jiang:

- Email: [**geoffreychjiang@gmail.com**](geoffreychjiang@gmail.com)
- Github Profile: [**@geoffreyjiang**](https://github.com/geoffreyjiang)

Kayla Muraoka:

- Email: [**kmurs98@gmail.com**](kmurs98@gmail.com)
- Github Profile: [**@kaylamuraoka**](https://github.com/kaylamuraoka)

Jason Richards:

- Email: [**jrkrichards@gmail.com**](jrkrichards@gmail.com)
- Github Profile: [**@jrkrichards**](https://github.com/jrkrichards)

Christian Suchoski:

- Email: [**christiansuchoski@gmail.com**](christiansuchoski@gmail.com)
- Github Profile: [**@huski82**](https://github.com/huski82)
