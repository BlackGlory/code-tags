import { isObject, isFunction, isString } from '@blackglory/types'

export function stringify(val: unknown): string {
  if (isString(val)) return stringifyString(val)
  if (isFunction(val)) return stringifyFunction(val)
  if (Array.isArray(val)) return stringifyArray(val)
  if (isObject(val)) return stringifyObject(val)
  return `${val}`
}

function stringifyFunction(val: (...args: any) => any): string {
  return val.toString()
}

function stringifyString(val: string | String): string {
  return JSON.stringify(val)
}

function stringifyObject(val: object): string {
  return JSON.stringify(val)
}

function stringifyArray<T>(val: T[]): string {
  return JSON.stringify(val)
}
