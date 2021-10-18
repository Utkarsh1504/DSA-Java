---
path: "/recursion-string"
title: "Recursion & Strings"
order: "8D"
section: "Recursion"
description: "learn Recursion from scratch"
---

# Recursion:-
The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function. Using recursive algorithm, certain problems can be solved quite easily.

For example, we can define the operation "find your way home" as:

- If you are at home, stop moving.

- Take one step toward home.

- "find your way home".

Here the solution to finding your way home is two steps (three steps). First, we don't go home if we are already home. Secondly, we do a very simple action that makes our situation simpler to solve. Finally, we redo the entire algorithm.

# Here we are going to see an important example of String Recursion:-

### String Reverse :-

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


```
Java
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

```
Java
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
