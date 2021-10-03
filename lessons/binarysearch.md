---
path: "/binarysearch"
title: "Binary Search"
order: "5B"
section: "Searching & Sorting"
description: "learn Searching algorithms"
---
Defination:
Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].
A simple approach is to do a linear search. The time complexity of the above algorithm is O(n). Another approach to perform the same task is using Binary Search. 
Binary Search: Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

code in java


// Java implementation of recursive Binary Search
class BinarySearch {
	// Returns index of x if it is present in arr[l..
	// r], else return -1
	int binarySearch(int arr[], int l, int r, int x)
	{
		if (r >= l) {
			int mid = l + (r - l) / 2;

			// If the element is present at the
			// middle itself
			if (arr[mid] == x)
				return mid;

			// If element is smaller than mid, then
			// it can only be present in left subarray
			if (arr[mid] > x)
				return binarySearch(arr, l, mid - 1, x);

			// Else the element can only be present
			// in right subarray
			return binarySearch(arr, mid + 1, r, x);
		}

		// We reach here when element is not present
		// in array
		return -1;
	}

	// Driver method to test above
	public static void main(String args[])
	{
		BinarySearch ob = new BinarySearch();
		int arr[] = { 2, 3, 4, 10, 40 };
		int n = arr.length;
		int x = 10;
		int result = ob.binarySearch(arr, 0, n - 1, x);
		if (result == -1)
			System.out.println("Element not present");
		else
			System.out.println("Element found at index " + result);
	}
}
/* This code is contributed by Rajat Mishra */

Performance
Whether to use a recursive or an iterative approach for writing the algorithm is mostly a matter of personal preference. But still here are a few points we should be aware of:

1. Recursion can be slower due to the overhead of maintaining a stack and usually takes up more memory
2. Recursion is not stack-friendly. It may cause StackOverflowException when processing big data sets
3. Recursion adds clarity to the code as it makes it shorter in comparison to the iterative approach

Ideally, a binary search will perform less number of comparisons in contrast to a linear search for large values of n. For smaller values of n, the linear search could perform better than a binary search.

One should know that this analysis is theoretical and might vary depending on the context.

Also, the binary search algorithm needs a sorted data set which has its costs too. If we use a merge sort algorithm for sorting the data, an additional complexity of n log n is added to our code.

