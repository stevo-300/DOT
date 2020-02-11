const Trophies = require('playstation-trophies').Trophies

let username = 'StephenWatson201'

Trophies.request(username, (err, games) => {
  console.log(JSON.parse(games))

//  console.log(`${username} has ${games.length} games`)
})
