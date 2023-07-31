
# Setting Up json server or axios for phonebook

                step 1 : npx create-react-app phonebook_step6 
                step 2 : cd phonebook_step6
                step 3 : npm start

Open  new terminal in root directory in these case phonebook_step6

                step 1 : npm install json-server 
                step 2 : json-server --watch db.json --port 3003

Again new terminal in root directory in these case phonebook_step6

                step 1 : npm install axios

###             npm start 
###             json-server --watch db.json --port 3003

## Setting Proxy

-->add the following declaration to the package.json file of the frontend repository.

                "scripts": {
                    "start": "react-scripts start",
                    "build": "react-scripts build",
                    "test": "react-scripts test",
                    "eject": "react-scripts eject"
                },
                "proxy": "http://localhost:3003",

## Streamlining deploying of the frontend

# Serving static files from the backend

### To make express show static content, the page index.html and the JavaScript, etc., it fetches, we need a built-in middleware from express called static.

                    app.use(express.static('build'))
