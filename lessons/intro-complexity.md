---
path: "/intro-complexity"
title: "Complexity Analysis"
order: "7A"
section: "Space & Time Complexity"
description: "learn about time and space complexity for various algorithms"
icon: "flask"
---

Ok so till now we have just learn some algorithm and tried to solve some problems based on them. Now an important question arise while programming is: How efficient is an algorithm or piece of code? How much time and space does it take to run?

## *What is Complexity analysis*

It's really important to understand the real-world significance of **algorithms and its properties** because using different ideas one can design many algorithms for computing a solution to a given problem. Key important questions in algorithms are :

- How do we design **good** algorithms?
- How do we know that our algorithm is **efficient**?
- How to efficiently implement algorithms in a programming language?

> **Interviewer** *often checks your ideas and coding skills by asking you to write a code giving restrictions on its* **time or space complexities.**

## *Why to do Complexity analysis*

We already know there are tools to measure how fast a program runs. There are programs called *profilers* which measure running time in milliseconds and can help us optimize our code by spotting bottlenecks. While this is a useful tool, it isn't really relevant to algorithm complexity. Algorithm complexity is something designed to compare two algorithms at the idea level — ignoring low-level details such as the implementation programming language, the hardware the algorithm runs on, or the instruction set of the given CPU. We want to compare algorithms in terms of just what they are: Ideas of how something is computed. Counting milliseconds won't help us in that. It's quite possible that a bad algorithm written in a low-level programming language such as [assembly](http://en.wikipedia.org/wiki/Assembly_language) runs much quicker than a good algorithm written in a high-level programming language such as [Python](http://www.python.org/) or [Ruby](http://www.ruby-lang.org/en/).



### *Memory*

Memory in a computer is just a sequential set of "buckets" that can contain numbers, characters, or Boolean values. By using several buckets in a row, we get arrays. By giving names to a set of contiguous buckets, we get a "structure". But at its core, a computer memory is a very simple list of numbers. Everything else must be built up upon this.

1. Memory is laid out in sequential order basically from 0 on up (one byte at a time). Each position in memory has a number (called its address!).

2. The compiler (or interpreter) associates your variable names with memory addresses.

3. In some languages like C, you can actually ask the computer for the address of a variable in memory. In C this is done using the ampersand &

   In many languages, the actual address is hidden from you and is of little use to you, as all the access methods "abstract" the details of the computer hardware away, allowing the programmer to concentrate on the algorithm, and not the details.

4. Arrays variables simply contain the address of the first element of the array. Arrays are zero based so the address simply becomes the base address plus the index.

5. Structure variables simply contain the address of the first element of the structure, and each "named" field of the structure forms an offset from the first bucket. The computer keeps track of this offset so that the programmer can use symbolic names instead of numbers.

6. Memory buckets are 8 bits long (or one byte). A character (char) is one byte. An integer is (usually) four bytes. A float is four bytes. A double is 8 bytes.



### **Performance**

It conclude on the basis of time/memory/disk/etc. usage when we run the code. It depends on the machine, compiler, OS, etc as well as the code itself.

### **Complexity**

We are typically interested in the execution time of large instances of a problem, e.g., when 𝑛 → ∞, (asymptotic complexity). _for this we introduce the big O notation._

**Big O notation** is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows. In analytic number theory, big O notation is often used to express a bound on the difference between an arithmetical function and a better understood approximation. Big O notation characterizes functions according to their growth rates: different functions with the same growth rate may be represented using the same O notation. The letter O is used because the growth rate of a function is also referred to as the **order of the function**. A description of a function in terms of big O notation usually only provides an upper bound on the growth rate of the function.


| Function | common name  |
| :------: | :----------: |
|    N!    |  factorial   |
|   2^n    | exponential  |
|    n³    |    cubic     |
|    n²    |  quadratic   |
| n log n  | quasi-linear |
|    n     |    linear    |
|  log n   | logarithmic  |
|    1     |   constant   |



## Different types of complexity

There are several different types of complexities , we will only be looking into the more popular and the most commonly used ones.

### Constant Time Complexity: O(1)

Complexity **O(1)** is the best, it’s not always achievable, but if it is, then your code is *independent* of the input size.

Other operations that have complexity **O(1)** are the print function, simple arithmetic — addition, subtraction, and multiplication and division in the case of integers.

### Linear Time Complexity: O(n)

When time complexity grows in direct proportion to the size of the input, you are facing Linear Time Complexity, or O(n). Algorithms with this time complexity will process the input (n) in “n” number of operations. This means that as the input grows, the algorithm takes proportionally longer to complete.

Linear running time algorithms are very common, and they relate to the fact that the algorithm visits every element from the input.

### Logarithmic Time Complexity: O(log n)

Algorithms with this complexity make computation amazingly fast. An algorithm is said to run in logarithmic time if its time execution is proportional to the logarithm of the input size. This means that instead of increasing the time it takes to perform each subsequent step, the time is decreased at a magnitude that is inversely proportional to the input “n”.

### Quadratic Time Complexity: O(n²)

In this type of algorithms, the time it takes to run grows directly proportional to the square of the size of the input (like linear, but squared).

Nested **For Loops** run on quadratic time, because you’re running a linear operation within another linear operation, or *n* which equals *n².*

If you face these types of algorithms, you’ll either need a lot of resources and time, or you’ll need to come up with a better algorithm.

###  O(n log(n))

If we have a code or an algorithm with complexity **O(log(n))** that gets repeated multiple times, then it becomes **O(n log(n))**. Famous examples of this are __merge sort and quicksort__.



# Big O rules

Going through the above examples, you might have figured out some rules for calculating Big O, but let’s sum them up:

1. Reading, writing an item in a list or a dictionary has **O(1)**.
2. Going through an iterable is **O(n)**.
3. Nested loops lead to **O(n²)** complexity.
4. Any divide and concur approach or loops handling binary numbers have **O(n log(n))** complexity.
5. We sum up the complexity of sequential loops and multiply the complexity of nested loops.
