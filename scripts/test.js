let md5 = require('md5');
let gt = require('../tools/generalTools');
let a = md5('asdfghjklqwertyuiopzxcvbnm,asdfghjklqwertyuiodfvgbxcvbcxvbcvxbxcvbcxvbdfghsdyhservcbxc6h5n41rt4y89erhg5441564156y1hhdf$%^$%^!#$%@#^$@#5651546154');
console.log(a);

let unordered = {
    'b': 'foo',
    'c': 'bar',
    'a': 'baz'
  };
  unordered = gt.sortObjectByKeys(unordered);
  unordered.d = 'abs';
  console.log(unordered);
  
  console.log(gt.sortURLParams('c=4&a=2&b=3&a=1'));

