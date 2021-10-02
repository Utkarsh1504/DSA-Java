---
path: "/space-complexity"
title: "Space Complexity"
order: "7C"
section: "Space & Time Complexity"
description: "learn about time and space complexity for various algorithms"
---

Now that we have learned about 'time' aspect of performance analysis of an algorithm, let's move on to memory aspect of the same.

***Space complexity of an algorithm is basically the amount of memory it needs to run to completion.***

It is a way to establish approximate relationship between size of input data and primary memory used by the algorithm to produce the expected result.

Calculation of space complexity used to hold much more significance in early days of computing than it does now. This is because most machines today have large memories and the user does not need to worry about running out of memory for running a program or two. But it is a crucial estimate where the physical memory is limited or closely monitored.

### **Calculation of Space Complexity**

An algorithm's space can be categorized into 2 parts:\
**1)Fixed Part** which is independent of characteristics of input and output.\
It includes instruction(code) space, space for simple variables, fixed-size component variables and constants.\
**2)Variable Part** which depends on instance characteristics.\
It consists of the space needed by component variables whose size is dependent on the particular problem instance being solved, the space needed by referenced variables, and the recursion stack space.

Thus, space requirement S(P) of any algorithm P is:
> S(P) = c + Sp (Instance characteristics), where c is constant

While analyzing space complexity, we primarily concentrate on estimating Sp.
Consider following algorithm:
```
Algorithm Calc(a, b, c)
{
  return a + b - c*a + b/c - a;
}
```
Here, problem instance depends only upon *a*,*b* and *c* which can be considered constant(fixed part). Thus ***Sp=0***. So, the space required by *Calc* algorithm is constant. In other words, complexity is O(1).

When the program consists of loops (In case of Iterative algorithms), it will have linear space complexity or O(n).
While dealing with operations on data structures, we can say that space complexity depends on size of the data structure. For example, if an array stores N elements, its space complexity is O(n). A program with an array of N arrays will have space complexity O(n^2) and so on.

Space complexity analysis also takes into account the size of recursion stack in case of recursive algorithms. for example,
```
Algorithm Fact(n)
{
  if (n<=0) return 1;
  else  return n * (n - 1);
}
```
In this case there are 3 statements (1 if & 2 return statements). The depth of recursion is *n + 1*. Thus the recursion stack space needed is >=3(n+1). So we can say, space complexity is O(n) i.e. linear.

***NOTE: Space complexity might differ from machine to machine based on the programming language, the compiler etc.***


### **Space Complexities of Common Algorithms**
| Algorithm | Space Complexity |
| --------- | ---------------- |
| Linear Search | O(1) |
| Binary Search | O(1) |
| Bubble Sort	|	O(1) |
| Insertion Sort	|	O(1) |
| Selection Sort	|	O(1) |
| Heapsort	|	O(1) |
| Shell Sort	|	O(1) |
| Quicksort | O(log(n)) |
| Mergesort	|	O(n) |
| Timsort	|	O(n) |
| Tree Sort	|	O(n) |
| Bucket Sort |		O(n) |
| Radix Sort	|	O(n+k) |
| Counting Sort	|	O(k) |
