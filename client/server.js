var webpack = require('webpack')
var config = require('./webpack.config')
var WebpackDevServer = require('webpack-dev-server')

var app = new WebpackDevServer(webpack(config),{
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true,
  },
})

app.listen(14000,'localhost',function(e){
  if(e){
    console.log(e)
  }
  console.log(':14000')
})

/*
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}).listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

  console.log('Listening at localhost:3000');
});
*/

