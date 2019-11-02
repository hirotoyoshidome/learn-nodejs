const fs = require('fs');

filePath = "./test.txt";

// 無名関数(非同期)
fs.readFile(path = filePath, options = {
  encoding: 'utf-8'
}, (err, data) => {
  console.log(data);
});

// 無名関数でファイルを読みこんで出力することをしている


// bad example callback hell
fs.readFile(path = filePath, options = {
  encoding: 'utf-8'
}, (err, data) => {
  console.log('読み込みました', data);
  fs.readFile(path = filePath, options = {
    encoding: 'utf-8'
  }, (err, data) => {
    console.log("読み込みました", data);
    fs.readFile(path = filePath, options = {
      encoding: 'utf-8'
    }, (err, data) => {
      console.log("読み込みました...", data);
    })
  })
});
