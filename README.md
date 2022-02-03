# lemonade

## how to start project

start client app:
1) go to "client" folder;
2) npm i (if your opened app at first time);
3) npm run dev;
4) npm run start;
5) npm run watch;

start server app:
1) go to "server" folder;
2) npm i (if your opened app at first time);
3) npm run start;

start unit tests:
npm run test:unit

## API

baseURL : "localhost:3040"

headers :{"Content-Type", "application/json"; "Bearer ${token}"


| Name            | Endpoint       | Method    | Body                 |
|:----------------|:---------------|:---------:|:---------------------|
|Add new contact  |/contact        | POST      |   {                  |                     
|                 |                |           |     firstName:"",    |                     
|                 |                |           |     lastName:"",     |                     
|                 |                |           |     email:"",        |                     
|                 |                |           |     phone:""         |                     
|                 |                |           |              }       | 
|Delete contact   |/contact/${id}  | DELETE    |           ---        |                     
|                 |                |           |                      |                     
|Get all contacts |/contact        | GET       |           ---        |                   
|                 |                |           |                      |                     
|Get contact      |/contact/${id}  | GET       |           ---        |                    
|by ID            |                |           |                      |                     
|                 |                |           |                      |                     
|Update contact   |/contact/${id}  | PUT       |   {                  |                     
|                 |                |           |     firstName:"",    |                     
|                 |                |           |     lastName:"",     |                     
|                 |                |           |     email:"",        |                     
|                 |                |           |     phone:""         |                     
|                 |                |           |              }       | 


