
const { forEach } = require('./mock-functions')

// function forEach(items, callback) {
//   for (let index = 0; index < items.length; index++) {
//     callback(items[index]);
//   }
// }

test('Mocked Functions', () => {

  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 30, 1, 2], mockCallback);

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(4);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[1][0]).toBe(30);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[2][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);

  // The return value of the first call to the function was 43
  expect(mockCallback.mock.results[2].value).toBe(43);

  // The return value of the second call first value to the function was 42
  // expect(mockCallback.mock.results[2][0].value).toBe(72);

})


test('mocked property', () => {

  const myMock1 = jest.fn();
  const a = new myMock1();
  a.name = 'a';
  console.log(myMock1.mock.instances);
  // > [ <a> ]

  const myMock2 = jest.fn();
  const b = {};
  b.name = 'b'
  const bound = myMock2.bind(b);
  bound();
  console.log(myMock2.mock.contexts);
  // > [ <b> ]
})


test('how functions are called, istanciated or what they return', () => {

  const someMockFunction = jest.fn(() => 'return value');
  someMockFunction('first arg', 'second arg')

  // The function was called exactly once
  expect(someMockFunction.mock.calls.length).toBe(1);

  // The first arg of the first call to the function was 'first arg'
  expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

  // The second arg of the first call to the function was 'second arg'
  expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

  // The return value of the first call to the function was 'return value'
  expect(someMockFunction.mock.results[0].value).toBe('return value');

  const contextsMockFunction = jest.fn();

  const a = new contextsMockFunction();
  a.name = 'test';

  const b = new contextsMockFunction();
  

  // The function was called with a certain `this` context: the `element` object.
  // expect(contextsMockFunction.mock.contexts[0]).toBe(element);

  // This function was instantiated exactly twice
  expect(contextsMockFunction.mock.instances.length).toBe(2);

  // The object returned by the first instantiation of this function
  // had a `name` property whose value was set to 'test'
  expect(contextsMockFunction.mock.instances[0].name).toEqual('test');

  // The first argument of the last call to the function was 'test'
  // expect(contextsMockFunction.mock.lastCall[0]).toBe('test');
})

test('mocke rturned values', () => {

  const myMock = jest.fn();
  console.log(myMock());
  // > undefined

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());
  // > 10, 'x', true, true
})

test('filterTesting', () => {

  const filterTestFn = jest.fn();

  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter(num => filterTestFn(num));

  console.log(result);
  // > [11]
  console.log(filterTestFn.mock.calls[0][0]); // 11
  console.log(filterTestFn.mock.calls[1][0]); // 12
})