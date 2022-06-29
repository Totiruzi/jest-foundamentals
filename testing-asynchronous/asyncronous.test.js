// function fetchData (callback) {
//   setTimeout(() => {
//     callback('Banana cakes are floppy')
//   }, 100);
// }

const { fetchData, fetchDataPromise, fetchDataPromiseWithError, fetchDataPromiseWithErrorMessage } = require('./asyncronous')

it('the data should be Banana cakes are floppy', () => { 
  function callback(data) {
    expect(data).toBe('Banana cakes are floppy')
  }

  fetchData(callback);
 })


test('the data is Banana cakes are floppy',async () => {
  const data = await fetchDataPromise()
    expect(data).toMatch('Banana cakes are floppy');
});


test('the data is Banana cakes are floppy', async () => {
  return await expect(fetchDataPromise()).resolves.toBe('Banana cakes are floppy');
});

test('the data is No Banana cakes', async () => {
  return await expect(fetchDataPromiseWithErrorMessage()).rejects.toMatch('No Banana cakes');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    return await fetchDataPromiseWithErrorMessage();
  } catch (e) {
    expect(e).toMatch('No Banana cakes');
  }
});

test('the data is No Banana cakes', async () => {
  return await expect(fetchDataPromiseWithError()).rejects.toThrow('No Banana cakes');
});
