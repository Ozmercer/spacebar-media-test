import { SecondsToTimerPipe } from './seconds-to-timer.pipe';	

describe('SecondsToTimerPipe', () => {
  it('converts seconds to timer correctly', () => {	
    const pipe = new SecondsToTimerPipe();	

    expect(pipe.transform(660)).toEqual('11:00');	
    expect(pipe.transform(60)).toEqual('01:00');	
    expect(pipe.transform(25)).toEqual('00:25');	
    expect(pipe.transform(5)).toEqual('00:05');	
    expect(pipe.transform(90)).toEqual('01:30');	
  });	
});