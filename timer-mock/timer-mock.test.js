const { timerGame } = require('./timer-mock')

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

it('waits one second before ending the game', () => {
  console.log('Hello from timer')
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
})