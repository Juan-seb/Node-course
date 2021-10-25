const { Buffer } = require('buffer');

let buf = new Buffer.alloc(100);
let buf2 = new Buffer.alloc(26);

let str = '\u00bd + \u00bc = \u00be'

buf.write('abcd', 0, 4, 'ascii');
console.log(buf);
console.log(buf.toString('ascii'));
console.log(str.length);
console.log(str);
console.log(`Bytes gastados: ${Buffer.byteLength(str, 'utf-8')}`);

for (let i = 0; i < buf2.length; i++) {
    buf2[i] = i+65;
}

console.log(buf2.toString("ascii"));
