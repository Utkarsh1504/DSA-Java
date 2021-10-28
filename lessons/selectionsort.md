---
path: "/selectionsort"
title: "Selection Sort"
order: "5D"
section: "Searching & Sorting"
description: "learn Sorting algorithms"
---

Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.

The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.

The average and worst-case complexity of selection sort is `O(n^2)`, where n is the number of items. Due to this, it is not suitable for large data sets.

Selection sort is generally used when:
- A small array is to be sorted
- Swapping cost doesn't matter
- It is compulsory to check all elements


## Selection Sort Algorithm

```
selectionSort(array, size)
  repeat (size - 1) times
  set the first unsorted element as the minimum
  for each of the unsorted elements
    if element < currentMinimum
      set element as new minimum
  swap minimum with first unsorted position
end selectionSort
```

## Example for better understanding

Let the elements of array are -
```
12 29 25 8 32 17 40
```

Now, for the first position in the sorted array, the entire array is to be scanned sequentially.At present, 12 is stored at the first position, after searching the entire array, it is found that 8 is the smallest value.
```
12 29 25 8 32 17 40
```
So, swap 12 with 8. After the first iteration, 8 will appear at the first position in the sorted array.
```
8 29 25 12 32 17 40
```
For the second position, where 29 is stored presently, we again sequentially scan the rest of the items of unsorted array. After scanning, we find that 12 is the second lowest element in the array that should be appeared at second position.
```
8 29 25 12 32 17 40
```
Now, swap 29 with 12. After the second iteration, 12 will appear at the second position in the sorted array. So, after two iterations, the two smallest values are placed at the beginning in a sorted way.
```
8 12 25 29 32 17 40
```
The same process is applied to the rest of the array elements. So, the entire sorting process is shown below:
```
8 12 25 29 32 12 40
```

```
8 12 17 29 32 25 40
```

```
8 12 17 25 32 29 40
```

```
8 12 17 25 29 32 40
```

Now, the array is completely sorted.

## Implementation of Selection Sort

```Java
// Java program for implementation of Selection Sort
class SelectionSort
{
    void sort(int arr[])
    {
        int n = arr.length;
 
        // One by one move boundary of unsorted subarray
        for (int i = 0; i < n-1; i++)
        {
            // Find the minimum element in unsorted array
            int min_idx = i;
            for (int j = i+1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;
 
            // Swap the found minimum element with the first
            // element
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
 
    // Prints the array
    void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i]+" ");
        System.out.println();
    }
 
    // Driver code to test above
    public static void main(String args[])
    {
        SelectionSort ob = new SelectionSort();
        int arr[] = {64,25,12,22,11};
        ob.sort(arr);
        System.out.println("Sorted array");
        ob.printArray(arr);
    }
}
```
### Output
```
Sorted array 
11 12 22 25 64
```

## Time Complexity and Space Complexity

### Time Complexity

- **Best Case Complexity:** It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of selection sort is `O(n^2)`.
- **Average Case Complexity:** It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of selection sort is `O(n^2)`.
- **Worst Case Complexity:** It occurs when the array elements are required to be sorted in reverse order. That means suppose you have to sort the array elements in ascending order, but its elements are in descending order. The worst-case time complexity of selection sort is `O(n^2)`.


### Space Complexity
- **Space Complexity:** The Space complexity of selection sort is `O(1)`. It is because, in selection sort, an extra variable is required for swapping.

## The Application of Selection Sort

The selection sort is used when:
- a small list is to be sorted
- cost of swapping does not matter
- checking of all the elements is compulsory
- cost of writing to a memory matters like in flash memory 

## Comparison to other sorting algorithms
- **Selection Sort vs QuickSort:** Quicksort, the most widely used sorting algorithm, is contrasted with the less efficient selection sort. Quicksort starts by picking an element, called a pivot , from the list. Selection sort first finds the minimum element in the list.


- **Selection Sort vs Bubble Sort:** The main difference between bubble sort and selection sort is that the bubble sort operates by repeatedly swapping the adjacent elements if they are in the wrong order while the selection sort sorts an array by repeatedly finding the minimum element from the unsorted part and placing that at the beginning of the array.


- **Selection Sort vs Merge Sort:** Selection sort may be faster than mergesort on small input arrays because it's a simpler algorithm with lower constant factors than the ones hidden by mergesort. If you're sorting, say, arrays of 16 or so elements, then selection sort might be faster than mergesort.
