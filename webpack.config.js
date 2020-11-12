const path = require(`path`);

module.exports = {
  mode: `development`,    // Режим сборки
  entry: `./src/main.js`, // Точка входа приложения
  output: {               // Настройка выходного файла
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devtool: `source-map`,   // Подключение source-map
  devServer: {
    contentBase: path.join(__dirname, `public`), // Где искать сборку
    // Автоматическая перезагрузка страницы
    // По умолчанию приложение будет доступно по адрему localhost:8080
    // Лучше открывать в режиме инкогнито, чтобы браузер не кешировал файлы сборки
    watchContentBase: true
  }
}