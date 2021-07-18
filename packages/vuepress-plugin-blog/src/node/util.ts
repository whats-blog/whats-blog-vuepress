export function upperFirstChar(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Divided an interval into several equal-length intervals.
 */
export function getIntervals(max: number, per: number) {
  const count = max % per === 0 ? Math.floor(max / per) : Math.floor(max / per) + 1
  const arr = [...new Array(count)]
  return arr.map((_, index) => {
    const start = index * per
    const end = (index + 1) * per - 1
    return [start, Math.min(end, max)]
  })
}

/**
 * Parse num of milliseconds from date string or object
 */
export function parseDate(date: string | Date) {
  return date instanceof Date ? date.getTime() : Date.parse(date)
}
