import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrizesService } from '../services/prize/prizes.service';
import { Prize } from '../models/prize';
import { timer } from 'rxjs';

@Component({
  selector: 'app-claim-screen',
  templateUrl: './claim-screen.component.html',
  styleUrls: ['./claim-screen.component.sass']
})
export class ClaimScreenComponent implements OnInit, OnDestroy {
  prize: Prize = null;
  timer = null;

  constructor(private prizesService: PrizesService) {
    prizesService.randomPrize().then(randomPrize => {
      this.prize = randomPrize;
    })
   }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.prize.countdown--;
      if (!this.prize.countdown) {
        clearInterval(this.timer)
      }
    }, 1000)
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
