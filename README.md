# CRUD_api_REST_nodeJS
CRUD (Create, Read, Update and Delete) system for practice and study, a REST API using Express.js and MySQL database.

## Social Media
<br>
<br>
<p aling="center">
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

- [CRUD\_api\_REST\_nodeJS](#crud_api_rest_nodejs)
  - [Social Media](#social-media)
  - [:file\_folder: Project](#file_folder-project)
  - [:desktop\_computer: Technologies](#desktop_computer-technologies)
    - [Libs and Framework.](#libs-and-framework)
    - [Apps for development.](#apps-for-development)
  - [:computer: Install](#computer-install)
    - [Local Environment](#local-environment)
    - [Docker environment](#docker-environment)
    - [Creating MySQL Database.](#creating-mysql-database)
  - [:man\_technologist: Using](#man_technologist-using)

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

- express: unbiased and minimalist fast web framework for Node. js , which provides a robust set of features 
for web and mobile applications.

- nodemon: is a tool that helps develop Node.js based applications by automatically restarting the node application 
when file changes in the directory are detected.
  
- mysql2: MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary 
log protocol, compression, ssl much more.
  
- morgan: HTTP request logger middleware for node.js. Named after Dexter, a show you should not watch until completion.
  
- bcrypt: a library to help you hash passwords.
  
- cors: is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
  
- dotenv: is a zero-dependency module that loads environment variables from a .env file into process.env.
  
- jsonwebtoken: JWT (JSON Web Token) is an open standard that allows you to securely transmit information between different 
parties using a compact, self-contained JSON format.
  
- multer:  is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written 
on top of busboy for maximum efficiency.

### Apps for development.

- NodeJS: is a server-side JavaScript code execution environment. It is used to create web applications, automation programs, 
and command-line tools.

- MySQL: open source relational database management system used in most free applications to manage their databases. MySQL uses 
SQL (Structure Query Language), which is the most popular language for inserting, accessing and managing content stored in 
a database.

- Docker:  is an open source containerization technology designed for developers, and used to package, deliver, and run 
applications.

- Insomnia: is an open source desktop application that takes the pain out of interacting with and designing, debugging, and 
testing APIs. Insomnia combines an easy-to-use interface with advanced functionality like authentication helpers, code 
generation, and environment variables.

## :computer: Install

### Local Environment
1 - Clone the repository as indicated at the beginning of the project. 

Abra o CMD e execute os comandos abaixo.
  
- cd C:/chosendirectory - ##Going to the directory where the project will be saved.
  
- git clone https://github.com/geraldogenuca/CRUD_api_REST_nodeJS.git - ##Cloning the project.

Or download the zip file and unzip it into a folder.

2 - Open the project in the IDE or text editor of your choice.

3 - In CMD, run the commands below.

- npm install - ## Installing framework libs and dependencies.

With these steps, your node api will already be up and running, but it has a database dependency.

### Docker environment

1 - Clone the repository as indicated at the beginning of the project. 

Abra o CMD e execute os comandos abaixo.
  
- cd C:/chosendirectory - ##Going to the directory where the project will be saved.
  
- git clone https://github.com/geraldogenuca/CRUD_api_REST_nodeJS.git - ##Cloning the project.

Or download the zip file and unzip it into a folder.

2 - Open the project in the IDE or text editor of your choice.

3 - Create Docker environment.

  3.1 - Open the file "docker-compose.yml",

  3.2 - Right-click on any area of ​​the file, go to the Compose Up option and execute, wait for the Docker containers to be created.

### Creating MySQL Database.

1 - Creating Database.

  1.1 - To create the database, open the database folder in the project root folder, then open the "db_api_creater.sql" file, copy    everything and paste it into MySQL Workbench then run the queries, or open the file database model "db_ERR.mwb" which is in the same folder, and then synchronize the model you uploaded to Workbench.
    
2 - Configuring Database.
  
  2.1 - Note in the project folder, allow the ".env" file to be saved in the repository, I did this to show the dynamics of using the variable system with the "dotenv" library. The variables are very intuitive and will be present both in the creation of the express.js server, also in the creation of the database defining variables for communication, and in some other uses to facilitate the code.

  2.2 - Configure the variables that change the name that I use in my project referring to the database, for your database that you will use.
  
  3.2 - If you prefer, you can access the "config_db.js" file, found in the "src/config/" directory, and change the variables to the normal configuration parameters of your database. 
  
  3.3 - In Docker, the database will be created together with the application, you will see that in the "docker-compose.yml" file, variables are also used, the only thing you should change in this file will be the name of the containers if you choose .


## :man_technologist: Using


This project is under the GNU license. See [LICENSE](LICENSE.md) for details.