const repl = require('repl');

const context = {
  thinked: Math.ceil(Math.random() * 100),
  attemp: 1,
};

repl.start({
  prompt: `attemp ${context.attemp}> `,
  eval: function (cmd, context, filename, callback) {
    const thinked = context.thinked;
    const guess = parseInt(cmd, 10);
    let result;
    if (guess == thinked) {
      result = `${guess} is exactly right, CONGRATULATIONS!`;
      this.setPrompt(`Thank you> `);
      this.close();
      callback(null, result);
    } else {
      if (guess > thinked) {
        result = `${guess} is too high.`;
      } else {
        result = `${guess} is too low.`;
      }
      context.attemp++;
      this.setPrompt(`attemp ${context.attemp}> `);
      callback(null, result);
    }
  }
}).context = context;