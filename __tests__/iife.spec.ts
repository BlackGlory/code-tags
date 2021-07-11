import { IIFE } from '@src/iife'

test('IIFE(strings: TemplateStringsArray, ...values: Value[]): string', () => {
  const result = IIFE`
    console.log(${'hello world'})
  `

  expect(result).toBe(
    ';(function () {' + '\n'
  + '  console.log("hello world")' + '\n'
  + '})();'
  )
})
