# React Store Capstone Project

It includes the following:

- Formik for form validation feedback
- React Bootstrap UI library
- React frontend to register, login, products & cart
- React Redux to handle state
- React Router Dom for site navigation
- Sweetalert2 for better looking alert messages
- Vite was used for the app's creation for performance reasons instead of Create React App
- Yup for form validation checks

## Original App Purpose

The App was created as part of an exercise for the bootcamp, HyperionDev and intended as a demo of my frontend skills for my portfolio.

Original goals can be found in "06-011-1 Capstone Project - React App.pdf" located in the folder "Hyperion Project Documentation"
https://github.com/markpackham/HyperionReact-AppCapstoneProject/tree/master/Hyperion%20Project%20Documentation

It was to be React Redux based app that would allow users to add products to a cart like an online store as well as demo form validation for users logging in and registering.
You can only buy products if you are logged in or registered - if it says "Logged out" then the "Add To Cart" button isn't there.

The user is presented with a list of products that they can add to a cart which shows the total price. Users have the ability to delete items from their cart.
They can then select the shipping options which are available once they provide a shipping address then in one go all the selected products get purchased.
More info about the shipping can be found by clicking on the button "Shipping Info" in the cart area which presents the info in some modals.


## Requirements

Code was written in Node.JS version 20, you should at least have Node version 18 installed.

```
node --version
```

### Install Dependencies

This is done within the "reactStoreCapstoneProject" folder

```
npm install
```

### Run

```
npm run dev
```

Or you can run it via
```
npm run start
```

## Build & Deploy

```
npm run build
```