const fs = require('fs');

var filePath = "./test.txt";

// Promiseを返す関数
const readFilePromise = (path) => {
  return new Promise((resolve) => {
    fs.readFile(path = path, options = {
      encoding: 'utf-8'
    }, (err, data) => {
      resolve(data);
    });
  });
}

// 非同期でファイルを読み込む

readFilePromise(filePath)
  .then((data) => {
    console.log("読み込みました", data);
    return readFilePromise(filePath);
  })
  .then((data) => {
    console.log("読み込みました", data);
    return readFilePromise(filePath);
  })
  .then((data) => {
    console.log("読み込みました...", data);
  })

// 非同期処理の完了後に、returnでPromiseを返却することができるため、コールバック地獄にならない

