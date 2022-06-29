const { defaultExport, bar, foo } = require('./mocking-partial');

jest.mock('./mocking-partial', () => {
  const originalModule = jest.requireActual('./mocking-partial');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    defaultExport: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

test('should do a partial mock', () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
})