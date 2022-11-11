import * as src from '../src'

test('Test Case', async () => {
    expect(src.runningSum([1, 2, 3, 4])).toBe(
        [1, 3, 6, 10])
})

test('Test Case', async () => {
    expect(src.runningSumv2([1, 2, 3, 4])).toBe(
        [1, 3, 6, 10])
})