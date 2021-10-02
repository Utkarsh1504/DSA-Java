---
path: "/cyclesort"
title: "Cyclic Sort"
order: "5H"
section: "Searching & Sorting"
description: "learn Sorting algorithms"
---

Cycle sort is a comparison sorting algorithm which forces array to be factored into the number of cycles where each of them can be rotated to produce a sorted array. It is theoretically optimal in the sense that it reduces the number of writes to the original array.

It is an in-place and unstable sorting algorithm.

It is optimal in terms of number of memory writes. It minimizes the number of memory writes to sort. Each value is either written zero times, if it’s already in its correct position, or written one time to its correct position.

## Algorithm

Consider an array of `n` distinct elements. An element `a` is given, index of `a` can be calculated by counting the number of elements that are smaller than `a`.

1.  If the element is found to be at its correct position, simply leave it as it is.
2.  Otherwise, find the correct position of `a` by counting the total number of elements that are less than `a` . where it must be present in the sorted array. The other element `b` which is replaced is to be moved to its correct position. This process continues until we got an element at the original position of `a`.

## Code Implementation

```java
//Java program for implementation of Cyclic Sort
import java.util.Arrays;

public class CyclicSort {
    public static void main(String[] args) {
        int[] arr = {5, 4, 3, 2, 1};
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }


     //Function to sort array using Cyclic sort
   public static void sort(int[] arr) {
        int i = 0;
        while (i < arr.length) {
            int correct = arr[i] - 1;
            if (arr[i] != arr[correct]) {
                swap(arr, i , correct);
            } else {
                i++;
            }
        }
    }
   //Function to swap two elements
   public static void swap(int[] arr, int first, int second) {
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

}
```

### Explanation of the example arr [] = {5, 4, 3, 2, 1}

Step 1: Count the number of elements less than 5, there are 4 elements less than 5 . move `5` to 5th place in the array ( Index = 4 ).

Step 2: So, 5 will take the position of 1 and then count the number of elements less than 1, there are no elements less than 1 .
move `1` to 1st place in the array ( Index = 0 ).

Step 3: The original position of 5 is acquired and one cycle is completed

Step 5: Repeat same for all elements.

## Complexity analysis

The time complexity of the cyclic sort is **O(n)**. The while loop, in the worst case, can iterate a maximum of `2n-1` times. As you can see, we are not incrementing the index `i` when swapping the numbers, this will result in more than `n` iterations of the loop, but in the worst-case scenario, the while loop will swap a total of `n-1` numbers and once a number is at its correct index, we will move on to the next number by incrementing `i`. So overall, our algorithm will take **O(n) + O(n-1)** or we can say **O(2n-1)** which is asymptotically equivalent to **O(n)**.
