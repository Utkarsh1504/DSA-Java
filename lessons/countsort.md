---
path: "/countsort"
title: "Count Sort"
order: "5F"
section: "Searching & Sorting"
description: "learn Sorting algorithms"
---
__________________________________________________________________________________________________________________

# **Count Sort**

Counting sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array. In Counting sort, we maintain an auxiliary array which drastically increases space requirement for the algorithm implementation.

It works just like hashing, first, we calculate the max value in the input array, the array to be sorted. Then we count the number of occurrences of each array element from 0 to length-1 and assign it into the auxiliary array. This array is used again to retrieve the sorted version of the input array.

It actually has linear time complexity but we can’t say that it’s the best algorithm because the space complexity is quite high and it is only suitable to use in a scenario where input array element range is close to the size of the array.

## **Pseudo-Code**

1. Iterate the input array and find the maximum value present in it.
2. Declare a new array of size max+1 with value 0
3. Count each and every element in the array and increment its value at the corresponding index in the auxiliary array created
4. Find cumulative sum is the auxiliary array we adding curr and prev frequency
5. Now the cumulative value actually signifies the actual location of the element in the sorted input array
6. Start iterating auxiliary array from 0 to max
7. Put 0 at the corresponding index and reduce the count by 1, which will signify the second position of the element if it exists in the input array
8. Now transfer array received in the above step in the actual input array

## **Algorithm**

```java
countingSort(array, size)
  max <- find largest element in array
  initialize count array with all zeros
  for j <- 0 to size
    find the total count of each unique element and 
    store the count at jth index in count array
  for i <- 1 to max
    find the cumulative sum and store it in count array itself
  for j <- size down to 1
    restore the elements to array
    decrease count of each element restored by 1
```
## **Example for better understanding**

Consider the data in the range 0 to 9.

  Input data: 1, 4, 1, 2, 7, 5, 2

  1. Take a count array to store the count of each unique object.
    
    Index:     0  1  2  3  4  5  6  7  8  9
    Count:     0  2  2  0   1  1  0  1  0  0

  2. Modify the count array such that each element at each index 
  stores the sum of previous counts. 
    
    Index:     0  1  2  3  4  5  6  7  8  9
    Count:     0  2  4  4  5  6  6  7  7  7

The modified count array indicates the position of each object in 
the output sequence.

   3. Rotate the array clockwise for one time.
    
    Index:     0 1 2 3 4 5 6 7 8 9
    Count:     0 0 2 4 4 5 6 6 7 7

   4. Output each object from the input sequence followed by 
      increasing its count by 1.
    
Process the input data: 1, 4, 1, 2, 7, 5, 2. Position of 1 is 0.

  Put data 1 at index 0 in output. Increase count by 1 to place 
  next data 1 at an index 1 greater than this index.


## **Code Implementation**

```java
// Counting sort in Java

import java.util.*;

class Solution {

	static void countSort(int[] arr)
	{
		int max = Arrays.stream(arr).max().getAsInt();
		int min = Arrays.stream(arr).min().getAsInt();
		int range = max - min + 1;
		int count[] = new int[range];
		int output[] = new int[arr.length];
		for (int i = 0; i < arr.length; i++) {
			count[arr[i] - min]++;
		}

		for (int i = 1; i < count.length; i++) {
			count[i] += count[i - 1];
		}

		for (int i = arr.length - 1; i >= 0; i--) {
			output[count[arr[i] - min] - 1] = arr[i];
			count[arr[i] - min]--;
		}

		for (int i = 0; i < arr.length; i++) {
			arr[i] = output[i];
		}
	}

	static void printArray(int[] arr)
	{
		for (int i = 0; i < arr.length; i++) {
			System.out.print(arr[i] + " ");
		}
		System.out.println("");
	}

	// Driver code
	public static void main(String[] args)
	{
		int[] arr = { -5, -10, 0, -3, 8, 5, -1, 10 };
		countSort(arr);
		printArray(arr);
	}
}

```
### **Output**

    -10 -5 -3 -1 0 5 8 10

## **Limitations of Count Sort**

1. It is effective when range is not greater than number of object.
2. It is not comparison based complexity.
3. It is also used as sub-algorithm for different algorithm.
4. It uses partial hashing technique to count the occurrence.

## **Complexity Analysis**

### Time Complexity
					 
    Best : O(n+k)
			
    Worst : O(n+k)
			
    Average : O(n+k)
			
    Stability : Yes

In all cases, the complexity is the same because no matter how the elements are placed in the array, the algorithm goes through n+k times, where k is the range of input. 

There is no comparison between any elements, so it is better than comparison based sorting techniques. But, it is bad if the integers are very large because the array of that size should be made.

### Space Complexity

The space complexity of Counting Sort is O(max). Larger the range of elements, larger is the space complexity.

## **Problems Based on Count Sort**

1. Shil and Birthday Present : https://www.hackerearth.com/problem/algorithm/shil-and-birthday-present/
2. Finding Pairs : https://www.hackerearth.com/problem/algorithm/finding-pairs-4/
3. Counting Sort : https://practice.geeksforgeeks.org/problems/counting-sort/1