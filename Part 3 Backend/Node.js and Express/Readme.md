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

