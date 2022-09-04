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

Step - 2:
    1. Create a folder `components`
    2. Link bootstrap within react in `index.html`
    3. Create `ProductCard.js` component
    4. Add all neccessary elements in `ProductCard.js` component
    5. Create `CartList.js` components
    6. Add all neccessary dummy elements in `CartList.js` component
    7. Fetch all `products` from `json-server` in the `App.js` component
    8. Load the `products` to `ProductCard` component from `App.js` component

Step - 3:
    1. Install redux tool kit by running `npm install react-redux @reduxjs/toolkit` in the terminal
    2. Create a new folder called `store`
    3. Inside `store` create a file called `index.js`
    4. Go to your `index.js` file at the root of the project
    5. Configure the react app to use `redux` from `index.js` in the root directory
    6. Create a file in your store directory called `product.slice.js` that will keep your state
    7. Create a `productSlice` with initialState and reducers.
    8. Add `method` to fetch products (move fetch method from `App.js` to `product.slice.js`)
    9. Connect the `productSlice` into the `store/index.js` file
    10. Configure the call to fetch `products` from `App.js`
    11. Display products in `App.js` as before