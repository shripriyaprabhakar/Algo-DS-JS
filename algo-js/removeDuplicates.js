
function removeDuplicates(arr) {
    arr.sort((a,b) => a - b);
    var obj = {};
   //  var results = []
   //  for (var i = 0; i < arr.length; i++) {
   //    if (obj[arr[i]] !== undefined) {
   //      obj[arr[i]] = obj[arr[i]] + 1;
   //    } else {
   //      obj[arr[i]] = 1;
   //      results.push(arr[i]);
   //    }
   //  }
   //  return results;
     for (var i = 0; i < arr.length; i++) {
       obj[arr[i]] = obj[arr[i]] + 1 || 1;
     }
     return Object.keys(obj);
   }
   
   removeDuplicates([1,3,5,6,5,3]) //[1,3,3,5,5,6]