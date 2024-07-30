import * as fs from "node:fs";

/**
 * returns 'hello world'
 */
export function detectDomain(path: string) {
    const html = importFile(path)

    const regex = new RegExp(/\(https?:\/\/[^)]*\)/, "g")

    const result = html.match(regex) //?

    return result.map(value => value.trim().slice(1, -1)).sort() //?
}

export function importFile(path: string) {
    // check the file exists
    if (!fs.existsSync(path)) {
        throw new Error('File does not exist');
    }

    // import the file
    return fs.readFileSync(path, "utf-8")
}

//temp path
const path = "C:\\Users\\TGTGa\\WebstormProjects\\TGTGamer\\portfolio\\encircle\\detect_domain\\task_1.html"

detectDomain(path) //?
