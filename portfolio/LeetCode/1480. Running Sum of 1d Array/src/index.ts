
// Attempt one

export function runningSum(nums: number[]): number[] {
    // Let a total number so that we can only iterate once over the array
    let total: number = 0
    // Create a new array to store the running sum
    let runningSum: number[] = []
    // Iterate over the array
    nums.forEach(num => {
        total += num
        runningSum.push(total)
    })
    // return the running sum
    return runningSum
};

// Attempt two after realising I can add the previous number to the current number :facepalm:

export function runningSumv2(nums: number[]): number[] {
    // Create a new array to store the running sum
    let runningSum: number[] = []
    // Iterate over the array
    for (let i in nums) {
        runningSum.push(nums[i] + (Number(i) > 0 ? runningSum[Number(i) - 1] : 0))
    }
    return runningSum
};