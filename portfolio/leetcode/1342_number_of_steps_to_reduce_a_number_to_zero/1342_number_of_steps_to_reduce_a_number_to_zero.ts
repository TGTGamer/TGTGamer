export function v1(num: number, count: number = 0): number {
  if (num == 0) return count
  num = num / 2
  if (Number.isInteger(num)) {
    count++
  } else {
    count = count + 2
  }
  
  num = Math.floor(num) 
  if (num == 1) return count + 1
  return num === 0 ? count : v1(num, count);
}

v1(100)

export function v2(num: number, count: number = 0): number {
  if (num == 0) return count
  const remain = num % 2
  if (remain == 1) {
    num = num - 1
  } else {
    num = num / 2 
  }
  count++
  return num === 0 ? count : v2(num, count);
}

v2(100)


export function v3(num: number, count: number = 0): number {
  while (num !== 0) {
    num = num%2 == 1 ? num-1 : num/2
    count++
  }
  return count
}

v3(100)

export function v4(num: number): number {
  let count = 0
  while (num !== 0) {
    num = num%2 == 1 ? num-1 : num/2
    count++
  }
  return count
}

v4(100)

export function v5(num: number, count: number = 0): number {
  while (num > 1) {
    num = num / 2
    Number.isInteger(num) ? count++ : count = count + 2
    num = Math.floor(num)
  }
  if (num == 1) count++
  return count
}

v5(100)

