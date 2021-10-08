---
path: "/arraylist"
title: "ArrayList In Java"
order: "4B"
section: "Arrays"
description: "learn arrays"
---

The ArrayList class is in implementation of the list interface that allow us to create resizable array. In simple term we can say that ArrayList in java is dynamic array for storing the elements. It is just like the vector in c++.


## Creating An ArrayList

```java
 ArrayList<type>arraylist = new ArrayList<> ; 
 //here type define any type of ArrayList. 
Example:
   ArrayList<Integer> arrlist = new ArrayList<Integer>(n);

```

## Code Snippet to demonstrate the working of ArrayList in Java
```java
import java.io.*;
import java.util.*;

class ArrayListExample {
	public static void main(String[] args)
	{
		//create array
		ArrayList<Integer> arr = new ArrayList<Integer>(n);

		arr.add(1);
		arr.add(2);
		arr.add(3);
		arr.add(4);
        System.out.println("List: " + arr );
	}
}

```

## Output
```java
List : [1, 2, 3, 4] 
```
 
## Methods OF ArrayList :
Some Commonly used Methods

  Method       |  Detail
------------- | -------------
size()        | give the size of the ArrayList
sort()        | to sort the elements in the list
isEmpty()	  | Checks if the arraylist is empty.
indexOf()	  | to find index of any element.



## Basic Operation in Java ArrayList :
The ArrayList class have some methods to perform different operations on arraylists. Let's see some of most used methods.

- Add elements
- Access elements
- Change elements
- Remove elements

### Add Elements:
 - add() : This is the method to insert any elements at the end of the list.
```java
import java.util.ArrayList;

class Main {
  public static void main(String[] args){
  
    ArrayList<String> playerName = new ArrayList<>();

    // add() method 
    playerName.add("Virat");
    playerName.add("Dhoni");
    playerName.add("Sachin");
	//print 
    System.out.println("ArrayList: " + playerName);
  }
}
```
### Output:

```
ArrayList : [Virat,Dhoni,Sachin]
```

- get() : This method is used to acess the elements from the list.

```java
import java.util.ArrayList;

class Main {
  public static void main(String[] args){
    
    ArrayList<String> playerName = new ArrayList<>();

   
    playerName.add("Virat");
    playerName.add("Dhoni");
    playerName.add("Sachin");
    System.out.println("ArrayList: " + playerName);

	// get() method
    String name1 = playerName.get(1);
    System.out.println(name1);
  }
}

```
### Output:
```
ArrayList : [Virat,Dhoni,Sachin];
Dhoni
```
- set(): This method is used to set any elements at any position.

```java
import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> playerName = new ArrayList<>();

    // add() method without the index parameter
    playerName.add("Virat");
    playerName.add("Dhoni");
    playerName.add("Sachin");
    System.out.println("ArrayList: " + playerName);


    // change the element of the array list
    playerName.set(2, "Rohit");
    System.out.println("New ArrayList: " + playerName);
  }
}
```
### Output:
```
ArrayList : [Virat,Dhoni,Sachin]
New ArrayList : [Virat,Dhoni,Rohit]

```
- remove() : To remove the elements from the list

```java
import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> playerName = new ArrayList<>();


    // add() method without the index parameter
    playerName.add("Virat");
    playerName.add("Dhoni");
    playerName.add("Sachin");
    System.out.println("ArrayList: " + playerName);

    // remove element 
    String name1 = playerName.remove(2);
	//print list after removal
    System.out.println("New ArrayList: " + playerName);
	//removed elements
    System.out.println("Removed: " + name1);
  }
}
```
### Output:
```
ArrayList : [Virat,Dhoni,Sachin]
New ArrayList : [Virat,Dhoni]
Removed: Sachin
```
## Some remembering points about ArrayList

- It comes under java.util package.
- This class maintains insertion order.
- It allows random access.
- ArrayList is not Synchronized  
- To convert ArrayList into an array we use toArray() method.
- To convert array into an arraylist we use asList() method.	
