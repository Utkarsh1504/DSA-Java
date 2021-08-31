---
path: "/firstjavaprogram"
title: "First Java Program"
order: "2C"
section: "Basics"
description: "run java"
---

Create a fresh new java class file in the `src/` directory with **.java** extension. Don't worry we'll explain this in detail later and start writing the following code in it.

```java
    // Create a hello world program

    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }
```

OKay so lots of horrible looking code, but it's not that bad, we'll get it line by line.

- The first line is the class declaration. It tells the compiler what the class is called and what it does (in this case it's a HelloWorld class).
- The 2nd line is the main method. This is where the program starts. `public` is the access modifier, `static` is the modifier, `void` is the return type, `main` is the method name, and `(String[])` is the parameter list. The parameter list is a list of strings, which are the arguments passed to the program. This is basically the terminology.
- The 3rd line is the `System.out.println` statement. This is a method call. `System` is the class, `out` is the object, `.` is the dot operator, `println` is the method name, and inside the parentheses we pass the string `Hello World!`.
