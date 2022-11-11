import * as fs from 'fs'
import * as path from 'path'

const values = fs.readFileSync(path.resolve('values.txt'), { encoding: 'utf-8' })
const valuesSplit = values.split("\r\n")
type range = string | number
function countValid(input: string[]) {
    let valid = 0
    for (let value of input) {
        const data = value.split(" ")
        const range = data[0].split("-")
        const character = data[1].replace(":", "")
        const password = data[2].split("")
        const count = password.filter(letter => letter == character).length
        if (count >= Number(range[0]) && count <= Number(range[1])) {
            console.log(count, range)
            valid++
        }
    }
    return valid //?
}

countValid(valuesSplit) //?.

function positionValid(input: string[]) {
    let valid = 0
    for (let value of input) {
        const data = value.split(" ")
        let range: range[] = data[0].split("-")
        range[0] = Number(range[0])-1
        range[1] = Number(range[1])-1
        const character = data[1].replace(":", "")
        const password = data[2].split("")
        if ((password[range[0]] == character || password[range[1]] == character) && !(password[range[0]] == character && password[range[1]] == character)) {
            valid++
        }
    }
    return valid //?
}

positionValid(valuesSplit) //?.