import { stripIndent } from 'common-tags'
import { code } from './code'

export function IIAFE(strings: TemplateStringsArray, ...values: any[]): string {
  const codes = code(strings, ...values)
  return stripIndent`
    ;(async () => {
      ${codes}
    })();
  `
}
