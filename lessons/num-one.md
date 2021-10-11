---
path: "/num-one"
title: "Number Theory Part-A"
order: "10C"
section: "Maths for DSA"
description: "learn maths required in DSA"
---
In this article we would be covering number theory basics.

The three topics covered in this article are as follows
- Introduction
- Prime numbers
- Sieve of Eratosthenes + complexity analysis

## **Introduction**
In mathematics and computer science, computational number theory, also known as algorithmic number theory, is the study of computational methods for investigating and solving problems in number theory and arithmetic geometry, including algorithms for primality testing and integer factorization.There are many surprising connections between the theory of numbers, which is one of the oldest branches of mathematics, and computing and information theory. Number theory has important applications in computer organization and security, coding and cryptography, random number generation, hash functions, and graphics. Conversely, number theorists use computers in factoring large integers, determining primes, testing conjectures, and solving other problems. This book takes the reader from elementary number theory, via algorithmic number theory, to applied number theory in computer science. It introduces basic concepts, results, and methods, and discusses their applications in the design of hardware and software, cryptography, and security. It is aimed at undergraduates in computing and information technology, including electrical and electronic engineering, but will also be valuable to mathematics students interested in applications. It presupposes only high-shool math.

## **Prime numbers**
A prime number is a natural number greater than 1, which is only divisible by 1 and itself. First few prime numbers are : 2 3 5 7 11 13 17 19 23 …..\

**Some interesting fact about Prime numbers** 

- Two is the only even Prime number.
- Every prime number can be represented in form of 6n+1 or 6n-1 except the prime number 2 and 3, where n is a natural number.
- Two and Three are only two consecutive natural numbers that are prime.
- Goldbach Conjecture: Every even integer greater than 2 can be expressed as the sum of two primes.
- Prime Number Theorem: The probability that a given, randomly chosen number n is prime is inversely proportional to its number of digits, or to the logarithm of n.
- Lemoine’s Conjecture: Any odd integer greater than 5 can be expressed as a sum of an odd prime (all primes other than 2 are odd) and an even semiprime. A semiprime number is a product of two prime numbers. This is called Lemoine’s conjecture.

**How to check if a number is a prime number**

#### Semantics
```java
// Java program to check whether a number
// is prime or not using recursion
class GFG{
	
static int i = 2;

// Function check whether a number
// is prime or not
public static boolean isPrime(int n)
{
	
	// Corner cases
	if (n == 0 || n == 1)
	{
		return false;
	}

	// Checking Prime
	if (n == i)
		return true;
		
	// Base cases
	if (n % i == 0)
	{
		return false;
	}
	i++;
	return isPrime(n);
}

// Driver Code
public static void main(String[] args)
{
	if (isPrime(35))
	{
		System.out.println("true");
	}
	else
	{
		System.out.println("false");
	}
}
}
```
## **Sieve of Eratosthenes + complexity analysis**
The sieve of Eratosthenes is one of the most efficient ways to find all primes smaller than n when n is smaller than 10 million or so.Following is the algorithm to find all the prime numbers less than or equal to a given integer n by the Eratosthene’s method: 
When the algorithm terminates, all the numbers in the list that are not marked are prime.

#### Semantics
```java
// Java program to print all
// primes smaller than or equal to
// n using Sieve of Eratosthenes

class SieveOfEratosthenes {
	void sieveOfEratosthenes(int n)
	{
		// Create a boolean array
		// "prime[0..n]" and
		// initialize all entries
		// it as true. A value in
		// prime[i] will finally be
		// false if i is Not a
		// prime, else true.
		boolean prime[] = new boolean[n + 1];
		for (int i = 0; i <= n; i++)
			prime[i] = true;

		for (int p = 2; p * p <= n; p++)
		{
			// If prime[p] is not changed, then it is a
			// prime
			if (prime[p] == true)
			{
				// Update all multiples of p
				for (int i = p * p; i <= n; i += p)
					prime[i] = false;
			}
		}

		// Print all prime numbers
		for (int i = 2; i <= n; i++)
		{
			if (prime[i] == true)
				System.out.print(i + " ");
		}
	}

	// Driver Code
	public static void main(String args[])
	{
		int n = 30;
		System.out.print(
			"Following are the prime numbers ");
		System.out.println("smaller than or equal to " + n);
		SieveOfEratosthenes g = new SieveOfEratosthenes();
		g.sieveOfEratosthenes(n);
	}
}

```

**Time complexity analysis**
The core part of this algorithm is to mark the composite numbers and remove them from the list L by assigning 0. Now to mark a composite number and assign the value 0 to it takes O(1) time. The real complexity of this algorithm lies in the number of times the loops run to mark the composite numbers.

In order to remove the composite numbers, we assign the value  to the multiples of the current prime number in L. Now let’s assume our current prime number is 2. In the first iteration, we’ll mark N/2 elements. Like this, when our current prime number is 3, we assign 0 to N/3 composite numbers. The total number times we runs the loop would be equal to:\

N/2+N/3+N/5+N/7....\
N*(1/2+1/3+1/5...)\

Using Harmonic Progression of the sum of primes, it can be proved that: total time complexity of the Sieve of Eratosthenes algorithm would be O(Nlog(log(N)))}.







