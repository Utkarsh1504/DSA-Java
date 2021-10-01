---
path: "/insertion"
title: "Insertion Sort"
order: "5E"
section: "Searching & Sorting"
description: "learn Sorting algorithms"
---
Insertion sort is the sorting mechanism where the sorted array is built having one item at a time. The array elements are compared with each other sequentially and then arranged simultaneously in some particular order.

## Explanation

 the first element of array forms the sorted subarray while the rest create the unsorted subarray from which we choose an element one by one and "insert" the same in the sorted subarray. The same procedure is followed until we reach the end of the array.

In each iteration, we extend the sorted subarray while shrinking the unsorted subarray. The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array).

* If it is the first element, it is already sorted. return 1;
* Pick next element
* Compare with all elements in the sorted sub-list
* Shift all the elements in the sorted sub-list that is greater than the value to be sorted
* Insert the value
* Repeat until list is sorted

### pseudocode
```pseudocode
procedure insertionSort( A : array of items )
   int holePosition
   int valueToInsert
	
   for i = 1 to length(A) inclusive do:
	
      /* select value to be inserted */
      valueToInsert = A[i]
      holePosition = i
      
      /*locate hole position for the element to be inserted */
		
      while holePosition > 0 and A[holePosition-1] > valueToInsert do:
         A[holePosition] = A[holePosition-1]
         holePosition = holePosition -1
      end while
		
      /* insert the number at hole position */
      A[holePosition] = valueToInsert
      
   end for
	
end procedure
```



## Complexity analysis

Insertion sort runs in *O*(*n*) time in its best case and runs in *O*(*n*²) in its worst and average cases.

### Best case

Insertion sort performs two operations: it scans through the list, comparing each pair of elements, and it swaps elements if they are out of order. Each operation contributes to the running time of the algorithm. If the input array is already in sorted order, insertion sort compares *O*(*n*) elements and performs no swaps. Therefore, in the best case, insertion sort runs in O(*n*) time.

### Worst case

The worst case for insertion sort will occur when the input list is in decreasing order. To insert the last element, we need at most *n*−1 comparisons and at most *n*−1 swaps. To insert the second to last element, we need at most *n*−2 comparisons and at most *n*−2 swaps, and so on. The number of operations needed to perform insertion sort is therefore: 2 × (1+2+⋯+*n* −2+*n* −1) . This is in the order of sum of first n-1 numbers which is quadratic in nature. therefore, in the worst case, insertion sort runs in O(*n*²) time.



> The average case and the worst case have the same time complexity. Try to think why is this happening.



### Code Implementation 

```java

// Java program for implementation of Insertion Sort
class InsertionSort {
    /*Function to sort array using insertion sort*/
    void insSort(int arr[])
    {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;
 
            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
 
    /* A utility function to print array of size n*/
    static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n; ++i)
            System.out.print(arr[i] + " ");
 
        System.out.println();
    }
 
    public static void main(String args[])
    {
        int arr[] = { 1,5,4,2,3 };
 
        InsertionSort ob = new InsertionSort();
        ob.insSort(arr);
 
        printArray(arr);
    }
} /* This code is contributed by Abhijit Mishra. */
```

>
>
>Explanation of the example  arr [] = {1 , 5 , 4 , 2 , 3 }
>
>Step 1 : No element on the left side of 1. so, no change in position.
>
>Step 2 : As 1 < 5. so no change in position.
>
>Step 3 : As 5 > 4. 4 and 5 will swap. now 1 < 4. so no change in postion.
>
>Step 4 : As 5 > 2. 2 and 5 will swap. now 4 > 2 so 2 and 4 will swap. now 1 < 2, so no change in position.
>
>Step 5: As  5 > 3. 3 and 5 will swap. now 4 > 3 so 3 and 4 will swap. now 2 < 3, so no change in position. 

Now our array is sorted.

you can visualize this at [hackerearth](https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/) 

### Advantages



- Simple and easy to understand implementation
- Efficient for small data
- If the input list is sorted beforehand (partially) then insertions sort takes `**O(n+d)**` where d is the number of inversions
- Chosen over bubble sort and selection sort, although all have worst case time complexity as `**O(n^2)**`
- Maintains relative order of the input data in case of two equal values (stable)
- It requires only a constant amount `**O(1)**` of additional memory space (in-place Algorithm)



### Applications



- It could be used in sorting small lists.
- It could be used in sorting "almost sorted" lists.
- It could be used to sort smaller sub problem in Quick Sort.



