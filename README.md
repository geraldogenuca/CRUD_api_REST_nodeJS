#CRUD_api_REST_nodeJS
CRUD system, REST API in Express, nodeJS and MySQL.

GitHub language count Repository size Made by geraldogenuca Latest GitHub commit Repository issues License

  [Project](#Project) | [Technologies](#Technologies) | [Install](#Install) | [Using](#Using) | [License](#License) 

## :file_folder: Project

Performing the clone via the command line.
- git clone https://github.com/geraldogenuca/CRUD_api_REST_nodeJS.git

    Creating a simple example of CRUD "Create, Read, Update and Delete" for study, developing a system for registering, 
modifying and updating products, also registering customers to carry out the sales process. A REST API made with Framework 
Express running with node-JavaScript, using MySQL database for data records.
    The aim of the project, in addition to being able to familiarize yourself with the basis of the JavaScript language, 
is to understand the main concepts of an API and web development.

## :computer: Technologies

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

## :gear: Install

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

#### Creating MySQL Database.

1 - Creating DataBase.

    To create the database, open the database folder in the project root, then open the "db_api_creater.sql" file, copy everything and 
    it in MySQL WorkBench, or open the "db_ERR.mwb" database model file that is in the same folder and synchronize the file.
  
2 - Configuring Database.
  
  2.1 - Note in the project folder, allow the ".env" file to be saved in the repository, I did this to show the dynamics of using system 
        variables with the dotenv library. The variables are very intuitive and they will be present both in the creation of the express 
        server, in the creation of the database, and in some other uses to make the code easier.

  2.2 - Configure as variaveis substituindo o nome que eu usei no meu projeto, para os do banco de dados que ira usar.
  
  3.2 - If you prefer, you can go to the file, "config_db.js", found in the "src/config/" directory, and change the variables to the 
        configuration parameters of your database.

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

2 - Configuring Database.
  
  2.1 - See that in the "docker-compose.yml" file, there will also be fields related to environment variables similar to those in the 
        ".evn"  file, so the process will be similar as if it were local, the difference is that it has to be done and when changed you will have to recreate it in Docker like the "Compose up" procedure by clicking on the document area and executing it, or type it on the command line.

  2.2 - Configure the variables by replacing the name I used in my project with the name of the database you will use.
  
  3.2 - If you prefer, you can access the "config_db.js" file, found in the "src/config/" directory, and change the variables to the 
        configuration parameters of your database, and always at the end of any change go to the "docker-compose.yml" file and run "Compose up".

## :question: Using


## :chart_with_upwards_trend: License

This project is under the GNU AFFERO GENERAL PUBLIC license. See LICENSE for details.