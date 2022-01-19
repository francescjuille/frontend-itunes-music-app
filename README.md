# Vue Frontend app that filters and display Itunes artists albums data
Is a Vue3 project with simple pages and desing. It uses Axios for handle http calls, router with lazy load and vue-jest for testing.
Contains 2 pages -> Login and Home.

LOGIN: in login page you have the option of login with your credentials or as guest. The Api doesnt store data, so the 
is a "mock login".

HOME: in home page you can search any autor in search input and it will display our albums releted, also you have the option to filter the results in real time.

### Test the App
You need to make a clone of api backend of this project and run server in your local environment for be able to test full app
api repo:

### Run unit tests
npm run test:unit

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
