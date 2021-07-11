import { javascript } from './javascript'
import { dedent } from 'extra-tags'
import { Value } from './types'

export function IIFE(
  strings: TemplateStringsArray
, ...values: Value[]
): string {
  const codes = javascript(strings, ...values)

  return dedent`
    ;(() => {
      ${codes}
    })();
  `
}
