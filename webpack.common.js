module.exports = {
  // エントリーポイント
  entry: './src/index.ts',
  // 出力設定
  output: {
    // 出力先フォルダ
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'main.js'
  },
  module: {
    rules: [
      // ts-loader の設定
      {
        // .ts ファイルを対象
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    // import 時の拡張子の省略
    extensions: [
      '.ts', '.js'
    ]
  }
};