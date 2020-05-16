import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTimer'
})
export class SecondsToTimerPipe implements PipeTransform {

  transform(time: number): string {
    let seconds = (time % 60).toString();
    let minutes = ((time - +seconds) / 60).toString();

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    return `${minutes}:${seconds}`;
  }
  
}
