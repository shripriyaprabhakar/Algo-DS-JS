function secondLargest(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = obj[arr[i]] + 1 || 1;
    }
    let newArr = Object.keys(obj);
  
    var firstMax = Math.max(...newArr);
    let num = newArr.indexOf(firstMax);
    newArr.splice(num, 1);
    return Math.max(...newArr);
  }
  
  secondLargest([1,3,5,6,5,3,6]) 