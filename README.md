ng new mean-file-manager-wysiwyg-example

mkdir node_src
mkdir node_src/routes
mkdir src/assets/uploads (if you don't create this folder, you will get an error.)

touch node_src/routes/angular.js
touch node_src/routes/api.js
touch node_src/server.js
touch node_src/config.js

# Update package.json
    "dev": "ng build --prod --build-optimizer=false && node ./node_src/server.js",
    "prod": "ng build --prod && node ./node_src/server.js",
    
npm install morgan
npm install mongoose
npm install express
npm install multer


ng generate component file-list

ng generate component file-upload


# Thanks to their projects. You could have a look for more understanding MEAN Stack.
https://github.com/didinj/mean-stack-angular5-crud
https://github.com/stanleyeosakul/mean-crud-example





# Simple File Manager with WYSIWYG MEAN Stack Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
