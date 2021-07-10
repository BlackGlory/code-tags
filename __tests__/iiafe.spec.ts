import { IIAFE } from '@src/iiafe'

test('IIAFE(strings: TemplateStringsArray, ...values: Value[]): string', () => {
  const result = IIAFE`
    console.log(${'hello world'})
  `

  expect(result).toBe(
    ';(async () => {' + '\n'
  + '  console.log("hello world")' + '\n'
  + '})();'
  )
})
