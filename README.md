# ML APP

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v10.16.1

    $ npm --version
    6.9.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/vitocaio/mercado-livre.git
    $ cd PROJECT
    $ npm install

## Start & watch

    $ npm start or yarn start

## Run the Tests

    $ npm test or yarn test

## Simple build for production

    $ npm run build

## Languages & tools

### HTML

    Mobile First
    Usabilidad
    SEO
    Performance
    Escalabilidad

### JavaScript

- [Eslint] is used to prevent JavaScript error.
- [Browserify] to handle allow us to write our client-side scripts with [es6 syntax](http://es6.github.io/) thanks to [es6ify](https://github.com/thlorenz/es6ify).
- [React](http://facebook.github.io/react) is used for UI.
- [Redux](https://redux.js.org) is used for control State of app.
- [Jest](https://jestjs.io) is used for test.

### CSS

- [StyledComponent](https://www.styled-components.com/) Used for easy export and easy import of components).

### Static server with Livereload

The app embed for development a static connect server with livereload plugged.
So each time you start the app, you get automatic refresh in the browser whenever you update a file.