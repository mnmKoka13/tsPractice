let greeting: string, target: string;
greeting = "Hello, ";
target = "World!";
console.log(greeting + target);

// =================

const message: string = `Hello
world!`; // テンプレートリテラル。途中で改行できる。
console.log(message);

const str1: string = "Hello";
const str2: string = "world!";
console.log(`${str1}, ${str2}`); // テンプレートリテラル。文字列の中に変数を埋め込むことができる。

console.log(`123 + 456 = ${123 + 456}`);

// =================

console.log("Hello, \\world/"); // エスケープシーケンス
console.log("Hello, \u{796d} world!"); // -> Hello, 祭 world!

// =================

const width1 = 5;
const width2 = 8;
const height: number = 3;
const area = (width1 + width2) * height / 2;
console.log(area);

// =================

const binary = 0b1010; // 2進数リテラル
const octal = 0o755; // 8進数リテラル
const hexadecimal = 0xff; // 16進数リテラル
console.log(binary, octal, hexadecimal);

// =================

const big = 1e8;
const small = 4e-5;
console.log(big, small);

// =================

const million = 1_000_000;
console.log(million);

// =================

const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum);

const result = 5n / 2n; // 除算の結果が少数になる場合は整数に丸められる
console.log(result);

// const wrong = 100n + 50;  // bigInt と number の混在はエラーになる

