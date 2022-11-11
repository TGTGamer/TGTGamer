import * as src from '../src'

describe('maximumWealth', () => {

	test('1', () => {
		const param = [[1,2,3],[3,2,1]]
		const result = src.maximumWealth(param)
		expect(result).toBe(6)
	})

	test('2', () => {
		expect(
			src.maximumWealth([[1,5],[7,3],[3,5]])
		).toBe(10)
	})

	test('3', () => {
		expect(
			src.maximumWealth([[2,8,7],[7,1,3],[1,9,5]])
		).toBe(17)
	})
})

describe('maximumWealthV2', () => {

	test('1', () => {
		const param = [[1,2,3],[3,2,1]]
		const result = src.maximumWealth(param)
		expect(result).toBe(6)
	})

	test('2', () => {
		expect(
			src.maximumWealth([[1,5],[7,3],[3,5]])
		).toBe(10)
	})

	test('3', () => {
		expect(
			src.maximumWealth([[2,8,7],[7,1,3],[1,9,5]])
		).toBe(17)
	})
})