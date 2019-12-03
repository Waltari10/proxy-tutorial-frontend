// exec allows us to run cmd commands in code
const { exec } = require('child_process');

// process.env.PORT is defined by Heroku environment. Use 3200 as fallback if outside of Heroku.
const port = process.env.PORT || 3200;
console.log('Port: ' + port)

const cmdStr = `.\\node_modules\\.bin\\serve -l ${ port} ./build`

console.log(cmdStr)

// Same as running ".\node_modules\.bin\serve -l 3200 ./build" in cmd
exec(cmdStr, (err) => {
  if (err) {
    console.error('Something went wrong!', err)
  }
});
