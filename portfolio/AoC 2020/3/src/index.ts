import * as fs from 'fs'
import * as path from 'path'
const input = fs.readFileSync(path.resolve("input.txt"), {encoding: "utf8"})
const levelDesign = input.split("\r\n")
function checkTrees(levels: string[], right: number, down: number) {
    let location = 0
    let trees = 0
    for (let level = 0; level < levels.length; level = level + down) {
        const map = levels[level].trim()
        if (location >= map.length) location = location % map.length
        if (map[location] == "#") trees++
        location = location + right
    }
    return trees
}
function checkTreesv2(levels: string[], right: number, down: number) {
    let location = 0
    let trees = 0
    for (let level = 0; level < levels.length; level = level + down) {
        let map = levels[level].trim()
        while (location > map.length) map = map+map
        if (map[location] == "#") trees++
        location = location + right
    }
    return trees
}
checkTrees(levelDesign, 3, 1) //?. $ 
checkTreesv2(levelDesign, 3, 1) //?. $


function multiply(input: number[][]) {
    let returnable: number = 0
    input.forEach(route => {
        const trees = checkTrees(levelDesign, route[0], route[1]) //?
        if (returnable == 0) returnable = trees
        else returnable = returnable*trees
    })
    return returnable
}

multiply([[1,1], [3,1], [5,1], [7,1], [1,2]]) //?