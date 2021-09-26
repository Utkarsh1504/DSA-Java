---
path: "/loops"
title: "Loops In Java"
order: "3D"
section: "Learn Java"
description: "Learn java"
---

Loops are a way to repeat a block of code. It is used to remove repetitive code and to make code more readable. It is a way to write iterative code.

There are three types of loops in Java.

- For
- While
- Do-While

## **For Loops**

For loops are used to iterate over a range of numbers. In this loop, the range is defined by the `for` keyword. It needs a variable to store the current value and a condition to check if the loop should continue or not and a block of code to be executed for each value in the range of numbers (from the first to the last).

#### Semantics

```java
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

- we have initialized the variable `sum` to 0.
- then we used `for` loop:

  - In the initialization, we have initialized the variable `i` to 0(`int i=0;`). This step is completely optional. You can also do the initialization before the loop. In that that would be look like:

  ```java
      int sum = 0;
      int i = 0;
      for (; i < 10; i++) {
          ....
  ```

  or something like that.

  ```java
      int i;
      for (i = 0; i < 10; i++) {
  ```

  - In the condition, it checks if `i` is less than 10. The condition checks if the loop should continue or not and this is not optional, you have to provide condition. In this case we have given a sigle condition `i < 10`. we can also have multiple conditions like `i < 10 && i > 0`. for multiple conditions, we need to use logical operator to combine them.

  ```java
        int sum = 0;
        for(int i=0; i<10 && i%2==0; i++) {
  ```

  - In the update, it updates the value of `i` by 1. This is optional too. you can have the update like: i++, i--, i+=2, i-=2 etc.

  ```java
        int sum = 0;
        for(int i=0; i<10;) {
            sum += i;
            i++;
        }

  ```

- Okay so these are the variation of for loops. let's understand how this for loop works. So `i=0;`, i is assigned to 0. now it checks is `i`(0) is less than `10`, the answer is yes(true). if condition comes true, it executes the block of code. so inside the body, `sum += i;`, expression is evaluated. `sum` is assigned to 0 as sum = sum + i(0). so `sum` is assigned to 0. This is the first iteration.
- Now `i` get updated to 1. now it checks if `i` is less than 10, the answer is yes(true). if condition comes true, it executes the block of code. so inside the body, `sum += i;`, expression is evaluated. `sum` is assigned to 0 as sum = sum + i(1). so `sum` is assigned to 1. This is the second iteration.
- This iteration continues until `i` is less than 10. As `i` reaches 10, the condition becomes false and the loop stops.
- So the final value of `sum` is 10, which will be printed on the console.

And that's all. You can see that the for loop is very simple and easy to understand. You can practise some questions based on for loops in the [Assignment Section](./assignment.md).

## **While Loops**

While Loops are used to iterate over a range of numbers. In this loop, the range is defined by the `while` keyword. It needs a condition to check if the loop should continue or not and a block of code to be executed for each value in the range of numbers (from the first to the last).

#### Semantics

```java
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

```java
    // syntax
    do {
        // block of code
    } while(condition);
```

##### FlowChart

![DoWhileLoop](./images/doWhileLoop.png)

Let's see how to apply do-while loop in writing a program.

```java
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

- we have used `do` keyword to execute the block of code firstly. firstly this loop will start executing the block of code and print the value of `i` to the console.
- after that we're incrementing the value of `i` by 1 and then we check the condition `i < 10` and if the condition is true then we execute the loop again and print the value of `i` to the console.
- and if the condition is false then we break the loop.
- so the conclusion is that we first, atleast once execute the block of code and then we'll check the condition and according to the condition we'll work further.

> There may be a question when to use which loop?

Okay so it depends on the situation. It completey depends on the problem you are solving.

- **`for` and `while`** - you can use both loop as per your requirement, but there is one thing which recommended by all is you should use `while` loop when you don't know how many times you have to iterate and use a `for` loop when you know how many times you have to iterate. suppose you have to print numbers from 1 to 10 then you know how many times you have to run the loop so use `for` loop. And if you have given that keep taking input from a user till user doesn't press x, here you don't know how many times you have to iterate so use `while` loop.

- **`while` and `do-while`** - so in situations like, when you atleast once want to run the loop, irrespective of the condition, then you should use `do-while` loop and rest in all other cases either use `while` loop or `for` loop.
