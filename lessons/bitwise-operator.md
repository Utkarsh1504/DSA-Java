---
path: "/bitwise-operator"
title: "Complete Bitwise Operators"
order: "10B"
section: "Maths for DSA"
description: "learn maths required in DSA"
---
In this lesson, we are going to learn about the bit-wise operators, and some Bit-manipulation techniques to get optimized solutions. These concepts are very important from competitive programming as well as interviews point of view. Okay, so let's learn these techniques:

## Bit Manipulation

Bit manipulation is the process of applying logical operations on a sequence of bits, the smallest form of data in a computer, to achieve a required result. Bit manipulation has constant time complexity and process in parallel, meaning it is very efficient on all systems.

Most programming languages will have you work with abstractions, like objects or variables, rather than the bits they represent. However, direct bit manipulation is needed to improve performance and reduce error in certain situations.

Bit manipulation requires a strong knowledge of binary and binary conversion.

Here’s a few examples of tasks that require bit manipulation:

 * Low-level device control
 * Error detection and correction algorithms
 * Data compression
 * Encryption algorithms
 * Optimization

## Bitwise Manipulation and Coding Interviews
Bit manipulation is also a common topic in coding interviews, especially with FAANG companies. These interviewers expect you to have a basic understanding of bits, fundamental bit operators, and generally understand the thought process behind bit manipulation.
> Having this knowledge demonstrates that you’re a well-rounded developer who understands both the specific tools and the foundation of computer science.

If you’re applying for a role that will work with embedded systems or other low-level systems, you’ll encounter more bit questions. In short, the closer your role is to machine level, the more bit manipulation questions you’ll encounter.

The best way to prepare for bit manipulation questions is to practice using each bitwise operator and brush up on your binary to decimal conversions.
# Bitwise Operators In Java
You are no doubt familiar with the arithmetic operators such as + - * / or %. You are also aware of logical operators such as & or |. Turns out there is another, a slightly less known set of operators, which manipulate numbers on bit level. Internally, every number is stored in a binary format - that is 0 and 1. Bitwise operators are used for performing manipulation of bits of a number. These can be used with any type of integer data types (char, short, int, etc). 

These operators can be performed on integer types -

 * byte (8 bit)
 * short (16 bit)
 * int (32 bit)
 * long (64 bit), and even
 * char (16 bit)
 
Now let's see its type one by one:
 ## 1. Unary bitwise complement [~]
This fancy name basically means bit negation. It takes every single bit of the number and flips its value,i.e, ~0 becomes 1 and vice versa. It is the 1's complement of the number. Unary means that it needs just one operand. The operator is `~` and it is just placed before the number:
```java
a = 5 = 0101 (In Binary)

Bitwise Complement Operation of 5

~ 0101
 ________
  1010  = 10 (In decimal)
```
## 2. Bitwise AND [&]
Unlike bitwise complement operator, other bitwise operators need two operands.

A & B means that all the bits of both numbers are compared one by one and the resulting number is calculated based on values of the bits from numbers A and B. Bitwise AND is similar to logical AND in a sense that it results in 1 only when the two compared bits are both equal to 1. Otherwise, it results in 0.

For example: 1010 & 1100 would result in 1000 as the first bit from the left is the only one where both operands contain 1.
```java
a = 5 = 0101 (In Binary)
b = 7 = 0111 (In Binary)

Bitwise AND Operation of 5 and 7
  0101
& 0111
 ________
  0101  = 5 (In decimal)
```
## 3. Bitwise OR [ | ]
Bitwise OR results in 1 when at least one of the compared bits is 1 (or both), otherwise it results in 0.
```java
a = 5 = 0101 (In Binary)
b = 7 = 0111 (In Binary)

Bitwise OR Operation of 5 and 7
  0101
| 0111
 ________
  0111  = 7 (In decimal) 
```
## 4. Bitwise Exclusive OR (XOR) [^]
xclusive OR (XOR) results in 1 only if both the compared bits have a different value, otherwise, it results in 0.
```java
a = 5 = 0101 (In Binary)
b = 7 = 0111 (In Binary)

Bitwise XOR Operation of 5 and 7
  0101
^ 0111
 ________
  0010  = 2 (In decimal) 
```
|A	  |B   |A AND B   |A    B   |A XOR B   |
|-----|----|----------|---------|----------|
|1	  |0   |0         |1        |1         |
|0	  |1   |0         |1        |1         |
|1	  |1   |1         |1        |0         |
|0    |0   |0         |0        |0         |

```java
// Java program to illustrate
// bitwise operators
public class operators {
    public static void main(String[] args)
    {
        // Initial values
        int a = 5;
        int b = 7;
 
        // bitwise and
        // 0101 & 0111=0101 = 5
        System.out.println("a&b = " + (a & b));
 
        // bitwise or
        // 0101 | 0111=0111 = 7
        System.out.println("a|b = " + (a | b));
 
        // bitwise xor
        // 0101 ^ 0111=0010 = 2
        System.out.println("a^b = " + (a ^ b));
 
        // bitwise not
        // ~0101=1010
        // will give 2's complement of 1010 = -6
        System.out.println("~a = " + ~a);
 
        // can also be combined with
        // assignment operator to provide shorthand
        // assignment
        // a=a&b
        a &= b;
        System.out.println("a= " + a);
    }
}
```
### Output:
```
a&b = 5
a|b = 7
a^b = 2
~a = -6
a= 5
```
## 5. Signed Left Shift [<<]
Signed Left Shift takes two operands. It takes the bit pattern of the first operand and shifts it to the left by the number of places given by the second operand. For example 5 << 3: What happens in this case - Every bit in the binary representation of the integer 5 is shifted by 3 positions to the left. All the places on the left are padded by zeros. That is: `00000101` becomes `00101000`. 

You can note that the integer result of 5 << 3 is 40. That shows that shifting a number by one is equivalent to multiplying it by 2, or more generally left shifting a number by n positions is equivalent to multiplication by `2^n`. In this case, it is 5*2^3 = 40.

 * Even though you can use shifting of byte, short or char, they are promoted to 32-bit integer before the shifting
 * Bit-shift operators never throw an exception
 * The right operand (the number of positions to shift) is reduced to modulo 32. That is 5 <<35 is equivalent to 5 << 3.
```java
a = 5 = 0000 0101
b = -10 = 1111 0110

a << 1 = 0000 1010 = 10
a << 2 = 0001 0100 = 20 

b << 1 = 1110 1100 = -20
b << 2 = 1101 1000 = -40 
```
## 6. Signed Right Shift [>>]
Signed right shift moves all the bits by given number of positions to the right. However, it preserves the sign. Positive numbers remain positive and negative ones remain negative. Similar to left shift, the right shift of n positions is equivalent to division by 2^n. Or division by 2^n -1 in case of odd numbers.
```java
a = 10
a>>1 = 5 

Example 2:
a = -10 
a>>1 = -5
We preserve the sign bit.
```
## 7. Unsigned Right Shift [>>>]
Unlike the signed shift, the unsigned one does not take sign bits into consideration, it just shifts all the bits to the right and pads the result with zeros from the left. That means that for negative numbers, the result is always positive. Signed and unsigned right shifts have the same result for positive numbers.
```java
a = 10
a>>>1 = 5

a = -10 
a>>>1 = 2147483643
DOES NOT preserve the sign bit. 
```
This operator shifts the first operand to the specified number of bits to the right. Excess bits shifted off to the right are `discarded`. Zero bits are shifted in from the left. The sign bit becomes 0, so the result is `always non-negative`. Unlike the other bitwise operators, zero-fill right shift returns an unsigned 32-bit integer.

For non-negative numbers, zero-fill right shift and sign-propagating right shift yield the same result. For example, 9 >>> 2 yields 2, the same as 9 >> 2:
## 8. Unsigned Left Shift [<<<]
Unlike unsigned Right Shift, there is no “<<<” operator in Java, because the logical (<<) and arithmetic left-shift (<<<) operations are identical. 
```java
9 (base 10): 00000000000000000000000000001001 (base 2)
9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```
However, this is not the case for negative numbers. For example, -9 >>> 2 yields 1073741821, which is different than -9 >> 2 (which yields -3):
```java
-9 (base 10): 11111111111111111111111111110111 (base 2)
-9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

|Operator  |Example     |Is equivalent to  |
|----------|------------|------------------|
|OR=	      |x OR= 5	    |x = x OR 5        |
|^=	       |x ^= 5	     |x = x ^ 5         |
|&=	       |x &= 5      |x = x & 5         |
|<<=	      |x <<= 5	    |x = x << 5        |
|>>=	      |x >>= 5	    |x = x >> 5        |
|>>>=	     |x >>>= 5  	 |x = x >>> 5       |

```java
// Java program to illustrate
// shift operators
public class operators {
    public static void main(String[] args)
    {
 
        int a = 5;
        int b = -10;
 
        // left shift operator
        // 0000 0101<<2 =0001 0100(20)
        // similar to 5*(2^2)
        System.out.println("a<<2 = " + (a << 2));
 
        // right shift operator
        // 0000 0101 >> 2 =0000 0001(1)
        // similar to 5/(2^2)
        System.out.println("b>>2 = " + (b >> 2));
 
        // unsigned right shift operator
        System.out.println("b>>>2 = " + (b >>> 2));
    }
}
```
### Output:
```
a<<2 = 20
b>>2 = -3
b>>>2 = 1073741821
```
## Bitwise Tricks And Some Questions
Now, let’s look at a few tricks you can do using bitwise operators.

These are often used as interview questions to check if you’ve reviewed basic bit manipulation and can apply it to day-to-day coding tasks.
### Q1. Check for EVEN / ODD
To check a number is even or odd, we need to look at the number in its binary form first, lets take an eg, 4 ,i.e, `0100`, if we look carefully then we will find out that the 1 present in the number is at `power of 2` position, lets take another example now, 6 ,i.e, `0110`, here both the 1's are at `power of 2` position and now we can conclude that in binary form if the number is at power of 2 position the it is even. Lets check for odd no. now, eg, 5 ,i.e, `0101` here the least significant digit(or `LSD`) is `not` at the `power of 2` position and thus it is odd.

Now, lets look how to solve this,

if we and a number with one then we know we get back that original number, so if we and the last digit with one and if we get 1 then it would be a odd number else it would be even.
```java
if (x & 1 ) == 0
  return true;
else
  return false;
```
### Q2. Convert characters to uppercase / lowercase
This trick tests your knowledge of uppercase and lowercase characters in binary. You can convert any character, `ch`, to the opposite case using `ch ^= 32`.

This is because the binary representation of lowercase and uppercase letters are nearly identical, with only 1 bit of difference.

Using the XOR operation lets us toggle that single bit and swap it to the opposite value, therefore making a lowercase character uppercase or vice versa.
```java
public class Test 
{ 
      
    static int x=32; 
      
    // tOGGLE cASE = swaps CAPS to lower 
    // case and lower case to CAPS 
    static String toggleCase(char[] a) 
    { 
        for (int i=0; i<a.length; i++) { 
        
            // Bitwise XOR with 32 
            a[i]^=32; 
        } 
        return new String(a); 
    } 
      
    /* Driver program */
    public static void main(String[] args)  
    { 
        String str = "CheRrY"; 
        System.out.print("Toggle case: "); 
        str = toggleCase(str.toCharArray()); 
        System.out.println(str); 
          
        System.out.print("Original string: "); 
        str = toggleCase(str.toCharArray()); 
        System.out.println(str);     
    } 
} 
```
### Output:
```
Toggle case: cHErRy
Original string: CheRrY
```
### Q3. Find Number of Setbits
```java
class CountSetBit {
    private static int helper(int n) {
        int count = 0;
        while (n > 0) {
            n &= (n - 1);
            count++;
        }
        return count;
    }
 
    public static void main(String[] args) {
        int number = 125;
        System.out.println("SetBit Count is : " + helper(number));
    }
}
```
### Output:
```
SetBit Count is : 6
```

In this approach, we count only the set bits. So,

 * If a number has 2 set bits, then the while loop runs two times.
 * If a number has 4 set bits, then the while loop runs four times.
### Q4. Single Number
You are given an array in which every number appears twice except one number, return that number.
```java
class SingleNumber {
    private static int singleNumber(int[] nums) {
        int xor = 0;
        for (int num : nums) {
            xor ^= num;
        }
        return xor;
    }
 
    public static void main(String[] args) {
        int[] nums = {4, 1, 2, 9, 1, 4, 2};
        System.out.println("Element appearing one time is " + singleNumber(nums));
    }
}
```
### Output:
```
Element appearing one time is 9
```
This solution relies on the following logic:

 * If we take XOR of zero and some bit, it will return that bit: a ^ 0 = a
 * If we take XOR of two same bits, it will return 0: a ^ a = 0
 * For n numbers, the below math can be applied: a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b

Therefore, we can XOR all bits together to find the unique number.
### Q5. Get First Set Bit
```java
class FirstSetBitPosition {
    private static int helper(int n) {
        if (n == 0) {
            return 0;
        }
 
        int k = 1;
 
        while (true) {
            if ((n & (1 << (k - 1))) == 0) {
                k++;
            } else {
                return k;
            }
        }
    }
 
    public static void main(String[] args) {
        System.out.println("First setbit position for number: 18 is -> " + helper(18));
        System.out.println("First setbit position for number: 5 is -> " + helper(5));
        System.out.println("First setbit position for number: 32 is -> " + helper(32));
    }
}
```
### Output:
```
First setbit position for number: 18 is -> 2
First setbit position for number: 5 is -> 1
First setbit position for number: 32 is -> 6
```
The logic of this solution relies on a combination of left shifting and the AND operation.

Essentially, we first check if the rightmost significant bit is the set bet using `bit & 1`. If not, we keep shifting left and checking until we find the bit that makes our AND operation yield 1.

The number of shifts is tracked by our pointer, k. Once we do find the set bit, we return k as our answer.

---
