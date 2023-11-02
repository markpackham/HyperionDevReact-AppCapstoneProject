# React Store Capstone Project

It includes the following:

- Bootstrap is used for modals and styling and included via the React Bootstrap UI library
- Concurrently is used so a simple "npm start" will install all modules and run the app at the same time
- DOMPurify is used to remove malicious code when dealing with username fields in forms
- Font Awesome's CDN is used to provide icons
- Formik for form validation feedback
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

Code was written in Node.JS version 20 but runs fine on Node 18, Node should be at the very least version 18.

Works with these operating systems 
- Mac OS 14 
- Ubuntu 22.04.3 LTS
- Windows 11

Works with these browsers: 
- Brave 1.59.122
- Firefox 118.02
- Google Chrome 118.0.5993.89
- LibreWolf 118.0.2-1
- Microsoft Edge 119.0.2151.12
- Safari 17


## Check node version
```
node --version
```

## Get Project Code

All code can be downloaded from here along with the original goals of the project.
https://github.com/markpackham/HyperionReact-AppCapstoneProject

```
git clone https://github.com/markpackham/HyperionReact-AppCapstoneProject.git
```

### Install Dependencies

This is done within the "reactStoreCapstoneProject" folder which is inside "HyperionReact AppCapstoneProject"

```
cd reactStoreCapstoneProject
npm i
```

### Run

```
npm run dev
```

Or

```
npm start
```



## Build & Deploy

```
npm run build
```