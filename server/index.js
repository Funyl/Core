var React = require('react'),
    ReactDOM = require('react-dom'),
    // This is our React component, shared by server and browser thanks to browserify
    App = React.createFactory(require('./App'))

ReactDOM.render(App(window.APP_PROPS), document.getElementById('root'));
