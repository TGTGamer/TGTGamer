import * as fs from 'fs'
import * as path from 'path'
const input = fs.readFileSync(path.resolve("input.txt"), {encoding: "utf8"})
let passports = input.split("\r\n\r\n")

passports.forEach(pass => {
    pass //?
    console.log(pass.replace("\r\n", " ").split(" "))
})