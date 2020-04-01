// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(name => {
    return name.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(name => {
    return name.toLowerCase().startsWith(string.toLowerCase())
  })
}

function matchName(drivers, string) {
  // driver = {name: ''}
  return drivers.filter(driver => {
    return driver.name.toLowerCase() === string.toLowerCase()
  })
}
