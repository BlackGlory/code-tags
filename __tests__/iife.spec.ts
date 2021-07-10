import { IIFE } from '@src/iife'

test('IIFE(strings: TemplateStringsArray, ...values: any[]): string', () => {
  const result = IIFE`
    console.log(${'hello world'})
  `

  expect(result).toBe(
    ';(() => {' + '\n'
  + '  ' + '\n'
  + 'console.log("hello world")' + '\n'
  + '  ' + '\n'
  + '})();'
  )
})
