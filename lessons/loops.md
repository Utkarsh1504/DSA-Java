---
path: "/loops"
title: "Loops In Java"
order: "3D"
section: "Learn Java"
description: "Learn java"
---

Loops are a way to repeat a block of code. It is used to remove repetitive code and to make code more readable. There are two ways for iteration in C++.

- Loops
- Recursion

There are three types of loops in C++.

- For
- While
- Do-While

## **For Loops**

For loops are used to iterate over a range of numbers. In this loop, the range is defined by the `for` keyword. It needs a variable to store the current value and a condition to check if the loop should continue or not and a block of code to be executed for each value in the range of numbers (from the first to the last).

#### Semantics

```cpp
    // syntax

    for (initialization; condition; update){
        // block of code
    }
```

##### FlowChart

![ForLoop](../images/forLoop.png)

Ok so let's see how to use for loops in writing a program.

```java
    //program to find sum upto n numbers
    public class <ClassName> {
        public static void main(String[] args) {
            int sum = 0;
            for (int i = 0; i < 10; i++) {
                sum += i;
            }
            System.out.println("Sum of numbers upto 10 is " + sum);
        }
    }
```

so let's analyze the code.

- firstly we declare a variable `n` and assign it a value from the user using the `cin` function which is a part of the standard library.
- `cin >> n` is a statement that take input the value of `n` from the user.
- then we declare one more variable `sum` and assign it a value of 0 because we are starting from the first number so at that time we don't have any sum.
- then we use a `for` loop to iterate over the range of numbers from 0 to the value of `n` (in this case `n` is the value of `n`). this loop will run for `n` times ( starting from 0 to `n-1` total n times).
- `i` is initialized with 0 (you can initialize it with any value you want but keep in mind you have to change the condition `i < n` according to that). and then we update the value of `i` by adding 1 each time.
- inside the body of the loop we assigned the value of `i` to the `sum` variable. `sum += i` is another way of writing `sum = sum + i` and it is a way to add the value of `i` to the value of `sum`.
  each time value of `i` will get incemented by 1 and then it will be added to the `sum`.
- finally we print the value of `sum` to the screen.

And that's all. I'll add some question at the end.

## **While Loops**

While Loops are used to iterate over a range of numbers. In this loop, the range is defined by the `while` keyword. It needs a condition to check if the loop should continue or not and a block of code to be executed for each value in the range of numbers (from the first to the last). The main difference between for and while loops is that the for loop is used to iterate over a range of numbers and the while loop is used to iterate over a range of values.

#### Semantics

```cpp
    // syntax
    while(condition) {
        // block of code
    }
```

##### FlowChart

![WhileLoop](./images/whileLoop.png)

Let's see how to use while loops in writing a program.

```java
    // Program to demonstrate while loop
    public class <ClassName> {
        public static void main(String[] args) {
            int i = 0;
            while (i < 10) {
                System.out.println("i is " + i);
                i++;
            }
        }
    }
```

let's analyze the code.

- In line six, we have used `while` to iterate over the range of numbers and we have put condition `n > 0` because we want to iterate over the numbers from the first to the last.
- Inside the loop we have used `n--` which is another way of writing `n = n - 1`, we're decrementing the value of `n` by 1 each time till it reaches zero and it reaches zero, condition will be false and the loop will break.
- Lastly we print the value of `sum` to the screen.

I think that's easy to understand. So let's move to our next loop.

## **Do-While Loops**

Do-While loops are used to iterate over a range of numbers. In this loop, the range is defined by the `do-while` keyword. It needs a condition to check if the loop should continue or not and a block of code to be executed for each value in the range of numbers (from the first to the last). The main difference between do-while and while loop is that the do-while loop is iterates _atleast once_ whether the condition is true or not it will execute the block of code atleast once which is not true in case of while loop.

`While` loop firstly checks the condition and then it works according to the condition but `Do-while` loop first execute the code inside the body of the loop then checks the condition.

#### Semantics

```cpp
    // syntax
    do {
        // block of code
    } while(condition);
```

##### FlowChart

![DoWhileLoop](./images/doWhileLoop.png)

Let's see how to apply do-while loop in writing a program.

```cpp
    // Program to demonstrate do-while loop
    public class <ClassName> {
        public static void main(String[] args) {
            int i = 0;
            do {
                System.out.println("i is " + i);
                i++;
            } while (i < 10);
        }
    }
```

Lets analyze the code.

- In line six, we have used `do` to iterate over the range of numbers and we have put condition `n > 0` because we want to iterate over the numbers from the first to the last.
