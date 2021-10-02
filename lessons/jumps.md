---
path: "/jumps"
title: "Jumps Statements"
order: "3E"
section: "Learn Java"
description: "Learn Java"
---

Jumps statements are used to jump to a specific line in a program. There are two type of jumps:
- Conditional jumps

- Unconditional jumps

## **Conditional Jumps**

Conditional jumps are used to jump to a specific line in a program. It has two parameters, the line number to jump to and a condition. There are five types of conditional jumps:

-  `if`

-  `if-else`

-  `nested-if`

-  `if-else-if` 

- `switch case`

 ##  **if**    
 `if` statement is the most simple decision making statement. It is used to decide whether a certain statement or block of statements will be executed or not. That is, if a certain condition is true then a block of statement is executed otherwise not.
 
###  Syntax:

```java
if(condition)
{
  // statements to excute if condition is true.
}
```
Note: Take care of braces here. If we do not provide the curly braces ‘{‘ and ‘}’ after **if( condition )** then by default `if` statement will consider the very first statement to be inside its block.
For ex:
```java
if(condition)
  statement1
  statement2
  statement3
// Here if the condition is true, **if** block will consider only statement1 to be inside its block.
```

Example.
```java
public  class  ifDemo {
public  static  void  main(String[] args) {
int i = 10;
if(i < 15)
   {
    System.out.println("10 is less than 15");
   }
 }
}
```
Output:  `10 is less than 15`


##  **if-else**    

The `if` statement alone tells us that if a condition is true it will execute a block of statements and if the condition is false it won’t. But what if we want to do something else if the condition is false. Here comes the `else` statement. We can use the `else` statement with `if` statement to execute a block of code when the condition is false.

###  Syntax:
```java
if(condition)
{
  // Executes this block if condition is true.
}
else
{
  // Executes this block if condition is false.
}
```
Example.
```java
public  class  ifelseDemo {
public  static  void  main(String[] args) {
int i = 10;
if(i < 15)
   {
   System.out.println("i is less than 15");
   }
   else
   {
   System.out.println("i is greater than 15");
   }
 }
}
```
Output:  `i is less than 15`


##  **nested-if**    

Java allows us to nest `if` statements within `if` statements.  That is, we can place an `if` statement inside another `if` statement.

###  Syntax:

```java
if (condition1) 
{
   // Executes when condition1 is true
   if (condition2) 
   {
      // Executes when condition2 is true
   }
}
```
Example.
```java
class NestedIfDemo{
  public class void Main(String args[]){
  int i = 10;
  if(i==10)
  {
  // First if statement
     if(i<15){
        System.out.println("i is less than 15");
         }
     if(i<12){
        System.out.println("i is less than 12 too");
         }
     else{
        System.out.println("i is greater than 15");
         }
   }
 }
}
```
Output:
`i is smaller than 15`
`i is smaller than 12 too`


##  **if-else-if**
Here, a user can decide among multiple options. The `if` statements are executed from the top down. As soon as one of the conditions controlling the` if` is true, the statement associated with that `if` is executed, and the rest of the ladder is bypassed. If none of the conditions is true, then the final `else` statement will be executed.

###  Syntax:

```java
if (condition)
    statement;
else if (condition)
    statement;
.
.
else
    statement;
```
Example:
```java
class ifelseifDemo{
	public static void main(String args[])
	{
		int i = 20;

		if (i == 10)
			System.out.println("i is 10");
		else if (i == 15)
			System.out.println("i is 15");
		else if (i == 20)
			System.out.println("i is 20");
		else
			System.out.println("i is not present");
	}
}

```
Output:  `i is 20`




##  **switch-case**
The switch statement is a multiway branch statement. It provides an easy way to dispatch execution to different parts of code based on the value of the expression.

###  Syntax:
```java
switch (expression)
{
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
  .
  .
  case valueN:
    statementN;
    break;
  default:
    statementDefault;
}
```
-   Expression can be of type `byte`, `short`, `int`, `char` or an `enumeration`. Beginning with JDK7,  expression  can also be of type `String`.
-  Duplicate case values are not allowed.
-  The `default` statement is optional.
-   The `break` statement is used inside the switch to terminate a statement sequence.
- The `break` statement is optional. If omitted, execution will continue on into the next case.

Example:
```java
class switchCaseDemo{
   public static Main(String args[]){
     int i = 9;
     switch(i)
     {
       case 0:
         System.out.println("i is zero.");
         break;
       case 1:
         System.out.println("i is one.");
         break;
       case 2:  
         System.out.println("i is two.");
         break;
       case 3:   
         System.out.println("i is three.");
         break;
       default:
         System.out.println("i is greater than 2.");
     }
   }
}
```
Output:  `i is greater than 2.`


## **Unconditional Jumps**

Unconditional jumps are used to jump to a specific line in a program.

It has a single parameter, the line number to jump to. There are two types of unconditional jumps:

-  `break`

-  `continue`


## **break**
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
- Terminate a sequence in a switch statement.

## **Continue**
Sometimes you doesn't want to excute a particular iteration in a loop. That is, you might want to continue running the loop but stop processing the  particular iteration. Then `continue` statement performs such an action.

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
