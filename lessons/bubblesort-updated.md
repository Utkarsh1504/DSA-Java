---
path: "/bubblesort"
title: "Bubble Sort"
order: "5C"
section: "Searching & Sorting"
description: "learn Searching n sorting algorithms"
---

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
The idea is to traverse from the starting element to the last one by comparing the adjacent elements and swapping them if they are not in the specific order.

It is called Bubble sort because, at the end of each iteration, the largest number sits at the bottom of the array just like the heaviest bubble settles down in a vessel. The swapping of elements continues until the array is sorted and no more swapping is required.

We can also sort the elements in the descending order in which the smallest element goes at the end of the array in each iteration. This can only happen if we inverse the weight of the element.

## Following is the implementations of Bubble Sort. 

```java
// Java program for implementation of Bubble Sort
class BubbleSort
{
    void bubbleSort(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n-1; i++)
            for (int j = 0; j < n-i-1; j++)
                if (arr[j] > arr[j+1])
                {
                    // swap arr[j+1] and arr[j]
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
    }
 
    /* Prints the array */
    void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i] + " ");
        System.out.println();
    }
 
    // Driver method to test above
    public static void main(String args[])
    {
        BubbleSort ob = new BubbleSort();
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        ob.bubbleSort(arr);
        System.out.println("Sorted array");
        ob.printArray(arr);
    }
}
```
```java
Output: 

Sorted array:
11 12 22 25 34 64 90

```
Optimized Implementation: 
The above function always runs O(n^2) time even if the array is sorted. It can be optimized by stopping the algorithm if inner loop didn’t cause any swap. 
 
## Optimized java implementation of Bubble sort

```java

import java.io.*;
 
class Bubble
{
    // An optimized version of Bubble Sort
    static void bubbleSort(int arr[], int n)
    {
        int i, j, temp;
        boolean swapped;
        for (i = 0; i < n - 1; i++)
        {
            swapped = false;
            for (j = 0; j < n - i - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    // swap arr[j] and arr[j+1]
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
 
            // IF no two elements were
            // swapped by inner loop, then break
            if (swapped == false)
                break;
        }
    }
 
    // Function to print an array
    static void printArray(int arr[], int size)
    {
        int i;
        for (i = 0; i < size; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }
 
    // Driver program
    public static void main(String args[])
    {
        int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
        int n = arr.length;
        bubbleSort(arr, n);
        System.out.println("Sorted array: ");
        printArray(arr, n);
    }
}
 
 
Output: 

Sorted array:
11 12 22 25 34 64 90
 
```
 

## Some important points about the Bubble sort are:


1. The Worst and Average case complexity of Bubble Sort is O(n2), where n denotes the total number of elements in the array.

2. The Best case complexity of Bubble sort is O(n), where n is the number of elements in the array. This case can happen only when the given array is already sorted.

3. The Auxiliary space consumed by the bubble sort algorithm is O(1)

4. The Bubble Sort is a type of in Place Sorting.

5. Bubble sort is a Stable Algorithm.

- Note: We can optimize the algorithm of Bubble sort and reduce our complexity to the order of “n” (O(n)) by adding some extra lines of code to the original code.

- If the user entered a sorted array, so, rather than applying for all the passes we can just apply for a single pass and check whether any swap occurs during the whole pass.

- If there are no swaps occurring in the whole pass then we stop the algorithm and return the original array. By adding this piece of code we can ensure to enhance our performance of the algorithm and also reduce the time complexity.

## Use of Java Bubble Sort

As the Bubble Sort technique is the simplest sorting technique, it is often used in many areas of software technologies.

For example, the Bubble Sort is very useful in the field of Computer graphics where it can be used to detect a very small error for example swap between two elements and fix the error with a linear complexity of 2n, where n is the number of elements in the array.