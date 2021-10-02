---
path: "/functions"
title: "Function & Scope"
order: "3F"
section: "Learn Java"
description: "Learn how to use functions and scope"
---

## **Introduction to Methods/Functions** 

Whether you a professional programmer or just a beginner it is always better to break your programme into blocks, or functions. It will help you later, first of all in debugging, secondly, it is just better to have an elegant, readable and organized code.

A function is a part of a program that has its own name. This name can be used in the program as a command (this command is called a function call). When a function is called, the commands of which it consists are executed. A function call can return a value (similar to an operation) and therefore can be used in an expression along with operations.

In java, **Method** is also called as **Behaviour**.
And **Variables** are also called as **States**. 


## **Syntax**

```
public static int function() 
{
   //your function Body here//
}
```

## **Example**
```
public static void function()
{
    System.out.println("Hello World");
}
```
The main function which calls the above function is as follows:

```
public static void main(String []args)
{
    //function() called below to print "Hello World"
    function();
}
```

T
he **output** is as follows
```
Hello World
```


## **Return type  + program examples**

Whenever you define a method in java, you specify a return type i.e. that can be any data type, whether primitive or non-primitive and if you don't want to return a data-type you mark it as void (that means you dont want to return anything from the method).

To return a something from a method you need to use "**return**" keyword followed by the name of the variable or object.

The below example depicts to return a **Integer(int)** value.

```
public static int function()
{
    int count = 0;

    //your code here

    //returning count
    return count;
}
```

Make sure that you return the integer value or else, **Compilation fails**.


## **Parameters and Pass-By-Reference**
Unlike any other language you can also pass some parameters to the methods in java.
If your method needs some data to compute inside it then you must pass a **reference** of that data in the form of  parameters of your method. Again it can be of any data-type or else you can also pass the reference of any **object**. 
So, here we use **Pass-by-reference** not **Pass-by-value**.

Before passing the reference you should make your method in such a way that it should be able to take the parameters as shown in the below code.

Suppose in the below example, you need to pass the reference of two integers to a method called as **sum** and your method returns the sum of both the two integers.

```
public static int sum(int num_1, int num_2)
{
    //sum of two numbers.
    int sum =  num_1 + num_2;

    //return sum of the numbers.
    return sum;
}
```
```
public static void main(String []args)
{
    int a = 10;
    int b = 20;

    //Suppose you need to add above two numbers.

    //passing the refernce of 'a' and 'b'.
    int sum = sum(a, b); 

    System.out.println(sum);
}
```

**Execution of a Method**

## **Scope**
**Scope** of a variable is the part of the program where the variable is **accessible**. Like C/C++, in Java, all identifiers are lexically (or statically) scoped, i.e.scope of a variable can determined at compile time and independent of function call stack. 
Java programs are organized in the form of classes. Every class is part of some package. Java scope rules can be covered under following categories.

  **Member Variables**

- Scope of member variable is all over the class. You can use it anywhere but inside the class.

**Local Variables**

- Scope of Local variable is between the methods not outside the method, if you do so compiler throws an exception.

**Block Variables**

- The variables declared inside the block level statements cannot be accessed from outside the block. These blocks includes different types of loops, if else statements, etc. 

```
class Scope
{
    static int c = 10;
    //the reason to make c as static is that if we want 
    //to use a variable inside a static method then it 
    //should be static

    public static void main(String []args)
    {
        //below both are local variables.
        int a = 10;
        int b = 20; 

            //Block Statement
            if(a > b)
            {
                //here variable d is block variable
                //so d cannot be used outside if statement
                int d = a + b ;
            }

        //if i try to print value of variable d below 
        //it will throw an error.
        //System.out.pritnln(d);    

        //but we can print c here because c is a global variable 
        //and its scope is all ove the class.
        System.out.println(c);

    }// end of main function

}//end of class Scope
```


## **Shadowing**
Shadowing in Java is the practice of using variables in overlapping scopes with the **same** **name** where the variable in low-level scope overrides the variable of high-level scope. Here the variable at high-level scope is shadowed by the low-level scope variable.

In other words we can also say that it will use the global variable untill it finds local variable i.e it will use the local variable when **overlapping** is met.

You can get it well by refering to the below example

```
class shadow
{
	static int x = 20;
	
	public static void main(String []args)
	{	
		//here it preints the global variable
		System.out.println(x);		
		
		int x = 40;
		//here the overlapping is met
		//so it will print the local variable
		System.out.println(x);
	}
	
}
```
The output is as follows:
```
20
40
```



## **Overloading**

- In method overloading, we can create methods that have the same name, but the methods differ in type, number and/or sequence of parameters.

- When an overloaded method is invoked, Java uses the type, number and/or sequence of arguments as its guide to determine which version of the overloaded method to actually call.
   
- When java encounters a call to an overloaded method, it simplyexecutes the version of the method whose parameters match the arguments used in the call.

**Rules of Overloading**

- Overloaded methods must change the **arguments** list i.e numbers, datatye or sequence.
- Overloaded methods can change the **return** type.
- overloaded methods can change the **access modifier**.

The below example depicts the concept of method overloading.

```
class Adder
{
    static int add(int a,int b)
    {
        return a+b;
    }

    static int add(int a,int b,int c)
    {
        return a+b+c;
    }  
}  

class TestOverloading
{  
    public static void main(String[] args)
    {  
        System.out.println(Adder.add(11,11));  
        System.out.println(Adder.add(11,11,11));    
    }
}  
```
The output is as follows
```
22
33
```


## **Conclusion**
Hence after refering the above topics, we can conclude that if you need some code to be executed again again then we must use methods to increase the code reusability and increase the performance of the program.

And also seen that how important is, the concept of overloading and the rules for it.
Shadowing is also a great and unique concept where, whenever the variables overlaps then the latest one is considered.

## **Some Examples to practice**
- Write a java program to find the area of different shapes by using the concept of method overloading.

- Write a suitable java program which depicts the concept of shadowing.



