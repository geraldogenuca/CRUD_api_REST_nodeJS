# CRUD_api_REST_nodeJS
__CRUD__ (Create, Read, Update and Delete) system for practice and study, a REST API using __Express.js__ and __MySQL__ database.

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/geraldogenuca/CRUD_api_REST_nodeJS?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/geraldogenuca/CRUD_api_REST_nodeJS">
	
  <a href="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/geraldogenuca/CRUD_api_REST_nodeJS">
  </a>

  <a href="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/geraldogenuca/CRUD_api_REST_nodeJS">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-GNU-brightgreen">
</p>

- [CRUD\_api\_REST\_nodeJS](#crud_api_rest_nodejs)
  - [:link: Social Media](#link-social-media)
  - [:file\_folder: Project](#file_folder-project)
  - [:desktop\_computer: Technologies](#desktop_computer-technologies)
    - [Libs and Framework.](#libs-and-framework)
    - [Apps for development.](#apps-for-development)
  - [:computer: Install](#computer-install)
    - [Local Environment](#local-environment)
    - [Docker environment](#docker-environment)
    - [Creating MySQL Database.](#creating-mysql-database)
  - [:man\_technologist: Using](#man_technologist-using)
    - [Using the API](#using-the-api)
    - [Project Structure](#project-structure)
    - [API end-points](#api-end-points)
    - [Other end-points](#other-end-points)

## :link: Social Media

<p align="center">
  <a href="https://www.instagram.com/geraldogenuca2024/" target="_blank">
    <img alt="Instagram" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>
  </a>

  <a href="https://www.linkedin.com/in/geraldo-g-s-jr-987218201/" target="_blank">
    <img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>

  <a href="https://github.com/geraldogenuca" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
  </a>

  <a href="https://api.whatsapp.com/send?phone=5585994260049" target="_blank">
    <img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
  </a>
</p>

## :file_folder: Project

Performing the clone via the command line.
- git clone https://github.com/geraldogenuca/CRUD_api_REST_nodeJS.git

  Creating a simple example of CRUD "Create, Read, Update and Delete" for study, developing a system for registering, 
modifying and updating products, also registering customers to carry out the sales process. A REST API made with Framework 
Express running with node-JavaScript, using MySQL database for data records.
  The aim of the project, in addition to being able to familiarize yourself with the basis of the JavaScript language, 
is to understand the main concepts of an API and web development.

## :desktop_computer: Technologies

### Libs and Framework.

- __express:__ unbiased and minimalist fast web framework for Node. js , which provides a robust set of features 
for web and mobile applications.

- __nodemon:__ is a tool that helps develop Node.js based applications by automatically restarting the node application 
when file changes in the directory are detected.
  
- __mysql2:__ MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary 
log protocol, compression, ssl much more.
  
- __morgan:__ HTTP request logger middleware for node.js. Named after Dexter, a show you should not watch until completion.
  
- __bcrypt:__ a library to help you hash passwords.
  
- __cors:__ is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
  
- __dotenv:__ is a zero-dependency module that loads environment variables from a .env file into process.env.
  
- __jsonwebtoken:__ JWT (JSON Web Token) is an open standard that allows you to securely transmit information between different 
parties using a compact, self-contained JSON format.
  
- ""multer:""  is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written 
on top of busboy for maximum efficiency.

### Apps for development.

<img alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white&style=for-the-badge" /><br>
NodeJS is a server-side JavaScript code execution environment. It is used to create web applications, automation programs, 
and command-line tools.
<br>

<img alt="MySQL" src="https://img.shields.io/badge/MySQL-20232A?logo=mysql&logoColor=white&style=for-the-badge" /> <br>
MySQL Database open source relational database management system used in most free applications to manage their databases. MySQL uses SQL (Structure Query Language), which is the most popular language for inserting, accessing and managing content stored in 
a database.
<br>

<img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge" /> <br>
Docker is an open source containerization technology designed for developers, and used to package, deliver, and run applications.
<br>

![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)<br>
Insomnia is an open source desktop application that takes the pain out of interacting with and designing, debugging, and testing APIs. Insomnia combines an easy-to-use interface with advanced functionality like authentication helpers, code 
generation, and environment variables.
as

## :computer: Install

### Local Environment
1 - Clone the repository as indicated at the beginning of the project. 

Abra o CMD e execute os comandos abaixo.
  
- cd C:/chosendirectory - 'Going to the directory where the project will be saved'.
  
- git clone https://github.com/geraldogenuca/CRUD_api_REST_nodeJS.git - 'Cloning the project'.

Or download the zip file and unzip it into a folder.

2 - Open the project in the IDE or text editor of your choice.

3 - In CMD, run the commands below.

- __npm install__ - Installing framework libs and dependencies.

With these steps, your node api will already be up and running, but it has a database dependency.

### Docker environment

1 - Clone the repository as indicated at the beginning of the project. 

Abra o CMD e execute os comandos abaixo.
  
- cd C:/chosendirectory - 'Going to the directory where the project will be saved'.
  
- git clone https://github.com/geraldogenuca/CRUD_api_REST_nodeJS.git - 'Cloning the project'.

Or download the zip file and unzip it into a folder.

2 - Open the project in the IDE or text editor of your choice.

3 - Create Docker environment.

  3.1 - Open the file __docker-compose.yml__,

  3.2 - Right-click on any area of ​​the file, go to the __Compose Up__ option and execute, wait for the Docker containers to be created.

### Creating MySQL Database.

1 - Creating Database.

  1.1 - To create the database, open the database folder in the project root folder, then open the __db_api_creater.sql__ file, copy    
        everything and paste it into MySQL Workbench then run the queries, or open the file database model ""db_ERR.mwb"" which is in 
        the same folder, and then synchronize the model you uploaded to Workbench.
    
2 - Configuring Database.
  
  2.1 - Note in the project folder, allow the __.env__ file to be saved in the repository, I did this to show the dynamics of using the 
        variable system with the __dotenv library__. The variables are very intuitive and will be present both in the creation of the 
        express.js server, also in the creation of the database defining variables for communication, and in some other uses to facilitate 
        the code.

  2.2 - Configure the variables that change the name that I use in my project referring to the database, for your database that you will 
        use.
  
  3.2 - If you prefer, you can access the __config_db.js__ file, found in the __src/config/__ directory, and change the variables to the 
        normal configuration parameters of your database. 
  
  3.3 - In Docker, the database will be created together with the application, you will see that in the __docker-compose.yml__ file, 
        variables are also used, the only thing you should change in this file will be the name of the containers if you choose .


## :man_technologist: Using

### Using the API

1 - Install Insomnia Download: https://insomnia.rest/download

  - Then install and login.

  - Now locate the __+__ symbol, next to the filter field to create a new project.

  <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/insomnia01.png">
  
  - Locate and click on Icon Import.

  <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/insomnia02.png">

  - Click on Choose Files, and locate the project folder and locate the file "Insomnia_2025-01-22.json", and load the file.

  <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/insomnia03.png">
  <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/insomnia04.jpg">

  - Click Scan, then import.

  <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/insomnia05.png">
  <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/insomnia06.png">

  - Then click Import, it will look like in the photo.

  <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/insomnia07.png">

  - Open the project collection and have all end-points, as shown in the respective photos below.

  <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/insomnia08.png">
  <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/insomnia09.png">

2 - Register API
    In order not to make a long tutorial, I will be very basic because the titles are very intuitive, so I will talk about a table and the 
    others follow the same registration scheme.

  - Registering API customers.
    We will start with this record because, only general search and search for a specific item and allowed to all, plus the fields of 
    registration, update and delete, can only be done by logged customers, follows the intrudes.

    In image the abix shows the fields that the registration calls and next to it will show the result, if positive show the inserted data, 
    if there is error appear the error regarding what is missing or is wrong.

    <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/registerCostumer.jpg">

    Then we will go to the login, it would ask for the customer's email and password, after the action beside the action will appear the 
    authentication token, and if there is a fault will show the respective error.

    <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/customerAuthent.jpg">

    I will show you how to use the actions that requires authentication "Login".
    Go to the login copy the token generated. Then click update, va in the auth tab, which is below this field line, there will have a 
    arrow click on it, then click where the "Bearer Token" field has, there in the Token field copy the token generated in the login. Ready 
    now that you can do the update, repeat this to all registration, change and exclusion fields.    

    <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/bearerToken.jpg">
    <img src="https://github.com/geraldogenuca/CRUD_api_REST_nodeJS/blob/main/public/imgsReadme/updated.jpg">

    Always repeat the procedures in the corresponding fields below, and good use of the tutorial.


### Project Structure


| Name                                | Description                                    |
|-------------------------------------|------------------------------------------------|
| **database/**                       | Folder with SQL files for creating the database|
| **insominia_end-points/**           | Client API REST testing tool files             |
| **public/uploads/**                 | Project photo uploads folder                   |
| **node_modules/**                   | Storage of project dependencies                |
| **src/**                            | Project source files folder                    |
| **src/api/controllers/categories/** | Category Controllers File                      |
| **src/api/controllers/costumers/**  | Costumer Controllers File                      |
| **src/api/controllers/images/**     | Image Controllers File                         |
| **src/api/controllers/orders/**     | Order Controllers File                         |
| **src/api/controllers/products/**   | Product Controller File                        |
| **src/api/middleware/login/**       | Login and authentication control file          |
| **src/api/middleware/uploads/**     | Middleware File Storage Folder                 |
| **src/api/routes/categories/**      | Category Routes File                           |
| **src/api/routes/costumers/**       | Costumer Routes File                           |
| **src/api/routes/images/**          | Image Routes File                              |
| **src/api/routes/orders/**          | Order Routes File                              |
| **src/api/routes/products/**        | Product Routes File                            |
| **src/api/config/**                 | Project Settings Folder                        |
| **src/api/config/**                 | Database connection configuration file         |
| **src/main.js**                     | Application main file                          |
| **src/server.js/**                  | Node server creation and status file           |
| **.dockerignore/**                  | Docker file to ignore files                    |
| **.env/**                           | File for creating variables used in the project|
| **.gitignore/**                     | Git file to ignore files                       |
| **docker-compose.yml/**             | Docker container creation and management file  |
| **Dockerfile/**                     | Instruction file for creating containers       |
| **LISCENSE/**                       | License rules file                             |
| **package-lock.json/**              | Dependency version log file                    |
| **package.json/**                   | Dependency management and control file         |



### API end-points


| POST - (create)                                               |
|---------------------------------------------------------------|
| **http://localhost:5000/categories/create/**                  |
| **http://localhost:5000/costumers/create/**                   |
| **http://localhost:5000/images/create/**                      |
| **http://localhost:5000/orders/create/**                      |
| **http://localhost:5000/products/create/**                    |


| GET - (index)                                  |
|------------------------------------------------|
| **http://localhost:5000/categories/index/**    |
| **http://localhost:5000/costumers/index/**     |
| **http://localhost:5000/images/index/**        |
| **http://localhost:5000/orders/index/**        |
| **http://localhost:5000/products/index/**      |


| GET - Details - (show)                                        |
|----------------------------------------------------|
| **http://localhost:5000/categories/:id_category/** |
| **http://localhost:5000/costumers/:id_costumer/**  |
| **http://localhost:5000/images/:id_image/**        |
| **http://localhost:5000/orders/:id_order/**        |
| **http://localhost:5000/products/:id_product/**    |



| Update - (update)                                        |
|----------------------------------------------------------|
| **http://localhost:5000/costumers/update/:id_costumer/** |
| **http://localhost:5000/orders/update/:id_order/**       |
| **http://localhost:5000/products/update/:id_product/**   |


| DELETE - (delete)                                        |
|----------------------------------------------------------|
| **http://localhost:5000/categories/update/id_category/** |
| **http://localhost:5000/costumers/update/:id_costumer/** |
| **http://localhost:5000/images/update/:id_image/**       |
| **http://localhost:5000/orders/update/:id_order/**       |
| **http://localhost:5000/products/update/:id_product/**   |


 
### Other end-points


| Name                                                | Description                         |
|-------------------------------------------|-----------------------------------------------|
| **http://localhost:5000/costumer/login/** |  Permission login for customers  - type: POST |
| **http://localhost:5000/images/product/** |  Search all images by product    - type:  GET |


This project is under the GNU license. See [LICENSE](LICENSE.md) for details.
