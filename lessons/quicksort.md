---
path: "/quicksort"
title: "Quick Sort"
order: "8F"
section: "Recursion"
description: "learn Recursion from scratch"
---

Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.
Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(n^2), respectively.


Quicksort picks an element as pivot, and then it partitions the given array around the picked pivot element. In quick sort, a large array is divided into two arrays in which one holds values that are smaller than the specified value (Pivot), and another array holds the values that are greater than the pivot.


After that, left and right sub-arrays are also partitioned using the same approach. It will continue until the single element remains in the sub-array.

## Choosing the Pivot
Picking a good pivot is necessary for the fast implementation of quicksort. However, it is typical to determine a good pivot. Some of the ways of choosing a pivot are as follows:

- Pivot can be random, i.e. select the random pivot from the given array.
- Pivot can either be the rightmost element of the leftmost element of the given array.
- Select median as the pivot element.
- Algorithm

## Quick Sort Algorithm

### Algorithm:
```Java
QUICKSORT (array A, start, end)     
{  
if (start < end)     
 {  
 p = partition(A, start, end)  
 QUICKSORT (A, start, p - 1)    
 QUICKSORT (A, p + 1, end)    
 }   
}  
```

## Example for better understanding

Let the elements of array are -

```
24 9 29 14 19 27
```

So, in this case, a[left] = 24, a[right] = 27 and a[pivot] = 24.
Since, pivot is at left, so algorithm starts from right and move towards left.
So, a[pivot] < a[right], so algorithm moves forward one position towards left.
Also after this, a[left] = 24, a[right] = 19, and a[pivot] = 24.
Because, a[pivot] > a[right], so, algorithm will swap a[pivot] with a[right], and pivot moves to right.
```
19 9 29 14 24 27
```

Now, a[left] = 19, a[right] = 24, and a[pivot] = 24. Since, pivot is at right, so algorithm starts from left and moves to right.
As a[pivot] > a[left], so algorithm moves one position to right .So, a[left] = 9, a[right] = 24, and a[pivot] = 24. As a[pivot] > a[left], so algorithm moves one position to right.
```
19 9 24 14 29 27
```

Since, pivot is at left, so algorithm starts from right, and move to left. Now, a[left] = 24, a[right] = 29, and a[pivot] = 24. As a[pivot] < a[right], so algorithm moves one position to left.So, a[pivot] = 24, a[left] = 24, and a[right] = 14. As a[pivot] > a[right]. so, swap a[pivot] and a[right], now pivot is at right.
```
19 9 14 24 29 27
```

Now, a[pivot] = 24, a[left] = 14, and a[right] = 24. Pivot is at right, so the algorithm starts from left and move to right. a[pivot] = 24, a[left] = 24, and a[right] = 24. So, pivot, left and right are pointing the same element. It represents the termination of procedure.Element 24, which is the pivot element is placed at its exact position.
Elements that are right side of element 24 are greater than it, and the elements that are left side of element 24 are smaller than it.
Also, in a similar manner, quick sort algorithm is separately applied to the left and right sub-arrays. After sorting gets done, the array will be:
```
9 14 19 24 27 29
```

## Implementation of Quick Sort

```Java
// Java implementation of QuickSort
import java.io.*;

class QuickSort{
	
// A utility function to swap two elements
static void swap(int[] arr, int i, int j)
{
	int temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

static int partition(int[] arr, int low, int high)
{
	
	// pivot
	int pivot = arr[high];
	
	// Index of smaller element and
	// indicates the right position
	// of pivot found so far
	int i = (low - 1);

	for(int j = low; j <= high - 1; j++)
	{
		
		// If current element is smaller
		// than the pivot
		if (arr[j] < pivot)
		{
			
			// Increment index of
			// smaller element
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return (i + 1);
}

static void quickSort(int[] arr, int low, int high)
{
	if (low < high)
	{
		
		// pi is partitioning index, arr[p]
		// is now at right place
		int pi = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

// Function to print an array
static void printArray(int[] arr, int size)
{
	for(int i = 0; i < size; i++)
		System.out.print(arr[i] + " ");
		
	System.out.println();
}

// Driver Code
public static void main(String[] args)
{
	int[] arr = { 10, 7, 8, 9, 1, 5 };
	int n = arr.length;
	
	quickSort(arr, 0, n - 1);
	System.out.println("Sorted array: ");
	printArray(arr, n);
}
}

```

### Output

```
Sorted array: 
1 5 7 8 9 10 
````

## Time Complexity and Space Complexity

### Time Complexity

- **Best Case Complexity:** In Quicksort, the best-case occurs when the pivot element is the middle element or near to the middle element. The best-case time complexity of quicksort is O(n*logn).
- **Average Case Complexity:** It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of quicksort is O(n*logn).
- **Worst Case Complexity:** In quick sort, worst case occurs when the pivot element is either greatest or smallest element. Suppose, if the pivot element is always the last element of the array, the worst case would occur when the given array is sorted already in ascending or descending order. The worst-case time complexity of quicksort is O(n2).

### Space Complexity
- **Space Complexity:** The space complexity of quicksort is O(n*logn).

## The Uses and Real-time application of Quicksort
- Commercial Computing is used in various government and private organizations for the purpose of sorting various data like sorting files by name/date/price, sorting of students by their roll no., sorting of account profile by given id, etc.
- The sorting algorithm is used for information searching and as Quicksort is the fastest algorithm so it is widely used as a better way of searching.
- It is used everywhere where a stable sort is not needed.
- Quicksort is a cache-friendly algorithm as it has a good locality of reference when used for arrays.
- It is tail -recursive and hence all the call optimization can be done.
- It is an in-place sort that does not require any extra storage memory.
- It is used in operational research and event-driven simulation.
- Numerical computations and in scientific research, for accuracy in calculations most of the efficiently developed algorithm uses priority queue and quick sort is used for sorting.

## 3 way Quick Sort
The idea of 3 way Quick Sort is to process all occurrences of the pivot and is based on Dutch National Flag algorithm. 

The three-way quicksort is similar, but there are three sections. array arr[1 to n] is divided into three parts.

- arr[1 to i]
- arr[i + 1, j]
- arr[j + 1, n]

## Implementaion of 3 way Quick Sort

```Java
public class QuickSort3 {
   
    public void sort(int[] A) {
        if (A == null || A.length <= 1) return;
        quicksort(A, 0, A.length - 1);
    }

    private void quicksort(int[] A, int start, int end) {
        if (start >= end)   return;

        // choose the middle element as the pivot
        int mid = start + (end - start) / 2;
        int pivot = A[mid];

        // move pivot to the front
        swap(A, start, mid);

        // lt: index to store next element < pivot
        // gt: index to store next element > pivot
        int lt = start, gt = end, i = start + 1;
        // 1: i <= gt not i <= end
        while (i <= gt) {
            // move elements < pivot to the front
            if (A[i] < pivot)    swap(A, i++, lt++);
            // NOTE: don't move i, as we don't know whether value of the element
            // from the end that got swap to current i and we need to check it
            else if (A[i] > pivot)    swap(A, i, gt--);
            // keep elements == pivot on the same positition
            else    i++;
        }
        quicksort(A, start, lt - 1);
        quicksort(A, gt + 1, end);
    }

    private void swap(int[] A, int i, int j) {
        int temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }
}
```


