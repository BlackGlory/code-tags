import { stripIndent } from 'common-tags'
import { code } from './code'

export function IIFE(strings: TemplateStringsArray, ...values: any[]): string {
  const codes = code(strings, ...values)
  return stripIndent`
    ;(() => {
      ${codes}
    })();
  `
}
