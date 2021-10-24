---
path: "/time_space_tradeoff"
title: "Time Space Tradeoff"
order: "7E"
section: "Space & Time Complexity"
description: "learn about time-space tradeoff"
---

# **Time-Space Trade-Off in Algorithms**

 Space-Time tradeoff in computer science is basically a problem solving technique in which we solve the problem:
 - Either in less time and using more space, or
 - In very little space by spending more time.
 
The best algorithm is the one which helps to solve a problem that requires less space in memory as well as takes less time to generate the output.But in general, it is not always possible to achieve both of these conditions at the same time.

If our problem is taking a long time but not much memory, a space-time trade-off would let us use more memory and solve the problem more quickly. Or, if it could be solved very quickly but requires more memory than we have, we can try to spend more time solving the problem in the limited memory.

## Types of Time-Space Trade-Off

- Lookup tables or Recalculation
- Compressed or Uncompressed data
- Re Rendering or Stored images
- Smaller code or loop unrolling

### *1. Lookup tables or Recalculation:*

 In a lookup table, an implementation can include the entire table which reduces computing time but increases the amount of memory required. It can recalculate i.e., compute table entries as needed, increasing computing time but reducing memory requirements.
 
### *2. Compressed or Uncompressed data:*

A space-time trade-off can be applied to the problem of data storage. If data stored is uncompressed, it takes more space but less time. But if the data is stored compressed, it takes less space but more time to run the decompression algorithm. 
There are many instances where it is possible to directly work with compressed data. In that case of compressed bitmap indices, where it is faster to work with compression than without compression.
 
### *3. Re Rendering or Stored images:*

 In this case, storing only the source and rendering it as an image would take more space but less time i.e., storing an image in the cache is faster than re-rendering but requires more space in memory.
 
### *4. Smaller code or loop unrolling:*

Smaller code occupies less space in memory but it requires high computation time that is required for jumping back to the beginning of the loop at the end of each iteration. Loop unrolling can optimize execution speed at the cost of increased binary size. It occupies more space in memory but requires less computation time.


### Example:

There are many algorithms that make use of time-space tradeoffs. Some of the algorithms are:
 - In the field of cryptography, using space-time trade-off, the attacker is decreasing the exponential time required for a brute-force attack. **Rainbow tables** use partially precomputed values in the hash space of a cryptographic hash function to crack passwords in minutes instead of weeks. Decreasing the size of the rainbow table increases the time required to iterate over the hash space. The meet-in-the-middle attack uses a space-time trade-off to find the cryptographic key in only 2^{n+1} encryptions (and O(2^{n}) space) compared to the expected 2^{2n} encryptions (but only O(1) space) of the normal attack.

- **Dynamic programming** is another example where the time of solving problems can be decreased by using more memory. Fibonacci problem can be solved faster with DP.
