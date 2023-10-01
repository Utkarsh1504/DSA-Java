class Solution
{
    // Complete the function
    // n: Input n
    // Return True if the given number is a lucky number else return False
    public static boolean isLucky(int n)
    {
        // Your code here
        for(int i=2; i<=n; i++){
            if(n%i==0) return false;
            n = n - n/i;
        }
        return true;
    }
}
