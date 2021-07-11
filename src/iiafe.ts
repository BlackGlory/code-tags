import { javascript } from './javascript'
import { dedent } from 'extra-tags'
import { Value } from './types'

export function IIAFE(
  strings: TemplateStringsArray
, ...values: Value[]
): string {
  const codes = javascript(strings, ...values)

  return dedent`
    ;(async () => {
      ${codes}
    })();
  `
}
