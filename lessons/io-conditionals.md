---
path: "/io-conditionals"
title: "Input/Output & Conditionals"
order: "3C"
section: "Learn Java"
description: "Learn java"
---

Okay so let's learn about the control flow of a Java program.

```java
    // Java program to demonstrate the control flow

    public class <ClassName> {
        public static void main(String[] args){
            System.out.println("Hello World");
        }
    }
```

Let's go through the code line by line.

- `#include` is a preprocessor directive that includes a header file. `#`(hash) is a special character that is used to indicate that the rest of the line is a preprocessor directive.
- `iostream` is a header file that contains the input/output class.
- `using namespace std;` is a preprocessor directive that tells the compiler to use the standard library. `using` is a keyword that is used to tell the compiler to use a namespace. `std` is a namespace that contains the standard library.
- `int main()` is a function definition. The execution of a program begins with the execution of the main function and it is mandatory for a C++ program.
- `cout << "Hello World!" << endl;` is a function call. `cout` is the output stream, `<<`(Insertion Operator) is a function call, and `Hello World!` is the string to be output. `<<`(Extraction Operator) is a left-to-right operator and `endl` is used to add a line break.
- `return 0;` is a function return and `0` is the return value.
- `{` is the start of a block and inside the block is known as **Function body**.
- `}` is the end of the function.
- `;` is the end of the line and also it is very important that the line ends with a semicolon otherwise the compiler will give an error.

Okay that's a lot of information to digest and it is the basic for a C++ program. Now let's move on to the next section.

## **If-Else Statements**

If-else statements are used to execute different code depending on the value of a variable. We use If-else statements for the condition based problem solving. If we have given a choice, then we can use if-else statements to decide which code to execute and it is called conditional execution.

It will be really easy to understand as we will see in the following example.

#### Syntax

if-else statements are written as follows.

```cpp
    // syntax
    if (condition) {
        // Code to execute if condition is true
    }
    else {
        // Code to execute if condition is false
    }
```

so above is the basic syntax of if-else statements. let's see some of the examples to understand it better.
we will see some simple examples and in last of this section i will link some more question so you can practise them on your own.

```java
    // program to check the greater number of the two.

    public class <ClassName> {
        public static void main(String[] args){
            int a = 10;
            int b = 20;
            if(a > b){
                System.out.println("a is greater than b");
            }
            else{
                System.out.println("b is greater than a");
            }
        }
    }
```

Lets go through the if-else code line by line.

- `if` is the keyword that indicates that the code block is an if statement. `(a > b)` is the condition. we can have multiple conditions in a single if statement. we're checking if `a` is greater than `b` if this turn out to be true then the code block under the if statement will be executed, if not then we'll move on the next statement.
- `else if` is the keyword that indicates that the code block is an else if statement. `(a < b)` is the condition. else if is used to check if the condition is true then the code block under the if statement will be executed, if not then we'll move on the next statement. it is used when we have multiple conditions in a single if statement.
- `else` is the keyword that indicates that the code block is an else statement. if the condition from the above statements are turn out to be false then the code block under the else statement will be executed.

ok so that's all. now let's see some more examples.

```cpp
    // code goes here
```

## **Switch Statements**

Switch statements are used to execute different code depending on the value of a variable. We use Switch statements for the condition based problem solving. Switch statements are used when we have multiple conditions in a single if statement. It is just a substitute for multiple if-else statements. In this a variable is compared to multiple cases one by one and when the case is matched then the code block under that case will be executed.

#### Semantics

```java
    // syntax

    switch (expression) {
        case value1:
            // code to execute if expression is value1
            break;
        case value2:
            // code to execute if expression is value2
            break;
        ...
        default:
            // code to execute if expression is not value1 or value2
            break;
    }
```

Above is the basic syntax of switch statements. Let's see some examples to understand it better.

```java
    // print hello world in different languages using switch statement

    public class <ClassName> {
        public static void main(String[] args){
            int a = 10;
            switch(a){
                case 1:
                    System.out.println("Hello");
                    break;
                case 2:
                    System.out.println("Namastey");
                    break;
                case 3:
                    System.out.println("Hola");
                    break;
                default:
                    System.out.println("learning more");
                    break;
            }
        }
``` lets understand how switch statement work
   The body of a switch statement is known as a switch block. A statement in the switch block can be labeled with one or more case or default labels. The switch statement evaluates its expression, then executes all statements that follow the matching case label. In the above program the variable a is intialised to the value 10 and the expression is evalutes only the variable a. It starts with the switch expression where the variable is placed whose value is to be checked against case values, then it goes to case 1, compare the values, if the value matches it goes on to execute the statement 1 and then it executes break statement which brings the switch block to end so no more case testing is done, saves the extra computation as we got our desired result. Now if the values do not match it goes to the next case and follows the same steps and if none of the case values matches the value of the variable, it executes the default statement.
                        The value a is not equal to the 1 hence this will not execute. Similary all cases in the switch statement
                        skipped and at last the default block will be executed
```
