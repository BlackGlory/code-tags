import { javascript } from './javascript'
import { dedent } from 'extra-tags'
import { Value } from './types'

/**
 * Immediately Invoked Async Arrow Function
 */
export function IIAAF(
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
