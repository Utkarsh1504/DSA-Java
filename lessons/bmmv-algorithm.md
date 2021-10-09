---
path: "/bmmv-algorithm"
title: "Boyer-Moore Majority Voting Algorithm"
order: "4D"
section: "Arrays"
description: "arrays"
icon: "map"
---

The Boyer-Moore voting algorithm is used to find the majority element among the given elements that have more than N/2 occurrences. 

This algorithm works on the fact that if an element occurs more than N/2 times, it means that the remaining elements other than this would definitely be less than N/2.
For finding the majority element it takes exactly 2 traversals over the given elements, and works in O(N) time complexity and O(1) space complexity.
It's also quite simple to implement, though a little trickier to understand how it works.

## Working

This algorithm processes each element one at a time.
We first choose a candidate from the given set of elements. If it is same as the candidate element, increase the votes. Otherwise decrease the votes. If votes become 0, take another new element as the new candidate.

## Pseudo Code

1. Traverse through array and assume first element of array is the majority element.
2. Take a counter variable to count frequency of majority element.
3. As you traverse through array, if the current element of the array is same as majority element, increment the counter variable.
4. If the current element is not same as majority element, decrement the counter variable. This is done so that one vote of the majority element gets nullified.
5. If counter reaches 0, then change the majority element to current element and set the counter variable to 1.
6. Now again traverse through the array and find the count of majority element found.
7. If the counter is greater than half the size of the array, that is the majority element. Print the element.
8. Else print that there is no majority element.

## Algorithm

```java
majorityElement(int[] nums)
maj_ele = nums[0], count = 0, i=0
Traverse through the array from i=0 to i< nums.length using loop 
if count = 0, 
   maj_ele = nums[i], 
   count = 1
else if current element == maj_ele
   count++
else 
   count--
Traverse through the array from start to end using loop
if count > N/2
   return maj_ele  
else return -1
```

## Understand through Example

``` nums[ ]:       1, 1, 1, 1, 2, 3, 5 ```

``` count = 0:     1, 2, 3, 4, 3, 2, 1 ``` 

``` maj_ele = 1:   1, 1, 1, 1, 1, 1, 1 ```

maj_ele = 1 after first traversal and count is

``` count:         1, 2, 3, 4, 4, 4, 4 ```

maj_ele = 1

count > 7/2 i.e 3

So majority element is 1.

## Code Implementation

```java
import java.io.*;
class Main
{
// Function to find majority element 
public static int majorityElement(int nums[])
{
	int count = 0, maj_ele = nums[0];
	// Finding majority element
	for (int i = 0; i < nums.length; i++) {
	if (count == 0) {
       maj_ele = nums[i];
		count = 1;
	}
	else {
		if (nums[i] == maj_ele)
		count++;
		else
		count--;
	}
	}
	// Checking if majority element occurs more than N/2 times
	for (int i = 0; i < nums.length; i++) {
	if (nums[i] == maj_ele)
		count++;
	}
	if (count > (nums.length / 2))
	return maj_ele;
	return -1;
}
// Driver code
public static void main(String[] args)
{
	int arr[] = { 1, 1, 1, 1, 2, 3, 5 };
	int majority = majorityElement(arr);
	System.out.println(" The majority element is " + majority);
	}
}
```

### Output

The majority element is 1

## Complexity Analysis

### Time Complexity

Two traversal through the array has occured, so the time complexity is linear i.e O(n).

### Space Complexity

No extra space is required so space complexity is O(1).

## Problems Based on Boyer-Moore Majority Voting Algorithm

- Majority Element : 
  https://leetcode.com/problems/majority-element/solution/
- Majority Element II : 
  https://leetcode.com/problems/majority-element-ii/
  
