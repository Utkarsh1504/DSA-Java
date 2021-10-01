---
path: "/functions"
title: "Function & Scope"
order: "3F"
section: "Learn Java"
description: "Learn how to use functions and scope"
---
# Function & Scope
## Topics to be covered
- What are Method (function) +  Basic syntax +  example
- Return type + Parameter
- Internal working 
- Scope + Showding + Overloading
## Method's in java 
- A block of code which only runs when it is been called.
## Basic Syntax 
```java
modifier returnType nameOfMethod(parameter){
    //method body
}
```
- **modifier-** It defines the access type of the method and its is optional to use.
- **returnType-** Method may return a value, or it can be void.
- **nameOfMethod-** This is the method name. The method signature consists of the method name and the parameter list.
- **method body-** The method body defines what the method does with the statement.
## Example 
```java
public class hello_world {
    public static void main(String[] args) {
        helloWorld();
    }
    static void helloWorld(){
        System.out.println("Hello world");
    }
}
// We had written the basic hello world program using the functions

```
## ReturnType-
- A return statement causes the program control to transfer back to the caller of a method.
- A return type may be primitive type like **int,char,** or it  can be of void type (returns nothing).
### Few important things about return type
- The type of data returned by a method must be compatible with the return type specified by the method.
- The variable recieving the value returned by a  method must also be compatible with the return type specified for the method.
## Function's Parameter
- Information can be passed to methods as parameter. Parameters act as variables inside the method.
- Parameters are are specified after the method name, inside the parentheses. You can add as many parameters as you want just separate them with comma.
**Example-**
```java
//Write a program in which cheak the number is even or odd.
public class EvenOrOdd {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Please enter the number :");
        int num1=input.nextInt();

       IsEven(num1);
    }
    static void IsEven(int num1){
        if (num1 ==0){
            System.out.println("The number given is zero")
        }
        if (num1 % 2==0) {
            System.out.println("The number given is even");
        }
        else{
            System.out.println("The number is odd");
        }
    }
}
//Hear the parameter is a variable
```
## Function execution
- A function is a block of code which only runs when it is called. We use function because we can write the code a once and use that block of code as many time as we want to use.
## Scope -
- In a function the variable declaration is limited to that funtion only.
- If we try to use the variable from other function then it will not work. This is known as **function scope**.

- Variable declared inside the curly braces (block) are only accessibe by the code between the curly braces, which follow the line in which the variable was declared. This is known as **block scope**
## Shawdoing -
- Shawdoing in Java is the practice of using variable in overlapping scope with the same name where the variable in low level scope overides the variable of high- level scope.
 - Hear the variable of high level is shawowed by low level scope variable.
## Overloading -
- With method overoading, multiple method can have the same name with diffrent **parameters**.
#### Example

```java 
public static void main(String[] args) {
  int myNum1 = plusMethodInt(8, 5);
  double myNum2 = plusMethodDouble(4.3, 6.26);
  System.out.println("int: " + myNum1);
  System.out.println("double: " + myNum2);
}
static int plusMethodInt(int x, int y) {
  return x + y;
}

static double plusMethodDouble(double x, double y) {
  return x + y;
}
```
## Some example of function
- Define a function to print the minimum number respectivly among three number enterd by user.
```java
public static void main(String[]args){
    Scanner in = new Scanner(System.in);
    System.out.println("Enter num 1: ");
    int num1 = in.nextInt();
    System.out.println("Enter num 2: ");
    int num2 = in.nextInt();
    System.out.println("Enter num 3: ");
    int num3 = in.nextInt();
    int minimum = min(num1, num2, num3);
    System.out.println("The minimum of three number is: "+ minimum)
}
static int min(int num1, int num2, int num3){
    int min = num1;
    if(min>num2){
        min = num2
    }
    if (min > num3){
        min = num3;
    }
    return min;
}
```
- Define a method that returns the product of two numbers entered by user.
```java
public class productOfTwoNumbers {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int num1 = in.nextInt();
        System.out.print("Enter second number: ");
        int num2 =in.nextInt();
        int multiplication = product(num1,num2);
        System.out.println("The product of two number is: "+multiplication);
    }
    static int product (int num1, int num2){
        int multiply = num1* num2;
        return multiply;
    }
}
```
## Conclusion
- Function are block of code which we can write it once and use it as many time as we want.
- We also looked in the scoping, shawdoing and method overloading in java in this lesson.



