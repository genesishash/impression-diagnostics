log = (x...) -> try console.log x...

_ = require 'lodash'

render = require './lib/render.iced'

show_page = (->
  require './styl/main.styl'
  return document.body.innerHTML = render('index.hbs',{name:'Doug'})
)

do =>
  return show_page()

