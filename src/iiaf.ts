import { javascript } from './javascript'
import { dedent } from 'extra-tags'
import { Value } from './types'

/**
 * Immediately Invoked Arrow Function
 */
export function IIAF(
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
