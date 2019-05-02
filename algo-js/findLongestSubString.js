// findLongestSubstring Solution
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring('rithmschool')


function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];// 'r' //i
      if (seen[char]) {
        start = Math.max(start, seen[char]); //0,9
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1); // 0, 0-0+1=1, 2, ....9
      
      // store the index of the next char so as to not double count
      seen[char] = i + 1; // {r: 1, i:2, o:9}
    }
    return longest;
  }
  
  findLongestSubstring('rithooschplderqmn')