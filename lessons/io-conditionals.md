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

- **``public static void main(String[] args)``** Java main method is the entry point of any Java program. You can only change the name of String array argument, for example you can change ``args`` to ``myStringArgs``.
- **``public``** This is the access modifier of the main method. It has to be ``public`` so that Java Runtime Environment(JRE) can execute this method. Remember that if you make any method non-public then it’s not allowed to be executed by any program, there are some access restrictions applied. So it means that the main method has to be public.
- **``Static``** When JRE starts, there is no object of the class present. That’s why the main method has to be static so that JVM can load the class into memory and call the main method. If the main method won’t be static, JVM would not be able to call it because there is no object of the class is present.
- **``Void``** Java programming mandates that every method provide the return type. Java main method doesn’t return anything, that’s why it’s return type is void. This has been done to keep things simple because once the main method is finished executing, java program terminates. So there is no point in returning anything, there is nothing that can be done for the returned object by JVM. If we try to return something from the main method, it will give compilation error as an unexpected return value.
- **``Main``** method is similar to the main function in C and C++.
The ``main`` method accepts a single argument: an array of elements of type String.
- **``String[] args``** Java main method accepts a single argument of type String array. This is also called as java command line arguments.
- **``System.out.println("Hello, World");``** Outputs the string “Hello, World” followed by a new line on the screen.Output is actually accomplished by the built-in println( ) method. ``System`` is a predefined class that provides access to the system, and ``out`` is the variable of type output stream that is connected to the console.

> System, out, println these are default classes and methods built into Java. If you want to read docs do a `ctrl+click` (IntelliJ Idea) on them.
> 
Okay that's a lot of information to digest and it is the basic for a Java program. Now let's move on to the next section.

## **If-Else Statements**

If-else statements are used to execute different code depending on the value of a variable. We use If-else statements for the condition based problem solving. If we have given a choice, then we can use if-else statements to decide which code to execute and it is called conditional execution.

It will be really easy to understand as we will see in the following example.

#### Syntax

if-else statements are written as follows.

```java
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

```java
    //A Java Program to demonstrate the use of if-else statement.  
    //It is a program of odd and even number.  
    public class IfElseClass {  
        public static void main(String[] args) {  
        //defining a variable  
        int number = 13;  
        //Check if the number is divisible by 2 or not  
        if(number % 2 == 0){  
            System.out.println("even number");  
        }
        else{  
            System.out.println("odd number");  
        }  
    }  
}  
```

Let's go through the code line by line.

- `if` is the keyword that indicates that the code block is an if statement. `(number%2==0)` is the condition. we can have multiple conditions in a single if statement. we're checking if  ``number`` is divisible by ``2``  if this turn out to be true then the code block under the if statement will be executed, if not then we'll move on the next statement.
- `else` is the keyword that indicates that the code block is an else statement. if the condition from the above statements are turn out to be false then the code block under the else statement will be executed.


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
    }
```

Let's go through the code line by line. 




 - first creates a variable named `a` and assigns the value `10` to it.

 - Second, "switches" on the value of the `a` variable. Inside the `switch` statement are 3 case statements and a default statement.

 - Each case statement compares the value of the `a` variable with a constant value. If the amount variable value is equal to that constant value, the code after the colon `(:)` is executed. `break` keyword after each statement. If no break keyword was place here, the execution could continue down the rest of the case statements until a break is met, or the end of the switch statement is reached. The break keyword makes execution jump out of the switch statement.

 - The `default` statement is executed if no case statement matched the value of the amount variable. The default statement could also be executed if the case statements before it did not have a break command in the end. You don't need a default statement. It is optional

