import { IIAAF } from '@src/iiaaf'

test('IIAAF(strings: TemplateStringsArray, ...values: Value[]): string', () => {
  const result = IIAAF`
    console.log(${'hello world'})
  `

  expect(result).toBe(
    ';(async () => {' + '\n'
  + '  console.log("hello world")' + '\n'
  + '})();'
  )
})
