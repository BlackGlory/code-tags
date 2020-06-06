import { stringify } from './stringify'

export function code(strings: TemplateStringsArray, ...values: any[]): string {
  const result: string[] = []
  for (let i = 0; i < values.length; i++) {
    result.push(strings[i])
    result.push(stringify(values[i]))
  }
  result.push(last(strings))
  return result.join('')
}

function last<T>(xs: ArrayLike<T>): T {
  return xs[xs.length - 1]
}
