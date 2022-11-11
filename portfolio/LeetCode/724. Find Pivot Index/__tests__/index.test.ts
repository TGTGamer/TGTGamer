import * as src from '../src'

test('Test Case', async () => {
    expect(src.pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3)
})
test('Test Case', async () => {
    expect(src.pivotIndex([1, 2, 3])).toBe(-1)
})
test('Test Case', async () => {
    expect(src.pivotIndex([2, 1, -1])).toBe(0)
})
test('Test Case', async () => {
    expect(src.pivotIndexSlow([1, 7, 3, 6, 5, 6])).toBe(3)
})
test('Test Case', async () => {
    expect(src.pivotIndexSlow([1, 2, 3])).toBe(-1)
})
test('Test Case', async () => {
    expect(src.pivotIndexSlow([2, 1, -1])).toBe(0)
})