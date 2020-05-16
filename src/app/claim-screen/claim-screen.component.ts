import { Component, OnInit } from '@angular/core';
import { PrizesService } from '../services/prize/prizes.service';
import { Prize } from '../models/prize';

@Component({
  selector: 'app-claim-screen',
  templateUrl: './claim-screen.component.html',
  styleUrls: ['./claim-screen.component.sass']
})
export class ClaimScreenComponent implements OnInit {
  prize: Prize = null;

  constructor(private prizesService: PrizesService) {
    prizesService.randomPrize().then(randomPrize => {
      this.prize = randomPrize;
    })
   }

  ngOnInit(): void {
  }

}
