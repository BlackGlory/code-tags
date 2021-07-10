import { IIAFE } from '@src/iiafe'

test('IIAFE(strings: TemplateStringsArray, ...values: any[]): string', () => {
  const result = IIAFE`
    console.log(${'hello world'})
  `

  expect(result).toBe(
    ';(async () => {' + '\n'
  + '  ' + '\n'
  + 'console.log("hello world")' + '\n'
  + '  ' + '\n'
  + '})();'
  )
})
