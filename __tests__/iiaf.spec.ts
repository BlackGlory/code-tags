import { IIAF } from '@src/iiaf'

test('IIAF(strings: TemplateStringsArray, ...values: Value[]): string', () => {
  const result = IIAF`
    console.log(${'hello world'})
  `

  expect(result).toBe(
    ';(() => {' + '\n'
  + '  console.log("hello world")' + '\n'
  + '})();'
  )
})
