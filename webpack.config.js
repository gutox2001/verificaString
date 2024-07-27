const path = require("path");

module.exports = {
  //Ponto de entrada
  entry: "./src/index.ts",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        //Por isso é necessário instalar o ts-loader
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //mode: 'development ou 'production',
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  //Ele vai criar um arquivo de saída bundle.js na pasta dist
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
