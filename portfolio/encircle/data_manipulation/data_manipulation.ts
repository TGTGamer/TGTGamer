export type obj = {
    "id": string | number,
    "ManufacturerID": string | number,
    "width": string | number,
    "profile": string | number,
    "rim": string | number,
    "speed": string,
    "load": string | number,
    "description": string,
    "part_no": string,
    "pattern": string,
    "manufacturer": string,
    "extra_load": string,
    "run_flat": string,
    "winter": string | number,
    "summer": string | number,
    "OEList": string,
    "price": string | number,
    "tyre_class": string,
    "rolling_resistance": string,
    "wet_grip": string,
    "Graphic": string,
    "noise_db": string | number,
    "noise_rating": string | number,
    "info": string,
    "pattern_name": string,
    "recommended": string | number,
    "rating": string | number
}

export function expensive(json: Partial<obj>[]) {
    return jsonSort(json).pop()
}

export function cheapest(json: Partial<obj>[]) {
    return jsonSort(json).shift()
}

export function bySpeed(json: Partial<obj>[], speed: string) {
    const jsonFiltered = json.filter(value => value.speed == speed)
    return jsonSort(jsonFiltered)
}

export function byManufacturer(json: Partial<obj>[], name: string) {
    const jsonFiltered = json.filter(value => value.manufacturer == name)
    return averagePrice(jsonFiltered)
}

export function byMetricSorted(json: Partial<obj>[], filter: string, sortValue: string) {
    const jsonFiltered = json.filter(value => value[filter] == sortValue)
    return jsonSort(jsonFiltered)
}

export function byMetricAveraged(json: Partial<obj>[], filter: string, sortValue: string) {
    const jsonFiltered = json.filter(value => value[filter] == sortValue)
    return averagePrice(jsonFiltered)
}

export function averagePrice(json: Partial<obj>[]) {
    let totalPrice = 0
    json.forEach(value => {
        totalPrice += Number(value.price)
    })

    return totalPrice / json.length
}

export function jsonSort(json: Partial<obj>[]) {
    return json.sort((a, b) => Number(a.price) - Number(b.price)).map(value => {
        return {
            price: value.price,
            name: value.description,
        }
    })
}
