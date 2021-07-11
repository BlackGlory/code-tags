import * as target from '@src/index'

test('exports', () => {
  const expected = [
    'javascript'

  , 'IIAF'
  , 'IIAAF'
  ].sort()

  const exports = Object.keys(target).sort()

  expect(exports).toEqual(expected)
})
