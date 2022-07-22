const repl = require('repl');	// https://nodejs.org/api/repl.html
repl.start({
  prompt: "> ",
  eval: function (cmd, context, filename, callback) {
    callback(null, 'Hello World!');
  }
});