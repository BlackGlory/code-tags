import { javascript } from './javascript'
import { dedent } from 'extra-tags'
import { Value } from './types'

/**
 * Immediately Invoked Function Expression
 */
export function IIFE(
  strings: TemplateStringsArray
, ...values: Value[]
): string {
  const codes = javascript(strings, ...values)

  return dedent`
    ;(function () {
      ${codes}
    })();
  `
}
