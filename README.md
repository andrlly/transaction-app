# TransactionApp

## General info
This project is simple transaction app.
Go to https://transaction-app9.herokuapp.com/

## Technologies
Project is created with:
* NodeJs version: 12.18.4
* npm version: 6.14.6
* angular-cli version: 10.1.4

### Download 

```
$ git clone https://github.com/andrlly/transaction-app.git
```

## Setup
To run this project, install it locally using npm:

```
$ cd transaction-app
$ npm install
$ npm run serve:dev
$ Navigate to `http://localhost:4200/`.
```

####Application structure

* Application builds on flux structure with data and api services.
* Used the transaction module as a feature and module approach to help us in the future to expand our app simply other modules if we will have some cases.
* Used aliases — we don’t need to change anything in our codebase. We just need to give the module the same name.
* Used Smart and Dumb components pattern (Presentation and Container components).
* Added `i18n` multi-languages support
