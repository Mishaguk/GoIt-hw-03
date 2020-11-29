'use strict';
const countProps = function (obj) {
    return Object.keys(obj).length;
    
}

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 1 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //3