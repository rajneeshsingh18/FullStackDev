➡️create a new template for our application with the :
                    step 1: npm init

➡️automatically generated package.json file
                        {
                            "name": "backend",
                            "version": "0.0.1",
                            "description": "",
                            "main": "index.js",
                            "scripts": {
                                "test": "echo \"Error: no test specified\" && exit 1"
                            },
                            "author": "Matti Luukkainen",
                            "license": "MIT"
                        }

➡️Let's make a small change to the scripts object:
                        {
                        // ...
                        "scripts": {
                            "start": "node index.js",
                            "test": "echo \"Error: no test specified\" && exit 1"
                        },
                        // ...
                        }

➡️First version of our application by adding an index.js file           
                        console.log("Hello world")

➡️we can run it as an npm script:
                        npm start

# ➡️Simple web server

   -->Let's change the application into a web server by editing the index.js files as follow:

                const http = require('http')

                const app = http.createServer((request, response) => {
                response.writeHead(200, { 'Content-Type': 'text/plain' })
                response.end('Hello World')
                })

                const PORT = 3002
                app.listen(PORT)
                console.log(`Server running on port ${PORT}`)

➡️Once the application is running, the following message is printed in the console:
               Server running on port 3002

➡️We can open our humble application in the browser by visiting the address http://localhost:3002:


➡️The primary purpose of the backend server is to offer raw data in JSON format to the frontend.

➡️Let's restart the server (you can shut the server down by pressing Ctrl+C in the console) and let's refresh the browser.

                    npm start

# ➡️ Express

                    npm install express
                    npm update
        
➡️we can install all up-to-date dependencies of the project defined in package.json by running this next command in the project's root directory

                    npm install

# web and express

                const express = require('express')
                const app = express()

                let notes = [
                ...
                ]

                app.get('/', (request, response) => {
                response.send('<h1>Hello World!</h1>')
                })

                app.get('/api/notes', (request, response) => {
                response.json(notes)
                })

                const PORT = 3002
                app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`)
                })

               
# nodemon
➡️nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.

                npm install --save-dev nodemon

-->We can start our application with nodemon like this:

                node_modules/.bin/nodemon index.js

-->The command is long and quite unpleasant, so let's define a dedicated npm script for it in the package.json file:

                {
                    // ..
                    "scripts": {
                        "start": "node index.js",

                        "dev": "nodemon index.js",
                        "test": "echo \"Error: no test specified\" && exit 1"
                    },
                    // ..
                }


                npm run dev

## the production server (e.g. Fly.io or Heroku).


# REST (Representational State Transfer)
### REST is an architectural style meant for building scalable web applications.

## Fetching a single resource

            app.get('/api/notes/:id', (request, response) => {
            const id = Number(request.params.id)
            const note = notes.find(note => note.id === id)
            

            if (note) {
                response.json(note)
            } else {
                response.status(404).end()
            }
            })

## Deleting resources

                app.delete('/api/notes/:id', (request, response) => {
                const id = Number(request.params.id)
                notes = notes.filter(note => note.id !== id)

                response.status(204).end()
                })

# Postman 
## ➡️Exist for making the testing of backends easier.


# The Visual Studio Code REST client


<img src="./Images/Rest_Client.png" width="100%" height="100%">

➡️We make a directory at the root of the application named requests. We save all the REST client requests in the directory as files that end with the .rest extension.


<img src="./Images/12ea.png" width="100%" height="100%">


➡️By clicking the Send Request text, the REST client will execute the HTTP request and the response from the server is opened in the editor.
<img src="./Images/13new.png" width="100%" height="100%">


# The WebStorm HTTP Client 
## Similiar to REST client


# Receving data

-->Make an HTTP POST request to the address http://localhost:3002/api/notes
-->send all the information for the new note in the request body in JSON format.
-->





# CORS

# Same Origin policy and CORS
-->The same-origin policy is a security mechanism implemented by browsers in order to prevent session hijacking among other security vulnerabilities.


### Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy.


-->In your backend repository, install cors with the command

                Step 1 :npm install cors

-->take the middleware to use and allow for requests from all origins:

                const cors = require('cors')
                app.use(cors())

# MongoDB
 
## Naturally, you can install and run MongoDB on your computer.

## Mongo database services : Our preferred MongoDB provider will be <a href="https://www.mongodb.com/atlas/database">MongoDB Atlas</a> .

### --> let us start by selecting the free option:
![Alt text](Images/image0.png)

### -->Pick the cloud provider and location and create the cluster:
![Alt text](Images/image-1.png)

### --> Use  security tab for creating user credentials .

#### --> Please note that these are not the same credentials you use for logging into MongoDB Atlas. These will be used for your application to connect to the database.

![Alt text](Images/image-2.png)

### -->  IP addresses : allow access from all IP addresses:
![Alt text](Images/image-3.png)

### -->Finally, we are ready to connect to our database. Start by clicking connect:
![Alt text](Images/image-4.png)

### -->  choose: Connect your application:
![Alt text](Images/image-5.png)

## use the Mongoose library that offers a higher-level API.

#### -->install Mongoose 

                                 npm install mongoose

#### -->let's make a practice application by creating a new file, mongo.js:

                                const mongoose = require('mongoose')

                                if (process.argv.length<3) {
                                console.log('give password as argument')
                                process.exit(1)
                                }

                                const password = process.argv[2]

                                const url =
                                `mongodb+srv://<username>:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`

                                mongoose.set('strictQuery',false)
                                mongoose.connect(url)

                                const noteSchema = new mongoose.Schema({
                                content: String,
                                important: Boolean,
                                })

                                const Note = mongoose.model('Note', noteSchema)

                                const note = new Note({
                                content: 'HTML is Easy',
                                important: true,
                                })

                                note.save().then(result => {
                                console.log('note saved!')
                                mongoose.connection.close()
                                })

### When the code is run with the command <i>node mongo.js password</i>, Mongo will add a new document to the database.

## Note :Please note the password is the password created for the database user, not your MongoDB Atlas password. Also, if you created a password with special characters, then you'll need to URL encode that password.
![Alt text](Images/image-6.png)
![Alt text](Images/image-7.png)


# Connecting the backend to a database

-->copy-pasting the Mongoose definitions to the index.js file

                                    const mongoose = require('mongoose')

                                    // DO NOT SAVE YOUR PASSWORD TO GITHUB!!
                                    const url =
                                    `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`

                                    mongoose.set('strictQuery',false)
                                    mongoose.connect(url)

                                    const noteSchema = new mongoose.Schema({
                                    content: String,
                                    important: Boolean,
                                    })

                                    const Note = mongoose.model('Note', noteSchema)

# Database configuration into its own module

#### --> Make models directory and note.js file and copy paste the below code in it:

                                            const mongoose = require('mongoose')

                                            mongoose.set('strictQuery', false)


                                            const url = process.env.MONGODB_URI


                                            console.log('connecting to', url)

                                            mongoose.connect(url)

                                            .then(result => {
                                                console.log('connected to MongoDB')
                                            })
                                            .catch((error) => {
                                                console.log('error connecting to MongoDB:', error.message)
                                            })

                                            const noteSchema = new mongoose.Schema({
                                            content: String,
                                            important: Boolean,
                                            })

                                            noteSchema.set('toJSON', {
                                            transform: (document, returnedObject) => {
                                                returnedObject.id = returnedObject._id.toString()
                                                delete returnedObject._id
                                                delete returnedObject.__v
                                            }
                                            })


                                            module.exports = mongoose.model('Note', noteSchema)

### Importing the module happens by adding the following line to index.js:

                                    const Note = require('./models/note')

###  when the application is started in terminal :
                                    MONGODB_URI=address_here npm run dev

## dotenv library

                                    npm install dotenv

#### To use the library, we create a .env file at the root of the project. The environment variables are defined inside of the file, and it can look like this:

                                MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.o1opl.mongodb.net/noteApp?retryWrites=true&w=majority
                                PORT=3031

#### Inside index.js file

                            require('dotenv').config()
                            const express = require('express')
                            const app = express()

                            const Note = require('./models/note')

                            // ..


                            const PORT = process.env.PORT
                            app.listen(PORT, () => {
                            console.log(`Server running on port ${PORT}`)
                            })

### It's important that dotenv gets imported before the note model is imported

## Add Enviroment variables in render dashboard
![Alt text](image.png)

## Using database in route handlers


#### --> Creating a new note is accomplished like this:


                                app.post('/api/notes', (request, response) => {
                                const body = request.body

                                if (body.content === undefined) {
                                    return response.status(400).json({ error: 'content missing' })
                                }

                                const note = new Note({
                                    content: body.content,
                                    important: body.important || false,
                                })

                                note.save().then(savedNote => {
                                    response.json(savedNote)
                                })
                                })

#### --> Using Mongoose's findById method, fetching an individual note gets changed into the following:

                                app.get('/api/notes/:id', (request, response) => {
                                Note.findById(request.params.id).then(note => {
                                    response.json(note)
                                })
                                })


#### Verifying frontend and backend integration




