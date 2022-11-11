export function maximumWealthV2(accounts: Array<number[]>): number {
		const result = accounts.reduce((prev, curr) => {
			const sum = curr.reduce((prev, curr) => prev + curr, 0)
			return sum >= prev ? sum : prev
		}, 0)
		return result
};

maximumWealthV2([[1,2,3],[3,2,1]])
maximumWealthV2([[1,5],[7,3],[3,5]])


export function maximumWealth(accounts: Array<number[]>): number {
	let result: number = 0

	for (let account of accounts) {
		let total: number = 0
		for (let sum of account) {
			total += sum
		}
		result = total > result ? total : result
	}

	return result
};

maximumWealth([[1,2,3],[3,2,1]])
maximumWealth([[1,5],[7,3],[3,5]])