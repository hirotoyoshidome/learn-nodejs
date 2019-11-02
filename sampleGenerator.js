const fs = require('fs');

var filePath = "./test.txt";

// 非同期処理の完了を待って関数の続きを呼ぶ関数

const readFileGenerator = (generator, path) => {
  fs.readFile(path = path, options = {
    encoding: 'utf-8'
  }, (err, data) => {
    generator.next(data);
  });
}

// generator.nextを利用することでyieldからyieldまで実行され、再開するときはそのyieldから再開する
// つまり、非同期が終わってから次の非同期を実施することが可能

// 非同期処理を実行する関数

const generatorFunc = (function* () {
  const a = yield readFileGenerator(generatorFunc, filePath);
  console.log("読み込みました", a);
  const b = yield readFileGenerator(generatorFunc, filePath);
  console.log("読み込みました", b);
  const c = yield readFileGenerator(generatorFunc, filePath);
  console.log("読み込みました...", c);
})();

generatorFunc.next();
