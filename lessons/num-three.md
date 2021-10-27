---
path: "/num-three"
title: "Number Theory Part-C"
order: "10E"
section: "Maths for DSA"
description: "learn maths required in DSA"
---

In this article we will cover number theory.

The six topics covered in this article
-Mathematical Expectation
-Fermat's theorem
-Wilson's theorem
-Lucas theorem
-Chinese Remainder theorem
-NP-Completeness

## **Mathmatical Expectation**

Mathematical Expectation is an important concept in Probability Theory.This article attempts to throw some light on this topic by discussing few related mathematical and programming problems.

Mathematical expectation, also known as the expected value, which is the summation of all possible values from a random variable.It is also known as the product of the probability of an event occurring, denoted by P(x), and the value corresponding with the actually observed occurrence of the event.
The mathematical expectation is denoted by the formula:
> E(X)= Σ (x1p1, x2p2, …, xnpn)

It is important to understand that "expected value" is not same as "most probable value" - rather, it need not even be one of the probable values. For example, in a dice-throw experiment, the expected value,  is not one of the possible outcomes at all.
>The rule of "linearity of of the expectation" says that E[x1+x2] = E[x1] + E[x2].

## **Fermat's Theoram**

Fermat's theoram is also known as fermat little theoram.
Fermat’s little theorem states that if p is a prime number, then for any integer a, the number a^p – a is an integer multiple of p.
> Here p is a prime number ap ≡ a (mod p) 

>Take an Example How Fermat’s little theorem works 
##Examples: 
 

 P = an integer Prime number   
 a = an integer which is not multiple of P  
 Let a = 2 and P = 17 
 
 According to Fermat's little theorem 
  2^(17 - 1)     ≡ 1 mod(17)
 we got  65536 % 17 ≡ 1   
 that mean (65536-1) is an multiple of 17 
 // Java program to find modular
// inverse of a under modulo m
// using Fermat's little theorem.
// This program works only if m is prime.

class Main
{
	static int __gcd(int a, int b)
	{
	
		if(b == 0)
		{
			return a;
		}
		else
		{
			return __gcd(b, a % b);
		}
	}
	
	// To compute x^y under modulo m
	static int power(int x,int y,int m)
	{
		if (y == 0)
			return 1;
		int p = power(x, y / 2, m) % m;
		p = (p * p) % m;
	
		return (y % 2 == 0) ? p : (x * p) % m;
	}
	
	// Function to find modular
	// inverse of a under modulo m
	// Assumption: m is prime
	static void modInverse(int a, int m)
	{
		if (__gcd(a, m) != 1)
			System.out.print("Inverse doesn't exist");
	
		else {
	
			// If a and m are relatively prime, then
			// modulo inverse is a^(m-2) mode m
			System.out.print("Modular multiplicative inverse is "
											+power(a, m - 2, m));
		}
	}
	
	
	// Driver code
	public static void main (String[] args)
	{
		int a = 3, m = 11;
		modInverse(a, m);
	}
}

## **Wilson's Theoram**

Wilson’s theorem states that a natural number p > 1 is a prime number if and only if
**(p - 1) ! ≡  -1   mod p 
OR  (p - 1) ! ≡  (p-1) mod p

##Examples:
p  = 5
(p-1)! = 24
24 % 5  = 4

p  = 7
(p-1)! = 6! = 720
720 % 7  = 6

**Proof:
It is easy to check the result when n is 2 or 3, so let us assume n > 3. If n is composite, then its positive divisors are among the integers 1, 2, 3, 4, ... , n-1 and it is clear that gcd( (n-1)! , n) > 1, so we can not have (n-1)! = -1 (mod n).

However if n is prime, then each of the above integers are relatively prime to n. So for each of these integers a there is another b such that ab = 1 (mod n). It is important to note that this b is unique modulo n, and that since n is prime, a = b if and only if a is 1 or n-1. Now if we omit 1 and n-1, then the others can be grouped into pairs whose product is one showing

2.3.4.....(n-2) = 1 (mod n)

(or more simply (n-2)! = 1 (mod n)). Finally, multiply this equality by n-1 to complete the proof.

## **Lucas Theoram**

Lucas theorem basically suggests that the value of nCr can be computed by multiplying results of niCri where ni and ri are individual same-positioned digits in base p representations of n and r respectively..
The idea is to one by one compute niCri for individual digits ni and ri in base p.Since these digits are in base p, we would never need more than O(p) space and time complexity of these individual computations would be bounded by O(p2).

// A Lucas Theorem based solution to compute nCr % p

class Lucas{
// Returns nCr % p. In this Lucas Theorem based program,
// this function is only called for n < p and r < p.

static int nCrModpDP(int n, int r, int p)
{
	// The array C is going to store last row of
	// pascal triangle at the end. And last entry
	// of last row is nCr
	int[] C=new int[r+1];

	C[0] = 1; // Top row of Pascal Triangle

	// One by constructs remaining rows of Pascal
	// Triangle from top to bottom
	for (int i = 1; i <= n; i++)
  
	{
		// Fill entries of current row using previous
		// row values
		for (int j = Math.min(i, r); j > 0; j--)

			// nCj = (n-1)Cj + (n-1)C(j-1);
			C[j] = (C[j] + C[j-1])%p;
	}
	return C[r];
}

// Lucas Theorem based function that returns nCr % p
// This function works like decimal to binary conversion
// recursive function. First we compute last digits of
// n and r in base p, then recur for remaining digits
static int nCrModpLucas(int n, int r, int p)
{
// Base case

if (r==0)
	return 1;

// Compute last digits of n and r in base p
int ni = n%p;
int ri = r%p;

// Compute result for last digits computed above, and
// for remaining digits. Multiply the two results and
// compute the result of multiplication in modulo p.
return (nCrModpLucas(n/p, r/p, p) * // Last digits of n and r
		nCrModpDP(ni, ri, p)) % p; // Remaining digits
}

// Driver program

public static void main(String[] args)
{
	int n = 1000, r = 900, p = 13;
	System.out.println("Value of nCr % p is "+nCrModpLucas(n, r, p));
}
}

## **Chinese Remainder Theoram**

**Chinese Remainder Theorem states that there always exists an x that satisfies given congruences.

Let num[0], num[1], …num[k-1] be positive integers that are pairwise coprime. Then, for any given sequence of integers rem[0], rem[1], … rem[k-1], there exists an integer x solving the following system of simultaneous congruences.
A Naive Approach to find x is to start with 1 and one by one increment it and check if dividing it with given elements in num[] produces corresponding remainders in rem[]. Once we find such an x, we return it. 

// A Java program to demonstrate the working of Chinese remainder
// Theorem
import java.io.*;

class GFG {
	
	// k is size of num[] and rem[]. Returns the smallest
	// number x such that:
	// x % num[0] = rem[0],
	// x % num[1] = rem[1],
	// ..................
	// x % num[k-2] = rem[k-1]
	// Assumption: Numbers in num[] are pairwise coprime
	// (gcd for every pair is 1)
	static int findMinX(int num[], int rem[], int k)
	{
		int x = 1; // Initialize result
	
		// As per the Chinese remainder theorem,
		// this loop will always break.
		while (true)
		{
			// Check if remainder of x % num[j] is
			// rem[j] or not (for all j from 0 to k-1)
			int j;
			for (j=0; j<k; j++ )
				if (x%num[j] != rem[j])
				break;
	
			// If all remainders matched, we found x
			if (j == k)
				return x;
	
			// Else try next number
			x++;
		}
	
	}
	
	// Driver method
	public static void main(String args[])
	{
		int num[] = {3, 4, 5};
		int rem[] = {2, 3, 1};
		int k = num.length;
		System.out.println("x is " + findMinX(num, rem, k));
	}
}

## **NP-Completeness**
A problem is in the class NPC if it is in NP and is as hard as any problem in NP. A problem is NP-hard if all problems in NP are polynomial time reducible to it, even though it may not be in NP itself.

NP-hard
If a polynomial time algorithm exists for any of these problems, all problems in NP would be polynomial time solvable. These problems are called NP-complete. The phenomenon of NP-completeness is important for both theoretical and practical reasons.

##Definition of NP-Completeness
A language B is NP-complete if it satisfies two conditions

B is in NP

Every A in NP is polynomial time reducible to B.

If a language satisfies the second property, but not necessarily the first one, the language B is known as NP-Hard. Informally, a search problem B is NP-Hard if there exists some NP-Complete problem A that Turing reduces to B.

The problem in NP-Hard cannot be solved in polynomial time, until P = NP. If a problem is proved to be NPC, there is no need to waste time on trying to find an efficient algorithm for it. Instead, we can focus on design approximation algorithm.

**NP-Complete Problems
>Following are some NP-Complete problems, for which no polynomial time algorithm is known.

 -Determining whether a graph has a Hamiltonian cycle
 -Determining whether a Boolean formula is satisfiable, etc.
 
**NP-Hard Problems
>The following problems are NP-Hard

-The circuit-satisfiability problem
-Set Cover
-Vertex Cover
-Travelling Salesman Problem
-In this context, now we will discuss TSP is NP-Complete

**TSP is NP-Complete

The traveling salesman problem consists of a salesman and a set of cities. The salesman has to visit each one of the cities starting from a certain one and returning to the same city. The challenge of the problem is that the traveling salesman wants to minimize the total length of the trip






