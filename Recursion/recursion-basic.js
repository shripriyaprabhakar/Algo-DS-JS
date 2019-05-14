// POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
// FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
// FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// Reverse Solution

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
// isPalindrome Solution

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
// someRecursive Solution

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}
// flatten Solution

function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}


function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) {
      return [];
    }
    // add whatever parameters you deem necessary - good luck!
    var newArr = [];
    
   let word = arr[0];
   console.log(word);
   newArr.push(word[0].toUpperCase()+word.slice(1))
    
    newArr= newArr.concat(capitalizeFirst(arr.slice(1)));
    return newArr;
  }
  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

  
  function nestedEvenSum (obj) {
    // add whatever parameters you deem necessary - good luck!
    var total = 0;
    function subSum(obj) {
      for (var key in obj) {
          if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            
              total += obj[key];
          }
          if (typeof obj[key] === 'object') {
            subSum(obj[key]);
          }
      }
    }
    subSum(obj);
    return total;
  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10

  function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
     
    if (arr.length === 0) {
        return [];
    }
     var newArr = [];
     
    let newWord = [];
    let word = arr[0].split('')
    for (var letter of word) {
      newWord.push(letter.toUpperCase());
    }
  
    newArr.push(newWord.join(''));
  
    newArr = newArr.concat(capitalizeWords(arr.slice(1)));
  
    return newArr;
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']


  function stringifyNumbers(obj) {
    
  
    var newObj = Object.assign({}, obj);
    
  function sub(obj) {
        for (var key in obj) {
            if (typeof obj[key] === 'number') {
              obj[key] = '' + obj[key]  
            }
            if (typeof obj[key] === 'object' ) {
                sub(obj[key]);
            }
        }
        return obj;
  }
  sub(newObj);
  return newObj;
}


/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function collectStrings(obj) {
    var newArr = [];
    for (var key in obj) {
        if (typeof obj[key] === "string") {
            newArr.push(obj[key])
        }
        if (typeof obj[key] === "object") {
            newArr = newArr.concat(collectStrings(obj[key]))
        }
    }
    return newArr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])