import type {obj} from "@tgtgamer/encircle.data_manipulation"
import fs from "node:fs"
import path from "path"

const headers = [
    "Date",
    "Brand",
    "Pattern",
    "Tyre Size",
    "Season",
    "Class",
    "Rolling Resistance",
    "Wet Rating",
    "Noise Rating",
    "Price (£)"
]

export function jsonToCsv(json: obj[]) {
    const jsonMapped = json.map(value => {
        const line = [
            new Date().toDateString(),
            value.manufacturer, // think this is the brand?
            value.pattern,
            value.width,
            value.winter ? "Winter" : "Summer",
            value.tyre_class,
            value.rolling_resistance,
            value.wet_grip,
            value.noise_rating,
            value.price
        ]
        return line.join(", ")
    })

    return writeCSV(jsonMapped)
}

function writeCSV(json: string[]) {
    const headerString = headers.join(", ")
    const lines = json.join("\n") // adds new lines between each line
    const content = headerString + "\n" + lines
    fs.writeFileSync(
        path.join(process.cwd(), "portfolio/encircle/json_to_csv/output.csv"), //?
        content
    )
    return content
}
