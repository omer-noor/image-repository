# Shopify Backend Developer Challenge
## Image Repository 

## Installation

You will need to set up a MongoDB database and enter the URI in config/database.js

In the case of a local MongoDB database the URI will be "mongodb://127.0.0.1:27017"

```shell
$ npm install
$ npm run devstart
```
View the project frontend at http://localhost:3000/

#### Implementation
- ADD image(s) to the repository
   - upload images   
   - secure uploads
   - add tags to images

- DELETE image(s)
   - delete images 
   - delete all images
   - secure deletion
   
- SEARCH image(s)
  - Search by tag
  - Search by title (partial or full match)

- User Authentication
  - Create User
  - Login to User Account
  - Authenticate with JWT Token

- View Images
  - Simple frontend to view images
  - Allows for login, deletion and upload

  

## Todo
-Implement user uploads and access control

-More secure login by securely storing JWT token in either localStorage or cookies

-Implement a front-end framework like React to render the front-end 

