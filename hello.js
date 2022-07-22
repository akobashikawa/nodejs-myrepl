const repl = require('repl');	// https://nodejs.org/api/repl.html
repl.start({
  prompt: "name> ",
  eval: function (cmd, context, filename, callback) {
    const name = cmd.trim();
    callback(null, `Hello ${name}!`);
  }
});