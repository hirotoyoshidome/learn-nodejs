const fs = require('fs');

// JSは変数はキャメルケースで書く
let filePath = './test.txt';
let outputFilePath = './output.txt';

// ファイル読み込み

// 同期処理
let txt = fs.readFileSync(filePath, {encoding: 'utf-8'});
console.log(txt);

// 非同期処理
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);data;
});

console.log("非同期で処理するため、こちらの出力が先にでる")

// ファイル書き込み

// 同期処理
let inputText = "testestest";
fs.writeFileSync(outputFilePath, inputText);

// 非同期処理
fs.writeFile(outputFilePath, inputText, (err, data) => {
  if (err) throw err;
  console.log("ファイルの書き込みを実施しました");
});

console.log("こっちの方が先に出力される");
