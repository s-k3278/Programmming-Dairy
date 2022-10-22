function sumArray(array){
  let sum = 0 // the sum is initialed to 0

/* js arrays are zero-index based
ourArray.length = 5, the initialization block is set to 0.
the last item is index 4 that is < 5 (what we define in the condition block)
*/
  for (let i = 0; i < 
  array.length; i += 1) {
  // take every item in the array and add it to sum variable
  sum += array[i]
  // initial: sum = 0 
  // iteration 1: 0 + 1 => sum = 1
  // iteration 2: 1 + 4 => sum = 5
  // iteration 3: 5 + 0 => sum = 5
  // iteration 4: 5 + 9 => sum = 14
  // iteration 5: 14 + -3 => sum = 11

  }

  console.log(sum) // 11
  // return sum
  return sum
}

// call the function and give it our array
sumArray([1, 4, 0, 9, -3]); // logs 11
