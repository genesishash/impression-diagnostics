module.exports = render = ((filename,data) ->
  compiled = require('./../views/' + filename)
  return compiled(data ? {})
)

