const express = require('express')

let server

exports.config = {
  port: 9515,
  path: '/',
  sync: true,
  services: ['chromedriver'],
  maxInstances: 1,
  specs: [
    'specs/**/*.js'
  ],
  capabilities: [
    {
      browserName: 'chrome',
      chromeOptions: {
        args: ['headless']
      }
    }
  ],
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './shots',
  screenshotOnReject: true,
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 20000,
  framework: 'mocha',
  reporters: ['slick'],
  mochaOpts: {
    ui: 'bdd'
  },
  onPrepare: () => {
    const app = express()
    app.get('/', (req, res) => res.send('<div class="foobar">Seven</div>'))
    app.get('/login-error-message', (req, res) => res.send('<div class="error">Unexpected error occurred, sorry!</div>'))
    server = app.listen(3000)
  },
  onComplete: () => {
    server.close()
  }
}
