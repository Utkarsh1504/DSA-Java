---
path: "/recursion-string"
title: "Recursion & Strings"
order: "8D"
section: "Recursion"
description: "learn Recursion from scratch"
---

The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function. Using recursive algorithm, certain problems can be solved quite easily.

For example, we can define the operation "find your way home" as:

- If you are at home, stop moving.

- Take one step toward home.

- "find your way home".

Here the solution to finding your way home is two steps (three steps). First, we don't go home if we are already home. Secondly, we do a very simple action that makes our situation simpler to solve. Finally, we redo the entire algorithm.

Here we are going to see some important examples based on strings using Recursion:-

### 1)String Reverse :-

Examples:-

1) Input - nissan is a good company
   Output - ynapmoc doog a si nassin

2) Input - He is my brother 
   Output - rehtorb ym si eh

### Approach/Algorithm:- 

Implement a recursive function that will reverse a string,

Approach:-
- If string length is null or less than equal to 1, then return the
  original string

- Else call the function within itself and pass the substring of s
  from start index 0 to end index(length of string - 1).


```java
string_rev(String s)
{
    IF(s = Null or length of s <= 1){
        RETURN
    }
    ELSE{
        Call string_rev(substring of s from start index 0 to
        end index (length of s - 1))
    }
}
```

### Code Implementation:-

```java
class StringReverse
{
    void string_rev(String s)
    {
        if ((s==null)||(s.length() <= 1))
           System.out.println(s);
        else
        {
            System.out.print(s.charAt(s.length()-1));
            string_rev(s.substring(0,s.length()-1));
        }
    }
     
    public static void main(String[]args)
    {
        String s = "He is my Brother";
        StringReverse obb = new StringReverse();
        obb.string_rev(s);
    }   
}
```

### OUTPUT:- "rehtorB ym si eH"

### 2) Remove consecutive character duplicates using recursion:-

Examples:-

Input:- aaabbccc
Output:- abc

Input:- aaaaaaabbbbb
Output:- ab

### Approach/Algorithm:-

The steps to solve this problem with recursion are as follows, 

1) IF the String is null/empty, then simply return


2) ELSE compare the adjacent characters. IF the characters are identical, then shift the characters one by one to the left of the string.
Call the function again(perform recursion) and pass the updated string S as the value.


3) ELSE if they are not similar, then call recursion on the string from the next portion of the string.

```java
remove_dup(String S)
{
    IF(length of S <= 1){
        RETURN S
    }
    IF(S[0] = S[1]){
        RETURN call remove_dup() and pass the substring of S from index 1 to end.
    }
    ELSE{
        RETURN 1st character + call remove_dup() and pass the substring of S from index 1 to end.
    }
}
```

### Code Implementation:-

```java
import java.io.*;
class Program {
    public static String remove_dup(String s) {
        if(s.length()<=1)
            return s;
        if(s.charAt(0)==s.charAt(1))
            return remove_dup(s.substring(1));
        else
            return s.charAt(0) + remove_dup(s.substring(1));
    }
    public static void main(String[] args)
    {
        String s = "aabcca";
        System.out.println(remove_dup(s));
    }
}
```
### Output:- abca

3) Tower of Hanoi(Using recursion):-

Explanation:- 

Tower of Hanoi is a mathematical puzzle where we have three rods and N disks. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:-
1) Only one disk can be moved at a time.
2) Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
3) No larger disk may be placed on top of a smaller disk.

### Code Implementation:-

```java
class Program
{
    /*A- Starting rod, B- Temporary rod, C- Destination rod */
    public static void tower_of_hanoi(int n, char from_rod, char to_rod, char temp_rod)
    {
        if (n == 1)
        {
            System.out.println("Move disk 1 from rod " +  from_rod + " to rod " + to_rod);
            return;
        }
        tower_of_hanoi(n-1, from_rod, temp_rod, to_rod);
        System.out.println("Disk " + n + " moved from rod " +  from_rod + " to rod " + to_rod);
        tower_of_hanoi(n-1, temp_rod, to_rod, from_rod);
    }

    public static void main(String args[])
    {
        int n = 4; // Number of disks
        System.out.println("A- Starting tower\nC- Destination tower\nB- Temporary tower");
        tower_of_hanoi(n, \'A\', \'C\', \'B\');
    }
}
```
### Output:-

A- Starting tower
C- Destination tower
B- Temporary tower
Disk 1 moved from rod 'A' to rod 'B'
Disk 2 moved from rod 'A' to rod 'C'
Disk 1 moved from rod 'B' to rod 'C'
Disk 3 moved from rod 'A' to rod 'B'
Disk 1 moved from rod 'C' to rod 'A'
Disk 2 moved from rod 'C' to rod 'B'
Disk 1 moved from rod 'A' to rod 'B'
Disk 4 moved from rod 'A' to rod 'C'
Disk 1 moved from rod 'B' to rod 'C'
Disk 2 moved from rod 'B' to rod 'A'
Disk 1 moved from rod 'C' to rod 'A'
Disk 3 moved from rod 'B' to rod 'C'
Disk 1 moved from rod 'A' to rod 'B'
Disk 2 moved from rod 'A' to rod 'C'
Disk 1 moved from rod 'B' to rod 'C'


