---
path: "/practise-question"
title: "Practise Questions"
order: "5F"
section: "Searching & Sorting"
description: "learn Searching & sorting algorithms"
---

**Q1) Move All Zeros to End of an Array**<br>
You have been given a random integer array of size N. You have been required to push all the zeros that are present in the array to the end of it such that the relative order of the non-zero elements should be maintained.

```java
Sample Input/Output
​Input:  arr[]={3,0,1,5,0,5}
Output: arr[]={3,1,5,5,0,0}
```

## Approach

Before we discuss the approach for this question let’s see what exactly the question requires us to do. It seems that we have to push all the 0s in the array towards the end of the array. It can also be looked at as pushing all the non-zero elements in the array towards the beginning of the array.<br>
First, traverse the whole array and initialize a variable count whose value should be equal to zero. Now, check each element of the array whether it is equal to zero or not. If the element is not equal to zero,put that element at the count position of the array(arr[count]) and increment the value of count by one.<br>
Now, after traversing the whole array fill the remaining positions of the array with zeroes.

## Program

```java
package main;
import java.util.*;
public class Main {
	public static void pushZerosToEnd(int[] arr, int n) {
        int count=0;
        for(int i=0;i<arr.length;i++)
        {
            if(arr[i]!=0)
            {
                arr[count++]=arr[i];
            }
        }
        for(int j=count;j<n;j++)
        {
            arr[count++]=0;
        }}
	public static void main(String[] args) {
		int arr[]= {3,0,5,4,0,2,2};
		pushZerosToEnd(arr,7);
		for(int i=0;i<7;i++)
		{
	          System.out.print(arr[i]);
		}}
}
```

```java
Output
3542200
```

## Explanation

- Initialize a variable count with a value equal to zero.<br>
- Make a function named pushZeroToEnd and input an array.<br>
- Traverse through the array and check each element whether it is equal to zero or not.<br>
- If the element is not equal to zero, put the element at the countth position of the array.<br>
- Increase the value of count by 1.<br>
- At last, fill the remaining positions of the array with 0.<br>

## Time Complexity

Since we will be traversing the whole array twice therefore the time complexity of algorithm would be:

- **Time complexity of first loop O(N) + Time complexity of second loop O(N) = O(N)**,
  where n is number of elements in input array.
