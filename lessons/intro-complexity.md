---
path: "/intro-complexity"
title: "Intro to Complexity Analysis"
order: "9A"
section: "Space & Time Complexity"
description: "learn about time and space complexity for various algorithms"
icon: "flask"
---

Ok so till now we have just learn some algorithm and tried to solve some problems based on them. Now an important question arise while programming is: How efficient is an algorithm or piece of code? How much time and space does it take to run?

Now what do i mean with efficiency? It basically include the following:

- memory usage
- time(CPU) usage
- network usage
- disk usage

All are important but we are mostly concerned about CPU time. There is two terms in which most of the people get confused:

### **Performance**

It conclude on the basis of time/memory/disk/etc. usage when we run the code. It depends on the machine, compiler, OS, etc as well as the code itself.

### **Complexity**

how do the resource requirements of a program or algorithm scale,  
i.e. what happens as the size of the problem being solved by the code gets larger. Complexity affects performance but not vice-­‐versa. The time required by a function/method is proportional to the number of "basic operations" that it performs.

Here are some examples of basic operations:

- one arithmetic operation (e.g. a+b / a\*b)
- one assignment (e.g. int x = 5)
- one condition/test (e.g. x == 0)
- one input read (e.g. reading a variable from console)
- one output write (e.g. writing a variable on console)

Some functions/methods perform the same number of operations every time they are called. For example, the size function/method of the string class always performs just one operation: return number of Items; the number of operations is independent of the size of the string. We say that functions/methods like this (that always perform a fixed number of basic operations) require constant time.

Other functions/methods may perform different numbers of operations, depending on the value of a parameter. For example, for the array implementation of the Vector/list(Java) class(vector/list classes are implemented similar to the dynamic class we have built), the remove function/method has to move over all of the items that were to the right of the item that was removed (to fill in the gap). The number of moves depends both on the position of the removed item and the number of items in the list. We call the important factors (the parameters and/or fields whose values affect the number of operations performed) the problem size or the input size.
