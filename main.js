//strictモードで実行。厳密にエラーを検証。
'use strict';

// オブジェクトとは
// // => 関連のあるデータと機能の集合
// let user = new Object();
// user.name = 'Mike Traut';
// user.gender = 'man';
// user.birthyear = '1990';
// console.log(user);

//オブジェクト初期化子
let user = { name: 'Mike Traut',
gender: 'man', birthyear: 1990};
console.log(user);

//ドット記述法
console.log(user.name);
console.log(user.gender);
console.log(user.birthyear);

//ブラケット記法
console.log(user['name']);
console.log(user['gender']);
console.log(user['birthyear']);

//個数
console.log(Object.keys(user).length);

//プロパティを取得
let keys = Object.keys(user);
console.log(keys);

user.prefecture = 'Hyogo';
user['prefecture'] = 'Hyogo';
console.log(user);

//値の書き換え
user.prefecture = 'Osaka';
user['prefecture'] = 'Osaka';
console.log(user);

// let colors = ['Red', 'Green', 'Blue'];
// console.log(colors);

// //末尾追加
// colors.push('Black');
// console.log(colors);

// colors.unshift('white');
// console.log(colors);

// colors[1] = 'Aka';
// console.log(colors);

// let insertArr = ['a', 'b', 'c'];
// insertArr.splice(1,0,'D');
// console.log(insertArr);

// //複数挿入
// insertArr.splice(2,0,'X','Y','Z');
// console.log(insertArr);

// insertArr.splice(2,2);
// console.log(insertArr);

// let arr1 = ['a','b','c'];
// let arr2 = ['d','e','f'];
// let mergedArr = arr1.concat(arr2);
// console.log(mergedArr);
// console.log(arr1);
// console.log(arr2);

// // 宣言、初期化
// let colors = ['Red', 'Green', 'Blue'];
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]); //undefined

// //データ型
// let arr = [1,'2',3,['a','b','c']];
// console.log(arr);

// //個数
// console.log(colors.length);

// //末尾の値を取得
// console.log(colors[colors.length -1]);

// //空の配列
// let emptyArr = [];
// console.log(emptyArr);

//コールバック関数
// => ??が完了したらXXを実行する。

// const displayMessage = function() {
//   console.log('Timeout');
// }
// setTimeout(displayMessage, 3000);

// function greeting(name) {
//   console.log('Hello' + name + 'san.');
// }

// function inputUserName(callback) {
//   let name = prompt('あなたの名前を入力してください。');
//   callback(name);
// }
// inputUserName(greeting);

// function gokei(money, amount) {
// return money * amount;
// }
// console.log(gokei(100,20));

// function gokei(money, kosu){
//   return money * kosu;
// }
// console.log(gokei(100,20));

// //アロー関数
// (引数,・・・) => {
//   //実行する処理
// }

// const getRectangle = (height, width) => {
//   return height * width;
// };
// console.log(getRectangle(3,5));


// //functionコンストラクター
// new Function('引数1','引数2','関数本体の処理');
// //シングルコートで囲う。
// const getRectangle
// = new Function('height', 'width', 'return height * width');

// console.log(getRectangle(3,5));


// // //関数リテラル
// // function(引数1,引数2) {
// // //実行する処理;
// // }

// const getRectangle = function(height, width) {
//   return height * width;
// }
// console.log(getRectangle(3,5));


// // //function命令
// // function 関数(引数1, 引数2) {
// //   //任意の処理
// //   return 戻り値;
// // }

// function getRectangle(height, width) {
//   return height * width;
// }
// console.log(getRectangle(3,5));


// let age = 18;
// let beverage = (age >= 20)? 'ビール' : 'コーラ';
// console.log(beverage);
// // // undifined
// // let x ;
// // console.log(x);

// //null
// let item = null;
// console.log(item);

// if(x === undefined) {
//   console.log('undifinedです')
// }

// if(item === null ) {
//   console.log('nullです');
// }


// let num = 3;
//   console.log(num);
//   switch (num) {
//   case 1:
//     console.log('大吉');
//   case 2:
//     console.log('中吉');
//   case 3:
//     console.log('小吉');
//   case 4:
//     console.log('吉');
//   case 5:
//     console.log('凶');
//   case 6:
//     console.log('想定外');
//   }
// let num = 1;
// switch(num) {
//   case 1:
//     console.log('金賞');
//     break;
//   case 2:
//   console.log('銀賞');
//   break;
//   case 3:
//   break;
//   console.log('銅賞');
// }

// let num = 3;
// if (num === 1) {
//   console.log('金賞');
// } else if (num === 2 ) {
//   console.log('銀賞');
// } else if (num === 3 ) {
//   console.log('銅賞');
// } else {
//   console.log('線外');
// }
  


// let num = 12;
// if (num % 2 === 0) {
//   if (num % 3 === 0) {
//     console.log(`${num}は２の倍数かつ３の倍数です。`);
//   }
// }

// let num = 12;
// if ((num % 2 === 0) && (num % 3 === 0)) {
//   console.log(`${num}は２の倍数かつ３の倍数です`);
// }


// && 論理AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && false);

// ||　論理OR
// console.log()
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || false);

// // !　論理NOT
// console.log(!true);
// console.log(!false);

// //順位=> ! && ||
// console.log(false && true || true);
// console.log(false && (true || true));

// let hasDriversLisense = true;
// let hasGoldLisense = true;
// if(hasDriversLisense && hasGoldLisense) {
// console.log('あなたは優良ドライバーです。');
// }


// let weight = 60;
// let height = 1.7;
// let bmi = weight / (height * height);
// console.log(bmi);

// // if (bmi >=25) {
// //   console.log('肥満');
// // } else if (bmi >= 18.5) {
// // console.log('普通');
// // } else {
// // console.log('痩せ');
// // }

// if (bmi >= 25) {
//   console.log('肥満');
// } else if (bmi >= 18.5) {
//   console.log('普通');
// } else {
//   console.log('痩せ');
// }


// let num = 100; //数値型
// let str = '100'; //文字列型

// if (num == str){
//   console.log('同じ');
// } else{
//   console.log('同じではない')
// }

// if (num === str){
//   console.log('同じ');
// } else{
//   console.log('同じではない')
// }

// let b = true;
// if(b){
//   console.log('はい');
// } else {
//   console.log('いいえ');
// }
// console.log(!b);


// let birthyear = '2000';
// let age = '18';
// console.log(birthyear + age);
// console.log(age+birthyear)
// console.log(Number(birthyear) + age);
// console.log(Number('Mike'));
// console.log(age + '歳');
// console.log(String(age) + '歳');

// //　'文字列'+ 数値　＝ '文字列'
// //　数値 + '文字列'　＝　'文字列'
// //　数値 + 数値　＝　数値
// //　'文字列'+ '文字列'　= '文字列'



// let x = 81;
// if (x>=90){
//   console.log('A');
// } else if(x>=80) {
//   console.log('B');
// } else if(x>=60) {
//   console.log('C');
// } else {
//   console.log('D');
// } ]


// //条件分岐
// if (条件) {
// //trueの際に実行したい処理
// }

// let temperature = 29;
// if (temperature > 28) {
//   console.log('冷房稼働');
// }

// console.log(29>28);
// console.log(20>28);

// //以上
// let a = 100;
// if (a >= 100) {
//   console.log('100以上');
// }

// let b = 101;
// if(b >100) {
//   console.log('100より大きい');
// }

// let c = 100;
// if (c <= 100){
//   console.log('100以下');
// }

// let d = 99;
// if (d < 100){
//   console.log('100未満');
// }

// let e = 100 ;
// if(e == 100 ){
//   console.log('100と等しい')
// }

// let f = 111;
// if (f !=100){
//   console.log('100と等しくない');
// }

// let g = 99;
// if(g >=100){
//   console.log('100以上');
// } else{
//   console.log('100以上ではない。')
// }
// //インクリメント
// let num = 10;
// num++;
// console.log(num)

// ++num;
// console.log(num);

// --num;
// console.log(num)

// //デクリメント = 1-;
// num--;
// console.log(num);

// let num1 = 10;
// let num2 = 10;
// let ans1 = ++num1;
// let ans2 = num2; ]


// let num = 60;
// let height = 1.7;
// let bmi = num / (height * height);
// console.log(bmi); ]


// //演算子
// let num = 20;
// num = num + 10;
// console.log(num);

// let num1 = 20;
// num1 += 10;
// console.log(num1)

// let num2 = 20;
// num2 -= 10;
// console.log(num2);

// let num3 = 20;
// num3 *= 10;
// console.log(num3);

// let num4 = 20;
// num4 /= 10;
// console.log(num4); ]


// let lastName = 'たろう';
// let firstName = 'げすと';
// let message1 = 'こんにちは'　+ lastName + firstName;
// console.log(message1);

// let message2 = `こんにちは ${lastName} ${firstName} さん
// JavaScriptの学習`;
// console.log(message2); ]


// //優先順位
// let x = 1;
// let y = 2;
// let z = 3;

// let ans1 = x + y * z;
// console.log(ans1);

// let ans2 = (x + y) * z;
// console.log(ans2); ]


// //演算子の学習
// let ans = 1 + 2;
// console.log(ans);

// let i = 20;
// let j = 10;
// let ans1 = i + j;
// console.log(ans1);

// let ans2 = i - j;
// console.log(ans2);

// let ans3 = i * j;
// console.log(ans3);

// let ans4 = i / j;
// console.log(ans4)

// let x = 3;
// let y = 2;
// let ans5 = x / y;
// console.log(ans5);

// let ans6 = x % y; //余りを求める
// console.log(ans6);

// let ans7 = Math.pow(x,y);
// console.log(ans7);

// let ans8 = x ** y;
// console.log(ans8);

// let ans9 = x * x;
// console.log(ans9);　]


// let myName = 'Mike'; //文字列型＝string
// let num = 123; //数値型 = number
// let dec = 123.456; 

// console.log(myName);
// console.log(num);
// console.log(dec);

// console.log(typeof myName);
// console.log(typeof num);
// console.log(typeof dec);

// myName = 456;
// console.log(myName);
// console.log(typeof myName);

// //動的型付け言語= Javascript
// //静的型付け言語 = C    ]


// //変数　= 値を変更できる
// let color = 'Red';
// console.log(color);

// color = 'Green';
// console.log(color);

// //let color = 'Blue';

// let myColor = 'Blue';
// // let = ES2015より導入
// console.log(myColor);

// var myName = 'Mike';
// console.log(myName);

// // 定数 = 値を変更出来ない
// const PI = 3.14;
// console.log(PI);
// // PI = 3.1; NG

// const TAX_RATE = 10;
// // _で繋ぐことスネークケース
// console.log(TAX_RATE); ]


// console.log('Hello! I\'m Mike.Array');
// console.log('\¥\t AAA \n BBB');
// console.log("Hello I'm Mike Array");
// console.log('こんにちは"マイクさん"');
// console.log('Hello'); // 同一プロジェクトでは統一
// console.log("Hello"); // 同一プロジェクトでは統一 ]

// console.log(12345); //数値リテラル
// console.log(12345.6789); //浮動小数点リテラル
// console.log('12345')　//文字列リテラル ]

// console.log('Hello World!!!')
// console.log('Hello World!!!')
// console.log('Hello World!!!') ]


//<Javascriptとは？>
//実行環境がWebブラウザに実装
//Webページでの動的な機能を実現
//ウェブブラウザで動作する唯一の言語

//<利用例>
//Webページの再読み込みなしで読み込みが可能。
//Webページ要素のアニメーション・フェードイン・アウト
//フォームの入力値の動的なチェック

//Javascriptのバージョン（ECMAScriptのバージョン）
//基本はES2015をベースでWebブラウザの対応状況次第で最新を使用。
//上位互換性がある。

//調査＝MDN・ECMAScript

//コメントアウト時に//を付けてもブラウザでは見れるため覚えておく。

// console.log('Hello');

// リテラルとは？
// プログラム内に直接記述した値。

//　エスケープシーケンス
//特殊な文字や機能を実現するもの

//予約語はMDN確認
