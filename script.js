function threeSum(arr, target) {
  // Sort the input array in ascending order.
  arr.sort((a, b) => a - b);
  
  let closestSum = Infinity; // Initialize closestSum to a large value.
  
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Initialize the left pointer.
    let right = arr.length - 1; // Initialize the right pointer.
    
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      
      // Update closestSum if the current sum is closer to the target.
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }
      
      if (currentSum < target) {
        left++; // Move the left pointer to the right.
      } else {
        right--; // Move the right pointer to the left.
      }
    }
  }
  
  return closestSum;
}

module.exports = threeSum;
