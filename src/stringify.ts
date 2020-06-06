export function stringify(val: unknown): string {
  if (isString(val)) return stringifyString(val)
  if (isFunction(val)) return stringifyFunction(val)
  if (isArray(val)) return stringifyArray(val)
  if (isObject(val)) return stringifyObject(val)
  return `${val}`
}

function isArray<T>(val: unknown): val is T[] {
  return Array.isArray(val)
}

function isObject(val: unknown): val is object {
  return typeof val === 'object'
}

function isFunction(val: unknown): val is (...args: any) => any {
  return typeof val === 'function'
}

function isString(val: unknown): val is string {
  return typeof val === 'string'
}

function stringifyFunction(val: (...args: any) => any): string {
  return val.toString()
}

function stringifyString(val: string): string {
  return JSON.stringify(val)
}

function stringifyObject(val: object): string {
  return JSON.stringify(val)
}

function stringifyArray<T>(val: T[]): string {
  return JSON.stringify(val)
}
