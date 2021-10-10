---
path: "/time-complexity"
title: "Time Complexity"
order: "7B"
section: "Space & Time Complexity"
description: "learn about time and space complexity for various algorithms"
---
Time Complexity is a function / relationship that tells us how the time increases as input size increases. 

## Points to remember while calculating time complexity

- Consider larger inputs because relationship at this point persists.
- Constants are ignored since actual time even differs for the same relationship.
- Always ignore less dominating terms.
- Look for the worst case complexity.

## Types of Notations:

### Big Oh Notation, O : 
- Word Definition - The notation Ο(n) is the formal way to express the strict upper bound of an algorithm's running time. It measures the worst case time complexity or the longest amount of time an algorithm can possibly take to complete.
- Mathematical Definition - 
![BigOh](/images/TimeComplexity/BigOh.png)

### Big Omega Notation, Ω : 
- Word Definition - The notation Ω(n) is the formal way to express the strict lower bound of an algorithm's running time. It is opposite of Big Oh notation. 
- Mathematical Definition -
![Big Omega](/images/TimeComplexity/BigOmega.png)

### Theta Notation, θ : 
- Word Definition - The notation θ(n) is the formal way to express both the lower bound and the upper bound of an algorithm's running time.
- Mathematical Definition -
![Theta](/images/TimeComplexity/Theta.png)

### Little Oh Notation, o : 
- Word Definition - The notation o(n) is the formal way to express the loose upper bound of an algorithm's running time.
- Mathematical Definition -
![LittleOh](/images/TimeComplexity/LittleOh.png)

### Little Omega Notation, Ω : 
- Word Definition - The notation Ω(n) is the formal way to express the loose lower bound of an algorithm's running time.
- Mathematical Definition -
![LittleOmega](/images/TimeComplexity/LittleOmega.png)

NOTE : We use Big Oh and Big Omega notations mostly.

## Calucating time complexity of Recursive functions :

There are two types of recurrences :

### Divide & Conquer :

Form - T(x)  = a<sub>1</sub>T(b<sub>1</sub>x + h<sub>1</sub>(x)) + a<sub>2</sub>T(b<sub>2</sub>x + h<sub>2</sub>(x)) + ... + a<sub>k</sub>T(b<sub>k</sub>x + h<sub>k</sub>(x)) + g(x) for x >= x<sub>0</sub>

where h<sub>i</sub> is a function of x and x<sub>0</sub> is a constant 

#### Akra-Bazzi Method :
This method helps in calculating time complexity of Divide & Conquer recurrences. Time complexity is 
![Akkra-Bazzi](/images/TimeComplexity/Akkra-Bazzi.png)

Example - (https://www.geeksforgeeks.org/akra-bazzi-method-for-finding-the-time-complexities/)

### Linear :

Form - f(x) = a<sub>1</sub>f(x - 1) + a<sub>2</sub>f(x - 2) + ... + a<sub>n</sub>f(x - n) where n is the order of recurrence

#### For Homogeneous eqn :
- Step 1 - Put f(x) = α<sup>x</sup> for some constant = α. 
Try to make a characteristic equation for recurrence and solve it to find the roots of it.
- Step 2 - Find the value of constants and reduce the equation.
This reduced equation is the time complexity.

#### For Non - Homogeneous eqn :
- Step 1- Convert the eqn to homogeneous by replacing g(x) by zero to find the general solution as explained earlier.
- Step 2 -  Find the particular solution of the non-homogeneous eqn.
- Step 3 - Sum of general and particular solution gives time complexity.