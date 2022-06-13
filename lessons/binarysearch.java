// CODE:

class Solution {
    public int search(int[] nums, int target) {
        
int start = 0;
        int end = nums.length - 1;
        while(start <= end) {
            int mid = start + (end - start)/2;
            if(nums[mid] == target) {
                return mid;
            }
            else if(target < nums[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        return -1;
    }
}


// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
