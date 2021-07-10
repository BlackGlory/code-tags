import * as target from '@src/index'

test('exports', () => {
  const expected = [
    'javascript'

  , 'IIFE'
  , 'IIAFE'
  ].sort()

  const exports = Object.keys(target).sort()

  expect(exports).toEqual(expected)
})
