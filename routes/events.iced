_ = require('wegweg')({
  globals: off
})

app = module.exports = new (require 'express').Router

# @todo
app.get '/record', (req,res,next) ->
  res.respond {
    pong: _.uuid()
  }

##
app.AUTO_EXPOSE = {
  route: '/events'
  public: yes
}

