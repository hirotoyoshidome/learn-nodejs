const fs = require('fs');

var filePath = './test.txt';

// async / awaitはPromiseをwrapしているため、Promiseを返却する関数を定義

const readFileEx = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path = path, options = {
      encoding: 'utf-8'
    }, (err, data) => {
      resolve(data);
    });
  });
}

// 全てのファイルを非同期に読み込むasync関数を定義(関数名はreadAll)

const readAll = async() => {
  const a = await readFileEx(filePath);
  console.log("読み込みました", a);
  const b = await readFileEx(filePath);
  console.log("読み込みました", b);
  const c = await readFileEx(filePath);
  console.log('読み込みました...', c);
}

// 非同期で呼び出したい関数をawaitをつけて実行するだけ
// awaitを利用する関数はayanc functionとして定義する必要あり

readAll();

