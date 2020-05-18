import { TestBed } from '@angular/core/testing';	

import { PrizesService } from './prizes.service';	
import { HttpClientModule } from '@angular/common/http';

describe('PrizesService', () => {	
  let service: PrizesService;	

  beforeEach(() => {	
    TestBed.configureTestingModule({
        imports: [HttpClientModule]
    });	
    service = TestBed.inject(PrizesService);	
  });	

  const possiblePrizes = ['Free Spins', 'Coins', 'Bonus', 'Coupons']

  it('should be get data', () => {	
    service.randomPrize().then(res => {
        expect(possiblePrizes).toContain(res.prize);
    })    
  });	
});