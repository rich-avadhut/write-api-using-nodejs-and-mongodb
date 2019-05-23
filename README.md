# write-api-using-nodejs-and-mongodb
API implementation in nodejs with mongodb.

Technologies _**NodeJS**_, _**MongoDB**_

To connect MongoDB with node and write API in nodejs need to follow the following steps.

1. Install Express using the following command
    - _**npm install express**_

2. Install CORS using the following command
    - _**npm install cors**_

3. Install MongoDB using the following command
    - _**npm install mongo**_

4. Run
    - _**node index.js**_

After running above command, We can be able to access the nodejs API with MongoDB.

### Following are the Examples to access the API
1) GET Method
`URL: http://localhost:8080/posts`
   - This is the simple GET request, Here we are showing all the posts stored in posts collections.


2) POST Method
`URL: http://localhost:8080/posts`
`Parameters: {`
    `"title": "title One"`
`}`
`Headers : `
	`Content-Type: application/json`


3) PUT Method
`URL: http://localhost:8080/posts`
`Parameters: {`
        `"_id": "_**PostID**_",`
        `"title": "title One"`
    `}`
`Headers : `
	`Content-Type: application/json`


4) DELETE Method
`URL: http://localhost:8080/posts/_**PostID**_`

_**Note:**_ _The application that we have developed running on 8080 port._


Here you go,
**Best Luck**