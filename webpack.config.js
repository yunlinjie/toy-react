module.exports = {
  entry: {
    main: './main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader', // jsx插件依赖babel-loader
          options: {
            presets: ['@babel/preset-env'],
            plugins: [[
              "@babel/plugin-transform-react-jsx",
              { pragma: "ToyReact.createElement" } // 若没有则默认为React.createElement
            ]]
          }
        }
      }
    ]
  },
  mode: "development", // mode + optimization 1、打包出的文件不会被压缩成一行。2、每个文件单独放到eval里执行，通过sourceURL方式在浏览器里打开时变成一个单独的文件
  optimization: {
    minimize: false
  }
};