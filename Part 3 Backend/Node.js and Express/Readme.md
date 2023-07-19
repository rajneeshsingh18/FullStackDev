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

                const PORT = 3001
                app.listen(PORT)
                console.log(`Server running on port ${PORT}`)

➡️Once the application is running, the following message is printed in the console:
               Server running on port 3001

➡️We can open our humble application in the browser by visiting the address http://localhost:3001:


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

                const PORT = 3001
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