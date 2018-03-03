const passingTest = () => {
  browser.url('/')
  browser.pause(500 + Math.floor(Math.random() * 400))
  browser.waitForVisible('.foobar')
}

describe('Settings', () => {
  it('should show account information', passingTest)
  it('should edit account information')
  it('should undo edits to account information')
  it('should warn about privileges')
  it('should subscribe to paid plan', passingTest)
  it('should subscribe to higher tier plan', passingTest)
  it('should cancel plan', passingTest)
  it('should send message to sales when visited', passingTest)
})
