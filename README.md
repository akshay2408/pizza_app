## Frontend

### Install Packages

Run `yarn install` command for installing the packages.

### Environment config

Create `.env` file and copy the `.env.example` code and paste into `.env` file for configuring the environment.

### Server Start

Run `yarn start` command for starting the server.

It will runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Backend

### Install Packages

Run `yarn install` command for installing the packages.

### Environment config

Create `.env` file and copy the `.env.example` code and paste into `.env` file for configuring the environment.

### Server Start

Run `yarn start` command for starting the server.

## E2E Test cases.

I used cypress for testing. but wrote some normal test cases.

If you want to run test cases then you can run this in two ways:

1. Cypress UI format.

Run `yarn cypress` command for running the test cases in UI.

On running of this command it will created a cypress UI console and here you can test the component on clicking of file name.

2. Cypress console format.

Run `yarn cypress:all` command for running the test cases in console.

It will be run in your terminal and it's run all test cases files in a bunch and show the test result in same terminal.

But for both way first run both client side and server side server.
