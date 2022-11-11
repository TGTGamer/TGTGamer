import { acc } from '../values'

export function get2(accounts: number[]) {
    let result: number[] = []
    accounts.forEach(x => {
        if (result.length !== 0) return
        x //?
        for (let y = accounts.length; y >= 0; y--) {
            accounts[y] //?
            if (accounts[y] + x == 2020) {
                result = [accounts[y], x] //?
            }
        }
    })
    return result //?
}

export function get3(accounts: number[]) {
    let result: number[] = []
    accounts.forEach(x => {
        if (result.length !== 0) return
        x //?
        for (let y = accounts.length - 1; y >= 0; y--) {
            if (result.length !== 0) return
            accounts[y] //?
            const totalLeft = 2020 - (accounts[y] + x) //?
            if (totalLeft < 2020) {
                const value = accounts.find(value => value == totalLeft) //?
                if (value) result = [accounts[y], x, value] //?
            }
        }

    })
    return result //?
}

get2(acc) //?.
get3(acc) //?.

export function getall(accounts: number[], nums: number) {
    let result: number[] = []
    accounts.forEach(x => {
        if (result.length !== 0) return
        x //?
        for (let y = accounts.length - 1; y >= 0; y--) {
            if (result.length !== 0) return
            accounts[y] //?
            const totalLeft = 2020 - (accounts[y] + x) //?
            if (totalLeft < 2020) {
                const value = accounts.find(value => value == totalLeft) //?
                if (value) result = [accounts[y], x, value] //?
            }
        }

    })
    return result //?
}

getall(acc, 3) //?.