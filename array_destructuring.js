// array destructuring
const arr = [1,2,3,4,5,6]
// let a = arr[0]
// let b = arr[1]
 let [a, ,c,...rest] = arr
console.log(a  ,c, rest);