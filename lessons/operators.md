---
path: "/operators"
title: "Operators in Java"
order: "3B"
section: "Learn Java"
description: "Learn java"
---

Operators are symbols that tell the compiler to perform some specfic operations.
In JAVA, there are many operators, and they are grouped into several categories.
We are going to learn some of the important operators only. You will see these operators in most of the section and this will cover almost every problem you will encounter in your programming journey.

Ok, So there are basically 6 categories of operators:

- Arithmetic Operators
- Relational Operators
- Logical Operators
- Assignment Operators
- Bitwise Operators
- Other Operators

In the last one _Other Operators_ I have put the miscellaneous operators, which are not grouped into any of the above categories. Ok so let's learn them one by one.

## **Arithmetic Operators**

Arithmetric operators are used to perform arithmetic operations. They are used to perform addition, subtraction, multiplication, division, modulus, exponentiation, and negation. That's all you need to know. It has some types:

- `Binary Operator`: used to perform addition(**+**), subtraction(**-**), multiplication(**\***), division(**/**), modulus(**%**), exponentiation(**\*\***) etc.
- `Unary Operator`: used to perform operation using the single operand. like
  Incrementer(**++**), Decrementer(**--**), negation(**!**), Complement(**~**), etc.

Ok so let's learn about the incrementer and decrementer operators now because they are very important.

### Incrementer and Decrementer Operators/ Unary Operators

In Java there are two types of incrementer and decrementer operators:

- **Incrementer Operator**: used to increment the value of the operand by 1.
- **Decrementer Operator**: used to decrement the value of the operand by 1.

---

There are two types to each of them:

- **Prefix Incrementer Operator**: used to increment the value of the operand by 1.
- **Postfix Incrementer Operator**: used to increment the value of the operand by 1.
- **Prefix Decrementer Operator**: used to decrement the value of the operand by 1.
- **Postfix Decrementer Operator**: used to decrement the value of the operand by 1.
  now do some question based on the above operators.

| **Pre Increment**                                         | **Post Increment**                                                                                         | **Pre Decrement**                                       | **Post Decrement**                                                                                         |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **++x**                                                   | **x++**                                                                                                    | **--x**                                                 | **x--**                                                                                                    |
| Increment `x` instantly                                   | Current value of `x` is preserved temporarily. `x` will get incremented before next statement is executed. | Decrement `x` instantly                                 | Current value of `x` is preserved temporarily. `x` will get decremented before next statement is executed. |
| int x = 10; int y; y = ++x; `System.out.println(x+" "+y)` | int x = 10; int y; y = x++; `System.out.println(x+" "+y)`                                                  | int x=10; int y; y = --x; `System.out.println(x+" "+y)` | int x = 10; int y; y = x--; `System.out.println(x+" "+y)`                                                  |
| **a=11, b=11**                                            | **a=11, b=10**                                                                                             | **a=9, b=9**                                            | **a=9, b=10**                                                                                              |

## **Relational Operators**

Relational operators are used to compare the values of two operands. They are used to compare the values of two operands using the following operators:

- `== or = =`: used to compare two operands if they are equal. It gives true if both the operands have equal values.
- `!= or ! =`: used to compare two operands if they are not equal. It gives true if both the operands have not same values.
- `<`: used to compare two operands if the first operand is less than the second operand. It gives true if the first operand is less than the second operand.
- `>`: used to compare two operands if the first operand is greater than the second operand. It gives true if the first operand is greater than the second operand.
- `<=`: used to compare two operands if the first operand is less than or equal to the second operand. It gives true if the first operand is less than or equal to the second operand.
- `>=`: used to compare two operands if the first operand is greater than or equal to the second operand. It gives true if the first operand is greater than or equal to the second operand.

## **Logical Operators**

Logical operators are used to perform logical operations. They are used to perform the following operations:

- `&&` and `&`: Java unlike many other languages has two AND operators to perform logical AND operation. It returns true if both the operands (being compared) have a truthy value. Even though both the `&` and `&&` operators perform the same AND operation; the `&&` operator is a logical operator and it  can improve the efficiency of your code since it evaluates the second expression only if the first expression is true unlike the bitwise `&` operator which evaluates the second expression nonetheless. 

- `||` and `|`: OR is used to perform logical OR operation. It returns true if either of the operands have a truthy value. The difference between `|` and `||` is that the `|` operator is a bitwise operator and it compares each operand bitwise whereas the `||` operator is the logical OR operator. It operates on both the operands and returns true if either of the operands have a truthy value. 
- `!`: NOT used to perform logical NOT operation. It gives true if the operand has false value.

let's see an example:

```Java
   // program to find whether a number is divible by both 3 and 5
   // or divisible by only one of them
import java.util.Scanner;
public class Main
   {
	public static void main(String[] args) {
	    Scanner sc=new Scanner(System.in);
	    System.out.println("Enter a number: ");
	    int a=sc.nextInt();
	    
        if(a%3==0 && a%5==0)
         System.out.println("The number is divisible by both 3 and 5");
       else if(a%3==0 || a%5==0)
         System.out.println("The numbers is divisible by only one of them");
       else
         System.out.println("The numbers is not divisible by any of them");
    }
}
```

let's see the explanation:

- `a%3==0 && a%5==0`: it checks whether the value of `a` is divisible by both 3 and 5. if its divisible by both 3 and also divisible by 5 then it gives true. that's why we use `&&` operator here.
- `a%3==0 || a%5==0`: it checks whether the value of `a` is divisible by either 3 or 5. if its divisible by 3 or 5 then it gives true. if its divisible by 5 then it gives true. that's why we use `||` operator here.
- but `a` is neither divisible by 3 nor divisible by 5. so it gives false. so we'll be priting `the numbers is not divisible by any of them`.

## **Assignment Operators**

Assignment operators are used to assign the value of one operand to another. They are used to assign the value of one operand to another using the following operators:

- `=`: used to assign the value of one operand to another. It assigns the value of the right operand to the left operand.
- `+=`: used to add the value of one operand to another. It adds the value of the right operand to the left operand and assigns the result to the left operand.
- `-=`: used to subtract the value of one operand from another. It subtracts the value of the right operand from the left operand and assigns the result to the left operand.
- `*=`: used to multiply the value of one operand with another. It multiplies the value of the right operand with the left operand and assigns the result to the left operand.
- `/=`: used to divide the value of one operand with another. It divides the value of the right operand with the left operand and assigns the result to the left operand.
- `%=`: used to find the remainder of the division of one operand with another. It divides the value of the right operand with the left operand and assigns the remainder to the left operand.

## **Bitwise Operators**

Bitwise operators are operatr on bits and perform bit-by-bit operations. They are used to perform the following operations:

- `&`: **AND operator**. It gives the value of the left operand if it is set in the right operand.

eg: let a=5, b=6 then a&b==?
| Variable | Value | Binary |
|:--------:|:-----:|:------:|
| a | 5 | 0101 |
| b | 6 | 0110 |
| a&b | 4 | 0100 |

<br>

- `|`: **OR operator**. It gives the value of the left operand if it is set in the right operand.

eg: let a=5, b=6 then a|b==?
| Variable | Value | Binary |
|:--------:|:-----:|:------:|
| a | 5 | 0101 |
| b | 6 | 0110 |
| a|b | 7 | 0111 |

<br>

- `^`: **XOR operator**. It gives the value of the left operand if it is set in the right operand.

eg: let a=5, b=6 then a^b==?
| Variable | Value | Binary |
|:--------:|:-----:|:------:|
| a | 5 | 0101 |
| b | 6 | 0110 |
| a^b | 3 | 0011 |

- `~`: **NOT operator**. It gives the value of the left operand if it is set in the right operand.

eg: let a=5, ~a==?
| Variable | Value | Binary |
|:--------:|:-----:|:------:|
| a | 5 | 0101 |
| ~a | | 1010 |

- `<<`: **LEFT SHIFT operator**. It shifts the bits of the left operand to the left and assigns the result to the left operand.

```js
eg: let 8 << 1 == ?
  (01000) << 1 == (10000) ==> 16
```

- `>>`: **RIGHT SHIFT operator**. It shifts the bits of the left operand to the right and assigns the result to the left operand.

```js
eg: let 8 >> 1 == ?
  (1000) >> 1 == (0100) ==> 4
```

here one thing to keep in mind that `>>` operator shifts the bits to the right and `<<` shifts the bits to the left. there is a way to find right shift and left shift of a number.

```java
Right Shift --> a >> n ==> a * 2^n
Left Shift --> a << n ==> a / 2^n
```

## **Other Operators**

This category contains the following operators:

- `condition ? true_expression : false_expression`: it evaluates the true_expression if the condition is true and false_expression if the condition is false.

```java
    // syntax
    // variable = Expression1 ? Expression2 : Expression3;

    public class Main
   {
	public static void main(String[] args) {
	 int num=15;
     String msg = num > 10 
  ? "Number is greater than 10" 
  : "Number is less than or equal to 10";
  System.out.println(msg);
    }
}

```

- `typecasting`: it converts the value of the operand to the type of the right operand.
eg:
```java
public class Main
   {
	public static void main(String[] args) {
	char ch = 'a';
    int typecasted_character = (int)'a';
    System.out.println(ch);
    System.out.println(typecasted_character);
    }
}
```
## **Operators Precedence**

Operators Precedence is the order in which the operators are evaluated. Below is the precedence of the operators.
