---
path: "/string-builder"
title: "StringBuilder in Java"
order: "6B"
section: "Strings In Depth"
description: "learn strings in depth"
---


String Builder is a separate class just like Strings, which allows us to modify the values(mutability).
### Need of String Builder:
As we know that Strings  are immutable ,because of which
each and every time we need to create an object and that object will have no reference in later cases while running the loop , hence there will be huge memory wastage and due to this we use String Builder.
### Code:
```java
public class SB {
    public static void main(String[] args) {
        StringBuilder builder=new StringBuilder();
        for(int i = 0;i<26;i++){
            char ch=(char) ('a'+i);
            builder.append(ch);
        }
        System.out.println(builder.toString());
    }
}

```
### Code Explanation:
* This is a simple code which  demonstrates the use of String Builder class to print all alphabets from a-z, and to show how efficient it is in space and time complexity.
* So inside the main function, we create a StringBuilder using "new" keyword, just like how we use to create for Strings.
* Now inside the ```for``` loop we take ASCII value of the character 'a' and add it to the iterating variable ```i``` and finally typecast the ASCII value to a character and assign it to ```ch```.
* In next step we add(```append```) each character to the builder and finally print it after converting them to String format by calling toString() Method.


# Code Analysis:
1. #### Now if we analyze the Time Complexity of using **Strings** for the above example:

```[a,ab,abc,abcd,...........,abcdefghijklmnopqrstuvwxy] ```

* Here, Size of each items are 1+2+3+4...+26 (N). This can be represented as N(N+1) /2 .

* After eliminating constants and less dominating terms , we finally obtain O(N^2).

* All of these large Strings will have no reference variable pointing towards it. [Wastage of Space].

2. #### Now if we analyze the Time Complexity of using **String Builder**  for the above example:

* Here instead of creating new object every time , it makes changes in the exsiting object itself[like how Arrays does], hence saving memory space and time.
 For example:
```["abc"+d -> "abcd"]```

* Due to this the Time Complexity is O(N).
