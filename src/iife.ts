import { javascript } from './javascript'
import { removeMultilineHeader, removeMultilineFooter, removeExtraIndents } from 'extra-tags'
import { Value } from './types'

export function IIFE(
  strings: TemplateStringsArray
, ...values: Value[]
): string {
  const codes = javascript(strings, ...values)

  return removeExtraIndents(removeMultilineFooter(removeMultilineHeader(`
    ;(() => {
      ${codes}
    })();
  `)))
}
