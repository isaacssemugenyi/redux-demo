Step - 0:
    1. Clear app.js all the stuff there and only leave the main div
    2. Delete the logo.svg

Step - 1:
    1. Create and checkout to step-1 branch
    2. Run `npm install json-server`
    3. Created a `db.json` at the root folder
    4. Seed it with products data in a json format
    5. Create a folder `images` in the public directory
    6. Add multiple images and name them in a sequence as pdt-*.jpg (where * is a number)
    7. Open two terminals in the same project directory
    8. Run `json-server --watch db.json` to start the json server in one terminal
    9. In the second terminal run `npm run start` to start the react application server