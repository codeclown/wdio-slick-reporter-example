const assert = require('assert')

const passingTest = () => {
  browser.url('/')
  browser.pause(500 + Math.floor(Math.random() * 400))
  browser.waitForVisible('.foobar')
}

describe('Login', () => {
  it('should show login form', passingTest)
  it('should allow email and password', passingTest)
  it('should show recover-link', passingTest)
  it('should show a nice error message upon login failure', () => {
    browser.url('/login-error-message')
    browser.pause(1000)
    assert.deepEqual({
      loginErrorText: browser.getText('.error')
    }, {
      loginErrorText: 'Check your email address and password'
    })
  })
  it('should show link to homepage', passingTest)
  it('should show link to register', passingTest)
  it('should show recover-link', () => {
    browser.url('/login-error-message')
    browser.pause(1000)
    browser.waitForVisible('.recover-link', 200)
  })
  it('should remember last used email address', passingTest)
})
