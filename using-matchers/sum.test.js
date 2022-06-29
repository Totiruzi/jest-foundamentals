const sum = require('./sum')

test('adds 2 + 5 to equall 7 ', () => {
  expect( 2 + 5 ).toBe(7)
});

test('object asignment', () => {
  const data = {one: 1};
  data['two']= 2
  expect(data).toEqual({one: 1, two: 2})
})

test('array asignment', () => {
  const data = [1, 'two'];
  data[3]= 4
  expect(data).toEqual([1, 'two', undefined, 4])
})