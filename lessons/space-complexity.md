---
path: "/space-complexity"
title: "Space Complexity"
order: "7C"
section: "Space & Time Complexity"
description: "learn about time and space complexity for various algorithms"
---

Now that we have learned about the 'time' aspect of performance analysis of an algorithm, let's move on to memory aspect of the same.

***Space complexity of an algorithm is basically the amount of memory it needs to run to completion, ie, to execute and produce the result.***

Calculation of space complexity used to hold much more significance in early days of computing than it does now. This is because most machines today have large memories and the user does not need to worry about running out of memory for running a program or two. But it is a crucial estimate where the physical memory is limited or closely monitored.

*Above all, it’s necessary to mention that space complexity depends on a variety of things such as the programming language, the compiler, or even the machine running the algorithm.*

## Memory Usage while Execution
While executing, an algorithm uses memory space for three reasons:
- **Instruction Space**
-- It's the amount of memory used to save the compiled version of instructions.

- **Environmental Stack**
-- Sometimes an algorithm(function) may be called inside another algorithm(function). In such a situation, the current variables are pushed onto the system stack, where they wait for further execution and then the call to the inside algorithm(function) is made.\
Ex.  If a function A() calls function B() inside it, then all the variables of the function A() will get stored on the system stack temporarily, while the function B() is called and executed inside the function A().

- **Data Space**
-- Amount of space used by the variables and constants.



So in general for any algorithm, the memory may be used for the following: - `Variables (Data Space)`, `Program Instruction (Instruction Space)` and  `Execution (Environmental Space)`.
But while calculating the Space Complexity of any algorithm, we usually consider only Data Space and we neglect the Instruction Space and Environmental Stack.

## Calculation of Space Complexity

An algorithm's space can be categorized into 2 parts:\
**1) Fixed Part** - It is independent of the characteristics of input and output.\
It includes instruction(code) space, space for simple variables, fixed-size component variables and constants.\
**2) Variable Part** - It depends on instance characteristics.\
It consists of the space needed by component variables whose size is dependent on the particular problem instance being solved, the space needed by referenced variables, and the recursion stack space.

Sometimes, ***Auxiliary Space*** is confused with Space Complexity. The Auxiliary Space is the extra space or the temporary space used by the algorithm during it's execution.

`Space Complexity = Auxiliary Space + Input space`

> Thus, space requirement S(M) of any algorithm M is:
> S(M) = c + Sm (Instance characteristics), where c is constant


While analyzing space complexity, we primarily concentrate on estimating Sm.
Consider the following algorithm:

```java
public int sum(int a, int b) {
    return a + b;
}
```
In this particular method, three variables are used and allocated in memory: 
1. The first `int` argument, a
2. The second `int` argument, b
3. The returned sum result which is also an `int` like a and b

In Java, a single integer variable occupies `4` bytes of memory. In this example, we have three integer variables. Therefore, this algorithm always takes 12 bytes of memory to complete (3*4 bytes).

> We can clearly see that the space complexity is constant, so, it can be expressed in big-O notation as O(1).

Now let us see another example - 
```java
public int sumArray(int[] array) {
    int size = array.length;
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += array[i];
    }
    return sum;
}
```
Again, let’s list all variables present in the above code:
1. Array – the function’s only argument – the space taken by the array is equal to 4n bytes where n is the length of the array
2. The `int` variable, size
3. The `int` variable, sum
4. The `int` iterator, i

The total space needed for this algorithm to complete is 4n + 4 + 4 + 4 (bytes). The highest order is of n in this equation. Thus, the space complexity of that code snippet is O(n).
When the program consists of loops (In case of Iterative algorithms), it will have linear space complexity or O(n).

> While dealing with operations on data structures, we can say that space complexity depends on size of the data structure. Ex, if an array stores N elements, its space complexity is O(N). A program with an array of N arrays will have space complexity O(N^2) and so on.

Now, the space complexity analysis also takes into account the size of recursion stack in case of recursive algorithms. 
Consider the code below - 
```java
Algorithm fact(n)
{
  if (n<=0) 
    return 1;
  else  
    return n * (n - 1);
}
```

In this case there are 3 statements ( an `if` statement & 2`return` statements). The depth of recursion is *n + 1*. Thus the recursion stack space needed is >=3(n+1). So we can say, space complexity is O(n) i.e. linear.

## Space Complexities of Common Algorithms
The space complexities of various algorithms is given below - 
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
