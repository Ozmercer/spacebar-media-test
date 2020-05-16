import { SecondsToTimerPipe } from './seconds-to-timer.pipe';

describe('SecondsToTimerPipe', () => {
  it('create an instance', () => {
    const pipe = new SecondsToTimerPipe();
    expect(pipe).toBeTruthy();
  });
});
