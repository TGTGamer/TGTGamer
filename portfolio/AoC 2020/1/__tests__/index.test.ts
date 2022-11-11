import { get2, get3 } from '../src'
import { acc } from '../values'

const accounts: number[] = [
    1721,
    979,
    366,
    299,
    675,
    1456
]

test('check default values', async () => {
    let values = await get2(accounts)
    expect(values[0] * values[1]).toBe(514579)
})

test('check my values for 2', async () => {
    let values = await get2(acc)
    expect(values[0] + values[1]).toBe(2020)
    console.log(values[0] * values[1])
})

test('check default values', async () => {
    let values = await get3(accounts)
    expect(values[0] * values[1] * values[2]).toBe(241861950)
})


test('check my values for 3', async () => {
    let values = await get3(acc)
    expect(values[0] + values[1] + values[2]).toBe(2020)
    console.log(values[0] * values[1] * values[2])
})