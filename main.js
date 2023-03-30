//strictモードで実行。厳密にエラーを検証。
'use strict';

let user = new Object();
user.name = 'Mike';
user.gender = 'man';
user.birthYear = 1990;
console.log(user);

//オブジェクト初期化子
let user = {name: 'Mike',
  gender: 'man', birthYear: 1990};
console.log(user);

//ドット記法
console.log(user.name);

// ブラケット記法
console.log(user['name']);

//個数
console.log(Object.keys(user).length);

let keys = Object.keys(user);
console.log(keys);

user.prefecture = 'Hyogo';
user ['prefecture'] = 'Hyogo';
console.log(user);

//結合
let obj1 = { a:1,b:2,c:3}
let obj2 = { d:4,e:5,f:6}
let mergedObj = Object.assign(obj1,obj2);
console.log(mergedObj);

// let colors = ['Red', 'Green', 'Blue'];
// console.log(colors);

// colors.push('Black');
// console.log(colors);

// colors.unshift('white');
// console.log(colors);

// colors[1] = 'Aka';
// console.log(colors);

// let insertArr = ['a','b','c'];
// insertArr.splice(1,0,'D');
// console.log(insertArr);

// let arr1 = ['a','b','c'];
// let arr2 = ['d','e','f'];
// let mergedArr = arr1.concat(arr2);
// console.log(mergedArr);
// console.log(arr1);
// console.log(arr2);

// let arr3 = ['a','b','c','d'];
// arr2.shift();
// console.log(arr3);


// let colors = ['Red', 'Green', 'Blue'];
// console.log(colors);
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// let arr = [1,'2',3,['a','b','c']];
// console.log(arr);

// console.log(colors[colors.length -1]);

// let emptyArr = [];
// console.log(emptyArr);


  // //説明の初期値を設定
  // let description = document.createElement('p');
  // description.textContent = image.alt;
  
  // //作成した要素の表示
  // let mainImage = document.getElementById('main_image');
  // mainImage.insertBefore(image, null);
  // mainImage.insertBefore(description, null);
  
  // //サムネイルの表示
  // let thumbnails = document.getElementById('thumbnails');
  // for(let i = 0; i < images.length; i++) {
  //   let thumbnailImage = document.createElement('img');  
  //   thumbnailImage.setAttribute('src', images[i].src);
  //   thumbnailImage.setAttribute('alt', images[i].description);
  //   thumbnails.insertBefore(thumbnailImage, null);
  // }
  
  // //クリックしたサムネイルの表示
  // thumbnails.addEventListener('click', function(e) {
  //   if(e.target.src) {
  //     // console.log(e.target);
  //   image.src = e.target.src;
  //   description.textContent = e.target.alt;
  //   }
  // }, false);



// let obj1 = { a:1, b:2, c:3 }
// let obj2 = { a:4, b:5, c:6 }
// let mergedObj = Object.assign(obj1,obj2);
// console.log(mergedObj);

// //空のオブジェクト
// let person = {};
// console.log(person);

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


// let ans1 = x + y * z;
// console.log(ans1);

// let ans2 = (x + y) * z;
// console.log(ans2);

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
// console.log(ans4);


// if (条件式) {
//   //
// } else if (条件式) {
//   //
// } else {
//   //
// }
// let a = 100;
// if (a => 100) {
//   console.log('100以上');
// }

// let b = 101;
// if (b > 100) {
//   console.log('100より大きい');
// }

// let c = 100;
// if (c <= 100) {
//   console.log('100以下');
// }

// let d = 99;
// if (d < 100) {
//   console.log('100未満');
// }

// let e = 100;
// if (e == 100) {
// console.log('100と等しい');
// }

// let f = 111;
// if(f != 100) {
//   console.log('100と等しくない')
// }


// let g = 99;
// if ( g >= 100) {
//   console.log('100以上');
// } else {
// console.log('100以上ではない')
// }

// if (条件式)　{
//   // 条件式がtrueのとき実行したい処理。
// }

// //比較演算子
// let temperature = 29;
// if (temperature > 28) {
//   console.log('冷房');
// }

// console.log(29 > 28);
// console.log(20 > 28);

// let num = 10;

// //インクリメント
// num++;
// console.log(num);

// //デクリメント
// num--;
// console.log(num);

// let num1 = 10;
// let num2 = 10;
// let ans1 = ++num1;
// let ans2 = num2++;

// console.log(ans1);
// console.log(ans2);


// let weight = 50;
// let height = 1.7;
// let bmi = weight / (height * height);
// console.log(bmi);


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


// const scores = [
//   [100,99,98],
//   [90,89,88],
//   [80,79,78]
// ];

// console.log(scores[0][0]);
// console.log(scores[0][1]);
// console.log(scores[0][2]);
// console.log(scores[1][0]);
// console.log(scores[1][1]);
// console.log(scores[1][2]);
// console.log(scores[2][0]);
// console.log(scores[2][1]);
// console.log(scores[2][2]);

// for( let i = 0; i < scores.length; i++) {
//   for( let j = 0; j < scores[i].length; j++) {
//     console.log(scores[i][j]);
//   }
// }

// function getrectangle(height, width) {
//   return height * width;
// }
// console.log(getrectangle(3,5));


// let age = 25;
// let beverage = (age >= 20)? 'ビール' : 'コーラ';
// console.log(beverage);

// let colors = ['Red','Green','Blue'];
// console.log(colors);
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);

// let arr = [1,'2',3,['a','b','c']];
// console.log(arr)
// console.log(colors.length);
// console.log(colors[colors.length -1]);

// let emptyArr = [];
// console.log(emptyArr);

// function greeting(name) {
//   console.log('Hello' + name + 'さん');
// }

// function inputUserName(callback) {
//   let name = prompt('あなたの名前を入力してください');
//   callback(name);
// }

// inputUserName(greeting);


// const displayMessage = function() {
//   console.log('Timeout');
// }
// setTimeout(displayMessage, 3000);

// const getSum = function(kakaku,kosu) {
// return kakaku * kosu;
// } 
// console.log(getSum(100,20));

// (引数, ...) => {
//   //処理
// }

// const getRectangle = function(height,width) {
//   return height * width;
// }

// const getRectangle = (height, width) => {
//   return height * width;
// };
// console.log(getRectangle(3,5));


// // new Function(引数1,引数2,関数本体の処理);
// const getRectangle = new Function('height', 'width', 'return height * width');
// console.log(getRectangle(3,5));

// const getRectangle = function(height, width) {
// // function以下は関数、const部分は変数
//   return height * width;
// }
// console.log(getRectangle(3,5));

// 引数：let height = 3;
// 引数：let yoko = 5;
// let sikaku = height * yoko;
// console.log(sikaku);

// // function 関数(引数1,引数2・・・) {
// //   //任意
// // 　return 戻り値;
// // }

// function getrectangle(height, width) {
//   return height * width;
// }
// console.log(getrectangle(3,5));


// let age = 25;
// let beverage = (age >= 20)? 'ビール' : 'コーラ';
// console.log(beverage);

// let num = 6;
// if(num === 1) {
//   console.log('大吉');
// } else if(num === 2 ) {
//   console.log('中吉');
// } else if(num === 3 ) {
//   console.log('小吉');
// } else if(num === 4 ) {
//   console.log('吉');
// } else if(num === 5 ) {
//   console.log('凶');
// } else {
//   console.log('想定外');
// }

// let num = Math.floor(Math.random() * 5 + 1);
// switch (num) {
//   case 1:
//     console.log('大吉');
//     break;
//   case 2:
//     console.log('中吉');
//     break;
//   case 3:
//     console.log('小吉');
//     break;
//   case 4:
//     console.log('吉');
//     break;
//   case 5:
//     console.log('凶');
//     break;
//   default :
//     console.log('想定外');
//     break;
// }


// let num = 3;
// switch(num) {
//   case 1:
//     console.log('金');
//     break;
//   case 2:
//     console.log('銀');
//     break;
//   case 3:
//   console.log('銅');
//   break;
//   case 4:
//   console.log('4');
//   break;
// }

// let num = 4;
// if (num === 1) {
//   console.log('金');
// } else if(num === 2) {
// console.log('銀');
// } else if(num === 3) {
// console.log('銅');
// } else {
//   console.log('残念');
// }


// let num = 11;
// if(num % 2 === 0) {
//   if(num % 3 === 0) {
//     console.log('${num}は２の倍数かつ３の倍数です')
//   }
// }

// let num = 6;
// if((num % 2 === 0) && (num % 3 === 0)){
//   console.log('${num}は２の倍数かつ３の倍数です')
// }


// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

// console.log(false && true || true);

// let hasDriversLisense = false;
// let hasGoldLisense = true;

// if(hasDriversLisense && hasGoldLisense) {
//   console.log('優良ドライバーです')
// }


// イベントハンドラ
// function handleChange() {
//   const checkAll = document.getElementById('checkAll');
//   const checkBoxes = document.getElementsByName('language');
//   for (let i= 0; i < checkBoxes.length; i++) {
//     checkBoxes[i].checked = checkAll.checked;
//   }
// }
//   const ca = document.getElementById('checkAll');
//   ca.addEventListener('change', handleChange, false);


// let weight = 60;
// let height = 1.7;
// let bmi = weight / (height * height);
// console.log(bmi);

// if(bmi >= 25) {
// console.log('肥満');
// } else if ( bmi >= 18.5) {
//   console.log('普通');
// } else {
//   conosole.log('痩せ');
// }


// let num = 100;
// let str = '100';

// // === 厳密比較を行う
// // ==  抽象比較を行う（基本使用しない）

// if(num === str) {
//   console.log('同じ');
// } else {
//   console.log('同じではない');
// }

// let b = false;
// if (b) {
//   console.log('はい');
// } else {
//   console.log('いいえ');
// }


// let birthYear = '2000';
// let age = 18;

// console.log(birthYear + age);
// console.log(age + birthYear);
// console.log(Number(birthYear) + age);
// console.log(age + '歳');
// console.log(String(age) + '歳');


// let x = 70;

// if (x >= 90) {
//   console.log('A');
// } else if ( x >= 80) {
//   console.log('B');
// } else if ( x >= 60) {
//   console.log('C');
// } else {
//   console.log('D');
// }


// if (条件式) {
//   //
// } else if (条件式) {
//   //
// } else {
//   //
// }
// let a = 100;
// if (a => 100) {
//   console.log('100以上');
// }

// let b = 101;
// if (b > 100) {
//   console.log('100より大きい');
// }

// let c = 100;
// if (c <= 100) {
//   console.log('100以下');
// }

// let d = 99;
// if (d < 100) {
//   console.log('100未満');
// }

// let e = 100;
// if (e == 100) {
// console.log('100と等しい');
// }

// let f = 111;
// if(f != 100) {
//   console.log('100と等しくない')
// }


// let g = 99;
// if ( g >= 100) {
//   console.log('100以上');
// } else {
// console.log('100以上ではない')
// }

// if (条件式)　{
//   // 条件式がtrueのとき実行したい処理。
// }

// //比較演算子
// let temperature = 29;
// if (temperature > 28) {
//   console.log('冷房');
// }

// console.log(29 > 28);
// console.log(20 > 28);

// let num = 10;

// //インクリメント
// num++;
// console.log(num);

// //デクリメント
// num--;
// console.log(num);

// let num1 = 10;
// let num2 = 10;
// let ans1 = ++num1;
// let ans2 = num2++;

// console.log(ans1);
// console.log(ans2);


// let weight = 50;
// let height = 1.7;
// let bmi = weight / (height * height);
// console.log(bmi);

// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e) {
// //IDによるノード取得
// let headerTitle = document.getElementById('headerTitle');
// //テキストの置換
// headerTitle.textContent = 'タイトルが変更されました。';
// }, false);

// let weight = 50;
// let height = 1.7;
// let bmi = weight / (height * height);
// console.log(bmi);

// let num = 20;
// num = num + 10;
// console.log(num);

// let num1 = 20;
// num1 += 10;
// console.log(num1);

// let num2 = 20;
// num2 -= 10;
// console.log(num2);

// let num3 = 20;
// num3 *= 10;
// console.log(num3);

// let num4 = 20;
// num4 /= 10;
// console.log(num4);

// let lastName = 'は';
// let firstName = 'ま';
// let message1 = 'こんにちは' + lastName + ' ' + firstName;
// console.log(message1);

// let message2 = `こんにちは ${lastName} ${firstName} さん
// JavaScript`;
// console.log(message2);


// let x = 1;
// let y = 2;
// let z = 3;

// let ans1 = x + y * z;
// console.log(ans1);

// let ans2 = (x + y) * z;
// console.log(ans2);

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
// console.log(ans4);


// let myName = 'Hamaoka';
// let num = 123;
// let dec = 123.456;

// console.log(myName);
// console.log(num);
// console.log(dec);

// myName = 456;
// console.log(myName);
// console.log(typeof myName);


// let color = 'Red';
// console.log(color);

// color = 'Green';
// console.log(color);

// // let color = 'Blue';

// let myColor = 'Blue';
// console.log(myColor);

// //　定数
// const PI = 3.14;
// console.log(PI);

// const TAX_RATE = 10;
// console.log(TAX_RATE);


// console.log('Hello I\'m Hamaoka');
// // \nで改行
// console.log('\¥\t AAA \n BBB');
// console.log("Hello I'm Hamaoka");
// console.log('こんにちは"濱岡"さん');


// console.log(12345); //数値リテラル
// console.log(12345.6789);　//不動小数点リテラル
// console.log('12345');　//文字数リテラル

// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');


// console.log('Hello');


// const images = [
//   {src:'https://source.unsplash.com/C0zDWAPFT8A', description: '画像１'},
//   {src:'https://source.unsplash.com/fEK4jvgnBpg', description: '画像２'},
//   {src:'https://source.unsplash.com/egfS7HzgGcc', description: '画像３'},
//   {src:'https://source.unsplash.com/e-S23SJzDqs', description: '画像４'},
//   {src:'https://source.unsplash.com/Hnwm8ktAd5E', description: '画像５'},
//   ];
  
//   let image = document.createElement('img');
//   image.setAttribute('src', images[0].src);
//   image.setAttribute('alt', images[0].description);
  
//   //説明の初期値を設定
//   let description = document.createElement('p');
//   description.textContent = image.alt;
  
//   //作成した要素の表示
//   let mainImage = document.getElementById('main_image');
//   mainImage.insertBefore(image, null);
//   mainImage.insertBefore(description, null);
  
//   //サムネイルの表示
//   let thumbnails = document.getElementById('thumbnails');
//   for(let i = 0; i < images.length; i++) {
//     let thumbnailImage = document.createElement('img');  
//     thumbnailImage.setAttribute('src', images[i].src);
//     thumbnailImage.setAttribute('alt', images[i].description);
//     thumbnails.insertBefore(thumbnailImage, null);
//   }
  
//   //クリックしたサムネイルの表示
//   thumbnails.addEventListener('click', function(e) {
//     if(e.target.src) {
//       // console.log(e.target);
//     image.src = e.target.src;
//     description.textContent = e.target.alt;
//     }
//   }, false);


// イベントハンドラ
// function handleChange() {
//   const checkAll = document.getElementById('checkAll');
//   const checkBoxes = document.getElementsByName('language');
//   for (let i= 0; i < checkBoxes.length; i++) {
//     checkBoxes[i].checked = checkAll.checked;
//   }
// }
//   const ca = document.getElementById('checkAll');
//   ca.addEventListener('change', handleChange, false);
  

// const sayHelloButton = document.getElementById('sayHelloButton');
// function sayHelloEventHandler(e) {
//   console.log('Hello');
// }
// sayHelloButton.addEventListener('click',sayHelloEventHandler, false);

// //removeの実装
// const removeEventHandlerButton = document.getElementById('removeEventHandlerButton');
// function removeEventHandler(e) {
//   console.log('remove');
//   sayHelloButton.removeEventListener('click',sayHelloEventHandler,false);
// }
// removeEventHandlerButton.addEventListener('click',removeEventHandler,false);


// function keyUp(e) {
  //console.log('keyUp');
  // console.log(inputText.value);
  // console.log(inputText.value.length);
  
  //値の取得
//   let str = inputText.value;
//   str = str.replace(/\r?\n/g, '');
  
//   //残り文字数
//   let num = 10 - str.length;
//   console.log(num);
  
//   //表示部分の要素取得
//   const characterCount = document.getElementById('characterCount');
  
//   //残り文字数のセット表示
//   characterCount.textContent = num;
  
//   //p要素の取得
//   const characterCountWrap = document.getElementById('characterCountWrap');
  
//   //文字色の設定
//   if(num >= 0) {
//     characterCountWrap.style.color = 'black';
//   } else {
//     characterCountWrap.style.color = 'red';
//   }
// }

// const inputText = document.getElementById('inputText');
// inputText.addEventListener('keyup', keyUp, false);


// let num = 0;

// function updateCounter(num) {
//   const counter = document.getElementById('counter');
//   counter.textContent = num;
// }

// function countUp() {
//   num++;
//   // const counter = document.getElementById('counter');
//   // counter.textContent = num;
//   updateCounter(num);
// }

// function reset() {
//   num = 0;
//   // const counter = document.getElementById('counter');
//   // counter.textContent = num;
//   updateCounter(num);
// }

// const countUpButton = document.getElementById('countUpButton');
// countUpButton.addEventListener('click',countUp, false);

// const resetBtn = document.getElementById('resetButton');
// resetBtn.addEventListener('click', reset, false);


// DOMContentLoaded
// document.addEventListener('DOMContentLoaded', function() {
//   alert('DOMContentLoaded!');
// }, false);

// // load
// window.onload = function() {
//   const nowLoading = document.getElementById('nowLoading');
//   nowLoading.style.display = 'none';
// }


//イベントハンドラ
// function handleChange() {
//   const checkAll = document.getElementById('checkAll');
//   const checkBoxes = document.getElementsByName('language');
//   for (let i= 0; i < checkBoxes.length; i++) {
//     checkBoxes[i].checked = checkAll.checked;
//   }
// }
//   const ca = document.getElementById('checkAll');
//   ca.addEventListener('change', handleChange, false);
  

// const sayHelloButton = document.getElementById('sayHelloButton');
// function sayHelloEventHandler(e) {
//   console.log('Hello');
// }
// sayHelloButton.addEventListener('click',sayHelloEventHandler, false);

// //removeの実装
// const removeEventHandlerButton = document.getElementById('removeEventHandlerButton');
// function removeEventHandler(e) {
//   console.log('remove');
//   sayHelloButton.removeEventListener('click',sayHelloEventHandler,false);
// }
// removeEventHandlerButton.addEventListener('click',removeEventHandler,false);


//イベントハンドラの登録
// const sayHelloButton = document.getElementById('sayHelloButton');
//要素オブジェクト.addEventListener(false);
// sayHelloButton.addEventListener('click',function(e) {
// console.log('Hello');
// console.log(e);
// }, false);

// sayHelloButton.addEventListener('click',function() {
// console.log('Hello');
// }, false);

//アロー関数での書き換え
// sayHelloButton.addEventListener('click',(e) => {
// console.log('Hello');
// }, false);

// function sayHelloEventHandler(e) {
//   console.log('Hello');
//   console.log(e);
// }
// sayHelloButton.addEventListener('click', sayHelloEventHandler, false);


// let addButton = document.getElementById('addButton');
// addButton.addEventListener('click', function(e){
//   //入力欄のinput要素を取得
//   let inputLanguage = document.getElementById('inputLanguage');
//   //input要素から文字列を取得
//   let language = inputLanguage.value;
//   if(language === ''){
//     alert('未入力です');
//     return;
//   }
//   //li要素を生成
//   let listItem = document.createElement('li');
//   //li要素のコンテンツに入力された文字列を設定
//   listItem.textContent = language;
//   //ul要素を取得
//   let languageList = document.getElementById('languageList');
//   //リストの末尾に生成したli要素を追加
//   languageList.appendChild(listItem);
//   inputLanguage.value = '';
// }, false);
// //削除
// let removeButton = document.getElementById('removeButton');
// removeButton.addEventListener('click', function(e){
// //ul要素を取得
// let languageList = document.getElementById('languageList');
// //リストから要素を削除
// languageList.removeChild(languageList.lastElementChild);
// }, false);


//window.console.log('hello');
//console.log('hello');
//window.alert('hello');
//window.confirm('OK?');
//window.open('https://www.google.co.jp');
//window.close();
// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e) {
//   window.scroll(0, 300);
// }, false);


// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e){
//   // let element = document.querySelector('.foo');
//   // console.log(element);
//   // console.log(element.textContent);
  
//   let elements = document.querySelectorAll('.foo');
//   console.log(elements);
  
//   for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i].textContent);
//   }
// }, false);


// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e){
//   let elements = document.getElementsByClassName('foo');
//   console.log(elements);
//   for(let i = 0; i < elements.length; i++) {
//   console.log(elements[i].textContent);
//   }
// }, false);


// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e){
//   let elements = document.getElementsByName('inputText');
//   console.log(elements);
//   console.log(elements[0].value);
// }, false);


// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e){
//   let elements = document.getElementsByTagName('p');
//   console.log(elements);
//   for(let i = 0; i < elements.length; i++) {
//   console.log(elements[i].textContent);
// }
// }, false);


// class属性を追加・更新(赤)
// let setRedClassButton = document.getElementById('setRedClassButton');
// setRedClassButton.addEventListener('click', function(e) {
//   let showText = document.getElementById('showText');
//   showText.setAttribute('class','red');
// }, false);

// // class属性を追加・更新(青)
// let setBlueClassButton = document.getElementById('setBlueClassButton');
// setBlueClassButton.addEventListener('click', function(e) {
//   let showText = document.getElementById('showText');
//   showText.setAttribute('class','blue');
// }, false);

// // class属性を削除
// let removeClassButton = document.getElementById('removeClassButton');
// removeClassButton.addEventListener('click', function(e) {
//   let showText = document.getElementById('showText');
//   showText.removeAttribute('class');
// }, false);


// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e) {
// //IDによるノード取得
// let inputColorName = document.getElementById('inputColorName');
// //取得したinput要素の入力値を取得
// let colorNameText = inputColorName.value;
// //取得したinput要素のname属性値を取得
// let inputName = inputColorName.getAttribute('name');
// // idがshowTextのp要素を取得
// let showText = document.getElementById('showText');
// //出力
// showText.textContent = `name属性: ${inputName}, 入力されたテキスト： ${colorNameText}`;
// }, false);


// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e) {
// //IDによるノード取得
// let headerTitle = document.getElementById('headerTitle');
// //テキストの置換
// headerTitle.textContent = 'タイトルが変更されました。';
// }, false);

// let btn = document.getElementById('triggerButton');
// btn.addEventListener('click', function(e) {
//   //alert('clicked');
//   //IDによるノードの取得
//   let headerTitle = document.getElementById('headerTitle');
//   //let headerTitle = document.getElementById('hoge');
//   console.log(headerTitle.textContent);
// }, false);


// DOMとは？
// JavaScriptで記述されたプログラムから。
// WEBページにアクセスして操作する方法。


// let tokuten = [100,90,80,70,60];
// let sum = 0;
// for(let i = 0; i < tokuten.length; i++ ) {
//   sum += tokuten[i];
// }

// let average = sum / tokuten.length;
// console.log('合計値：' + sum);
// console.log('平均値：' + average);


// const colors = ['red','green','blue'];
// for(const color of colors) {
//   console.log(color);
// }

// const str = 'Javascript';
// for(const value of str) {
//   console.log(value);
// }


// let colors = ['Red', 'Green','Blue'];
// for(let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// } 

// colors.forEach(function(color) {
//   console.log(color)
// });


 // do while 
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i<= 3);


// let i = 1;
// while(i <= 3) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// while(i <= 10) {
//   console.log(i);
//   if(i === 5) {
//     break;
//   }
//   i++;
// }
 
// for(let i = 0; i < 3; i++) {
//   for(let j = 0; j < 3; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//   } 
// }

// const scores = [
//   [100,99,98],
//   [90,89,88],
//   [80,79,78]
// ];
// // console.log(scores[0][0]);
// // console.log(scores[0][1]);
// // console.log(scores[0][2]);
// // console.log(scores[1][0]);
// // console.log(scores[1][1]);
// // console.log(scores[1][2]);
// // console.log(scores[2][0]);
// // console.log(scores[2][1]);
// // console.log(scores[2][2]);

// for( let i = 0; i < scores.length; i++) {
//   for( let j = 0; j < scores[i].length; j++) {
//     console.log(scores[i][j]);
//   }
// }


// for(初期化式：ループ継続条件式;増減式);
  //実行処理
// }
// for (let i = 1; i <= 3; i++) {
//   console.log(i);
// }

// let arr = ['a','b','c'];
// for(let i = 0; i < 3; i++ ) {
//   console.log(arr[i]);
// }

// for(let i = 0; i < arr.length; i++ ) {
//   console.log(arr[i]);
// }


// let user = {
//   name: 'Mike Traut',
//   gender: 'man',
//   birthyear: 1990,
//   calcAge: function(thisYear) {
//   return thisYear - this.birthyear;
//   }
//   }
//   console.log(user.calcAge(2021));
  
// // オブジェクトとは
// // // => 関連のあるデータと機能の集合
// // let user = new Object();
// // user.name = 'Mike Traut';
// // user.gender = 'man';
// // user.birthyear = '1990';
// // console.log(user);

// //オブジェクト初期化子
// let user = { name: 'Mike Traut',
// gender: 'man', birthyear: 1990};
// console.log(user);

// //ドット記述法
// console.log(user.name);
// console.log(user.gender);
// console.log(user.birthyear);

// //ブラケット記法
// console.log(user['name']);
// console.log(user['gender']);
// console.log(user['birthyear']);

// //個数
// console.log(Object.keys(user).length);

// //プロパティを取得
// let keys = Object.keys(user);
// console.log(keys);

// user.prefecture = 'Hyogo';
// user['prefecture'] = 'Hyogo';
// console.log(user);

// //値の書き換え
// user.prefecture = 'Osaka';
// user['prefecture'] = 'Osaka';
// console.log(user);

// let obj1 = { a:1, b:2, c:3 }
// let obj2 = { a:4, b:5, c:6 }
// let mergedObj = Object.assign(obj1,obj2);
// console.log(mergedObj);

// //空のオブジェクト
// let person = {};
// console.log(person);

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
