---
path: "/jumps"
title: "Jumps Statements"
order: "3E"
section: "Learn Java"
description: "Learn Java"
---

Jumps statements are used to jump to a specific line in a program. 

Java supports three jump statements.
 - `break`
 - `continue` 
 - `return`
 
 These three statements transfer control to other part of the program.
 
Let's see one by one how it works.

## **Break statements**
Break Statement is a loop control statement that is used to terminate the loop. As soon as the  `break` statement is encountered from within a loop, the loop iterations stop there, and control returns from the loop immediately to the first statement after the loop.

Example.
```java
public  class  HelloWorld {
     public  static  void  main(String[] args) {
        // Initially loop is set to run from 1-5
        for(int i=1; i<=5; i++){
             // terminate loop when i is 4.
             if(i=4){
             break;
             System.out.print(i);
             }
         }
     }
}

```
Output:    `1 2 3`

In Java, `break` is majorly used for:
- To exit a loop.
- Terminate a sequence in a `switch` statement.

## **Continue Statements**
Sometimes you doesn't want to execute a particular iteration in a loop. That is, you might want to continue running the loop but stop processing the  particular iteration. Then `continue` statement performs such an action.

Example.
```java
public  class  HelloWorld {
     public  static  void  main(String[] args) {
        // Initially loop is set to run from 1-5
        for(int i=1; i<=6; i++){
            // terminate loop when i is 4.
            if(i=4){
            continue;
            System.out.print(i);
            }
        }
    }
}

```
Output:   `1 2 3 5 6`

## **Break vs Continue**
Let's us see how these two jump statements are different from each other.


| break             | continue                                                                |
| ----------------- | --------------- |
|The break statement is used to terminate the loop immediately. | The continue statement is used to skip the current iteration of the loop.|
| break keyword is used to indicate break statements in java programming. | continue keyword is used to indicate continue statement in java programming.|
| We can use a break with the switch statement. | The continue statement brings the next iteration early. |
| It stops the execution of the loop. | It does not stop the execution of the loop.|



## **Return Statement**
The `return` statement is used to explicitly return from a method. That is, it causes a program control to transfer back to the caller of the method.
It is used to **exit** from a method, with or without a value. Usage of **return keyword** as there exist two ways as listed below as follows:

-   **Case 1:**  Methods returning a value
-   **Case 2:**  Methods not returning a value


##  **Methods returning a value**
```java
// Main method
class  CodeExample {
    // Method 1
	public static int sumFunction(int a, int b) {
		int sum = a + b;
	    // Since return type of sunFunction method is integer so this method should return integer value	
		return sum;
	}
	
	// Main driver method
	public static void main(String[] args){
	    int a = 5;
	    int b = 8;
	    // here ans variable will receive sum from sumFunction
		int ans = sumFunction(a, b);
		// print statement
		System.out.println(ans);
	}
}

```
Output:  `13`

**Output explanation:**  When  we are calling a class CodeExample method that has **return sum** which returns the value of sum and that’s value gets displayed on the console.

##  **Methods not returning a value**
For methods that do not return a value, `return` statement in Java can be skipped. Here there arise two cases when there is no value been returned by the user as listed below as follows:
-  Method not using return statement in void function
- Methods with return type void

#### Method not using return statement in void function
```java
// Main method
class  CodeExample {
    // Method 1
	public static void sumFunction(int a, int b) {
		int sum = a + b;
	    // Since return type of sunFunction method is void so this method should not return any value.	
		System.out.println(sum);
	}
	
	// Main driver method
	public static void main(String[] args){
	    int a = 5;
	    int b = 8;
	    // Here, we will just call the function and the program will execute successfully.
	    sumFunction(a, b);
	}
}
```
Output:  `13`

#### Method with return type void
```java
// Main method
class CodeExample {
    // Method 1
	public static void demoFunction(int n) {
		if(n<10) {
		    // return statement below(only using return statement and not returning anything)
            	    // control exits the method if this condition(i.e, n<9) is true.
		    return;
	        } else {
		   n++;
		}
	}
	// Main driver method
	public static void main(String[] args){
	     int n = 8;
	     // calling the function
	     sumFunction(n);
	}
}
```
Program executed successfully. 
